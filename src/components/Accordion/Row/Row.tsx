import React from "react";
import styled from "styled-components";
import { FolderDto } from "../../../dto/folder.dto";
import { FileDto } from "../../../dto/file.dto";
import MoreOptionCell from "../Cell/Body/MoreOptionCell";
import { DateCell, FirstHeadCell, TextCell } from "../Cell/Body";

const Row = styled.div<{ rowStyles?: string }>`
  display: grid;
  grid-template-columns: 15% 25% 25% 25% 10%;
  align-items: center;
  justify-content: space-between;
  padding-block: 8px;
  padding-left: 5px;
  ${({ rowStyles }) => rowStyles}
`;

const TableRow: React.FC<{
  item: FolderDto | FileDto;
  level: number;
  expanded: Set<string>;
  toggleExpand: (id: string) => void;
  otherStyles?: string;
}> = ({ item, level, expanded, toggleExpand, otherStyles }) => {
  const isFolder = (item as FolderDto).children !== undefined;
  const padding = level*20 ? level*20 : 5;
  const rowStyles= `${otherStyles} padding-left: ${padding}px;`
  return (
    <>
      <Row rowStyles={rowStyles}>
        <FirstHeadCell
          id={item.id}
          name={item.name}
          isExpanded={expanded.has(item.id)}
          isFolder={isFolder}
          toggleExpand={toggleExpand}
        />
        <TextCell description={item?.description || "---"} />
        <DateCell date={item.createdAt} />
        <DateCell date={item.updatedAt} />
        <MoreOptionCell />
      </Row>
    </>
  );
};

export default TableRow;
