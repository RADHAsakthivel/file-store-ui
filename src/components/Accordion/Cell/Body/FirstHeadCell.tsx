import React from "react";
import TableCell from "../../Cell/BodyCell";
import { CaretRightFill } from "@styled-icons/bootstrap";
import { CaretDownFill } from "@styled-icons/bootstrap";
import { Folder } from "@styled-icons/boxicons-regular";
import { File } from "@styled-icons/boxicons-regular/File";
import styled from "styled-components";

interface FirstHeadCellProps {
  id: string;
  name: string;
  isFolder: boolean;
  isExpanded: boolean;
  toggleExpand: (id: string) => void;
}

const ExpandIcon = styled.span`
  cursor: pointer;
  margin-right: 8px;
`;

const FolderIcon = styled(Folder)`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  color: #000000;
`;

const FileIcon = styled(File)`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  color: #4086f4;
`;

const FirstHeadCell: React.FC<FirstHeadCellProps> = ({
  id,
  name,
  isFolder,
  isExpanded,
  toggleExpand,
}: FirstHeadCellProps) => {

  name;
  return (
    <TableCell>
      {isFolder && (
        <ExpandIcon onClick={() => toggleExpand(id)}>
          {!isExpanded ? <CaretRightFill size={20} fontSize={10}/> : <CaretDownFill size={20} />}
        </ExpandIcon>
      )}
      {isFolder ? <FolderIcon /> : <FileIcon />}
    </TableCell>
  );
};

export default FirstHeadCell;
