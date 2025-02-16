import React from "react";
import { FolderDto } from "../../../dto/folder.dto";
import { TableRow } from "../Row";
import AccordingFactoryRequest from "../../../dto/AccordionFactoryRequest";
import styled from "styled-components";
import { useAccordion } from "../../../stateManagement";
import AccordionContextProps from "../../../interfaces/AccordionContextProps";

const RowWarpper = styled.div<{ otherStyle?: string }>`
  background-color: white;
  border-radius: 10px;
  ${(props) => props?.otherStyle}
`;

const TableAccordion: React.FC<AccordingFactoryRequest> = ({
  data,
  level,
}: AccordingFactoryRequest) => {
  const {
    openAccordions: expanded,
    toggleAccordion: toggleExpand,
  }: AccordionContextProps = useAccordion();

  function isFolder(data: FolderDto): boolean {
    return data.children && data.children.length > 0;
  }


  function getStyle(set: Set<String>, level: number, id: string) {
    set;
    if (expanded.has(id)) {
      if (level === 0) {
        return `
          background: #A9B5DF4D;
          padding-top: 10px;
          border-radius: 10px 10px 0 0;
          box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.2);
        `;
      } else {
        return "border-bottom: 1px solid #ddd;";
      }
    }
  }

  return (
    <>
      {data.map((item) => {
        return (
          <RowWarpper 
          otherStyle={level == 0 ? "margin: 10px;" : ""}
          >
            <TableRow
              key={item.id}
              item={item}
              level={level}
              expanded={expanded}
              toggleExpand={toggleExpand}
              otherStyles={getStyle(expanded, level, item.id)}
            />
            {isFolder(item) &&
              expanded.has(item.id) &&
              item.children.map((child) => (
                <TableAccordion
                  key={child.id}
                  data={[child]}
                  level={level + 1}
                />
              ))}
            {item.file &&
              expanded.has(item.id) &&
              item.file.map((file) => (
                <TableRow
                  key={file.id}
                  item={file}
                  level={level + 1}
                  expanded={expanded}
                  toggleExpand={toggleExpand}
                  otherStyles={"border-bottom: 1px solid #ddd;"}
                />
              ))}
          </RowWarpper>
        );
      })}
    </>
  );
};

export default TableAccordion;
