import React from "react";
import { FolderDto } from "../../../dto/folder.dto";
import { TableRow } from "../Row";
import AccordingFactoryRequest from "../../../dto/AccordionFactoryRequest";
import styled from "styled-components";
import { useAccordion } from "../../../stateManagement";
import AccordionContextProps from "../../../interfaces/AccordionContextProps";

const RowWarpper = styled.div<{ otherstyle?: string }>`
  background-color: white;
  border-radius: 10px;
  ${(props) => props?.otherstyle}
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

  // eslint-disable-next-line @typescript-eslint/no-wrapper-object-types
  function getStyle(expanded: Set<String>, currentLevel: number, id: string) {
    const padding = currentLevel * 20 > 0 ? currentLevel * 20 : 5;
    if (expanded.has(id)) {
      if (currentLevel === 0) {
        return `
          background: #A9B5DF4D;
          padding-top: 10px;
          border-radius: 10px 10px 0 0;
          box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.2);
        `;
      } else {
        return `padding-left: ${padding}px; border-bottom: 1px solid #ddd;`;
      }
    }else{
      return `padding-left: ${padding}px; border-bottom: 1px solid #ddd;`;
    }
  }
  return (
    <>
      {data?.map((item) => {
        return (
          <RowWarpper
            otherstyle={level == 0 ? "margin: 10px;" : ""}
            key={item._id}
          >
            <TableRow
              key={item._id}
              folderItem={item}
              expanded={expanded}
              toggleExpand={toggleExpand}
              otherStyles={getStyle(expanded, level, item._id)}
            />
            {isFolder(item) &&
              expanded.has(item._id) &&
              item.children.map((child) => (
                <TableAccordion
                  key={child._id}
                  data={[child]}
                  level={level + 1}
                />
              ))}
            {!!item?.files?.length &&
              expanded.has(item._id) &&
              item.files.map((file) => (
                <TableRow
                  key={file._id}
                  fileItem={file}
                  expanded={expanded}
                  toggleExpand={toggleExpand}
                  otherStyles={getStyle(expanded, level, item._id)}
                />
              ))}
          </RowWarpper>
        );
      })}
    </>
  );
};

export default TableAccordion;
