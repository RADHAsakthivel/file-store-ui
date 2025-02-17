import React from "react";
import styled from "styled-components";
import { FolderDto } from "../../../dto/folder.dto";
import { FileDto } from "../../../dto/file.dto";
import MoreOptionCell from "../Cell/Body/MoreOptionCell";
import { DateCell, FirstHeadCell, TextCell } from "../Cell/Body";
import {PSmall} from "../../Shared/P"

const Row = styled.div<{ rowstyles?: string }>`
  display: grid;
  grid-template-columns: 8% 20% 20% 20% 20% 10%;
  padding-block: 8px;
  padding-left: 5px;

  &:hover{
    background: #A9B5DF4D;
  }
  ${({ rowstyles }) => rowstyles}
`;

const TableRow: React.FC<{
  folderItem?: FolderDto;
  fileItem?: FileDto;
  expanded: Set<string>;
  toggleExpand: (id: string) => void;
  otherStyles?: string;
}> = ({ folderItem, fileItem, expanded, toggleExpand, otherStyles }) => {
  const rowStyles = `${otherStyles}`;
  return (
    <>
      {folderItem && (
        <Row rowstyles={rowStyles}>
          <FirstHeadCell
            id={folderItem?._id}
            name={folderItem?.name}
            isExpanded={expanded.has(folderItem?._id)}
            isFolder={true}
            toggleExpand={toggleExpand}
          />
          <PSmall text={folderItem?.name} otherStyle="font-weight: 600 !important;" />
          <TextCell description={folderItem?.description || "---"} />
          <DateCell date={folderItem?.createdAt} />
          <DateCell date={folderItem?.updatedAt} />
          <MoreOptionCell currentFolderData={folderItem} />
        </Row>
      )}
      {fileItem && (
        <Row rowstyles={rowStyles}>
          <FirstHeadCell
            id={fileItem?._id}
            name={fileItem?.name}
            isExpanded={expanded.has(fileItem?._id)}
            isFolder={false}
            toggleExpand={toggleExpand}
          />
          <PSmall text={fileItem?.name} otherStyle="font-weight: 600 !important;" />
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
