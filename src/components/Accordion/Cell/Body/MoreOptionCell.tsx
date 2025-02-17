import React, { useEffect, useRef, useState } from "react";
import TableCell from "../../Cell/BodyCell";
import { MoreVertical } from "@styled-icons/feather/MoreVertical";
import { Menu } from "../../../Shared/Menu";
import { FolderDto } from "../../../../dto/folder.dto";
import { FileDto } from "../../../../dto/file.dto";
import styled from "styled-components";

interface MoreOptionCellProps{
  currentFolderData? : FolderDto | undefined;
  currentFileData? : FileDto | undefined;
}

const StyledMoreVertical = styled(MoreVertical)`
  height:16px;
  width:16px;
  cursor:pointer;

  &:hover{
    background: #9699b5;
    border-radius: 50px;
    padding:2px;
  }
`;

const MoreOptionCell: React.FC<MoreOptionCellProps> = ({currentFolderData,currentFileData}:MoreOptionCellProps) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuVisible(false);
      }
    };

    if (menuVisible) {
      window.addEventListener("click", handleClickOutside);
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [menuVisible]);

  return (
    <TableCell otherStyle={"position:relative"}>
      <span
        onClick={(event) => {
          event.stopPropagation();
          setMenuVisible(!menuVisible);
        }}
        style={{ cursor: "pointer" }}
      >
        <StyledMoreVertical />
      </span>

      {menuVisible && currentFolderData && (
          <Menu ref={menuRef} onClick={(event) => event.stopPropagation()} currentFoldertData={currentFolderData}/>
      )}
      
      {menuVisible && currentFileData && (
          <Menu ref={menuRef} onClick={(event) => event.stopPropagation()} currentFileData={currentFileData}/>
      )}
    </TableCell>
  );
};

export default MoreOptionCell;
