import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import { FolderDto, FolderDtoClass } from "../../../dto/folder.dto";
import { createFolder, getFolders } from "../../../../service";
import AccordionContextProps from "../../../interfaces/AccordionContextProps";
import { useAccordion } from "../../../stateManagement";

interface CreateFolderModalProps {
  onClose: (e: any) => void;
  parent?:FolderDto;
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 95%;
  padding: 8px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const CreateFolderModal: React.FC<CreateFolderModalProps> = ({ parent, onClose }) => {
  
  const {
    setAccoridionsData,
  }: AccordionContextProps = useAccordion();
  
  const [folderFormData, setfolderFormData] = useState(new FolderDtoClass());

  const folderDataChangeHandler = (e: any): void => {
    setfolderFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const createFolderInRoot = async (e:any) => {
    if(parent){
      folderFormData.parent = parent._id;
    }else{
      folderFormData.parent = null;
    }
    await createFolder(folderFormData);
    setAccoridionsData(await getFolders());
    onClose(e);
  };

  return (
    <Overlay onClick={(e) => e.stopPropagation()}>
      <Modal
        title="Create Folder"
        onClose={onClose}
        onConfirm={createFolderInRoot}
      >
        <Input
          type="text"
          placeholder="Folder name"
          name={"name"}
          value={folderFormData.name}
          onChange={folderDataChangeHandler}
        />
        <Input
          type="text"
          placeholder="Folder description"
          name="description"
          value={folderFormData.description}
          onChange={folderDataChangeHandler}
        />
      </Modal>
    </Overlay>
  );
};

export default CreateFolderModal;
