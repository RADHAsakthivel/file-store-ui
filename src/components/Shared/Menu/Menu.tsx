import React from "react";
import { TrashAlt } from "@styled-icons/boxicons-solid/TrashAlt";
import { CreateNewFolder } from "@styled-icons/material-outlined/CreateNewFolder";
import { FolderUpload } from "@styled-icons/icomoon/FolderUpload";
import { Edit } from "@styled-icons/material/Edit";
import MenuContext from "./MenuContext";
import styled from "styled-components";
import { CreateFolderModal, UploadFileModal } from "../Modal";
import { FolderDto } from "../../../dto/folder.dto";
import { FileDto } from "../../../dto/file.dto";
import { deleteFile, deleteFolder, getFolders } from "../../../../service";
import { useAccordion } from "../../../stateManagement";
import AccordionContextProps from "../../../interfaces/AccordionContextProps";

interface MenuProps {
  otherStyles?: string;
  currentFoldertData?: FolderDto;
  currentFileData?: FileDto;
  onClick?: (e: any) => void;
}

const tashIcon = styled(TrashAlt)`
  height: 22px;
  width: 22px;
`;
const createNewFolder = styled(CreateNewFolder)`
  height: 22px;
  width: 22px;
`;
const edit = styled(Edit)`
  height: 22px;
  width: 22px;
`;
const folderUpload = styled(FolderUpload)`
  height: 22px;
  width: 22px;
`;

const Menucontextdiv = styled.div<{ menuStyle?: string }>`
  background: #ffffff;
  box-shadow: 0px 0px 4px 4px #0000001a;
  position: absolute;
  right: 0;
  border-radius: 5px;
  width: 200px;
  ${(props) => props.menuStyle}
`;

const iconStyle = `
        display: grid;
        gap: 10px;
        grid-template-columns: 10% 90%;
      `;

const Menu = React.forwardRef<HTMLDivElement, MenuProps>(
  ({ otherStyles, currentFoldertData, currentFileData, onClick }, ref) => {
    const {
      setAccoridionsData
    }: AccordionContextProps = useAccordion();
    const [menuData, setMenuData] = React.useState({
      edit: false,
      delete: false,
      create: false,
      upload: false,
    });

    const setEditHandler = (e: any) => {
      e?.stopPropagation();
      setMenuData((prev) => ({
        ...prev,
        ["edit"]: !prev["edit"],
      }));
    };

    const setDeleteHandler = (e: any, id:string) => {
      e?.stopPropagation();
      setMenuData((prev) => ({
        ...prev,
        ["delete"]: !prev["delete"],
      }));
      deleteHandler(id);
    };

    const setCreateHandler = (e: any) => {
      e?.stopPropagation();
      setMenuData((prev) => ({
        ...prev,
        ["create"]: !prev["create"],
      }));
    };

    const setUploadHandler = (e: any) => {
      e?.stopPropagation();
      setMenuData((prev) => ({
        ...prev,
        ["upload"]: !prev["upload"],
      }));
    };

    const deleteHandler = async (id:string) =>{
      if(currentFoldertData){
        await deleteFolder(id);
      }else{
        await deleteFile(id);
      }
      const data = await getFolders();
      setAccoridionsData(data);
    }

    return (
      <Menucontextdiv ref={ref} menuStyle={otherStyles} onClick={onClick}>
        <MenuContext
          text="Edit"
          icon={edit}
          style={iconStyle}
          onClick={setEditHandler}
        />
        <MenuContext
          text="Delete"
          icon={tashIcon}
          style={iconStyle}
          onClick={(e) => setDeleteHandler(e,currentFoldertData?._id || currentFileData?._id || "")}
        />
        <MenuContext
          text="Create Folder"
          icon={createNewFolder}
          style={iconStyle}
          onClick={(e) => setCreateHandler(e)}
        />
        <MenuContext
          text="Upload Document"
          icon={folderUpload}
          style={iconStyle}
          onClick={(e) => setUploadHandler(e)}
        />
        {menuData.create && <CreateFolderModal parent={currentFoldertData} onClose={setCreateHandler} />}
        {menuData.upload && (
          <UploadFileModal
            parentData={currentFoldertData}
            onClose={setUploadHandler}
          />
        )}
      </Menucontextdiv>
    );
  }
);
export default Menu;
