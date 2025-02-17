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
  folderItem?: FolderDto;
  fileItem?: FileDto;
  level: number;
  expanded: Set<string>;
  toggleExpand: (id: string) => void;
  otherStyles?: string;
}> = ({ folderItem, fileItem, level, expanded, toggleExpand, otherStyles }) => {
  const padding = level * 20 ? level * 20 : 5;
  const rowStyles = `${otherStyles} padding-left: ${padding}px;`;
  return (
    <>
      {folderItem && (
        <Row rowStyles={rowStyles}>
          <FirstHeadCell
            id={folderItem?._id}
            name={folderItem?.name}
            isExpanded={expanded.has(folderItem?._id)}
            isFolder={true}
            toggleExpand={toggleExpand}
          />
          <TextCell description={folderItem?.description || "---"} />
          <DateCell date={folderItem?.createdAt} />
          <DateCell date={folderItem?.updatedAt} />
          <MoreOptionCell currentFolderData={folderItem} />
        </Row>
      )}
      {fileItem && (
        <Row rowStyles={rowStyles}>
          <FirstHeadCell
            id={fileItem?._id}
            name={fileItem?.name}
            isExpanded={expanded.has(fileItem?._id)}
            isFolder={false}
            toggleExpand={toggleExpand}
          />
          <TextCell description={"---"} />
          <DateCell date={fileItem?.createdAt} />
          <DateCell date={fileItem?.updatedAt} />
          <MoreOptionCell currentFileData={fileItem} />
        </Row>
      )}
    </>
  );
};

export default TableRow;
