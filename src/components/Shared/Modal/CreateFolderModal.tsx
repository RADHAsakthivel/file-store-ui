import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import { FolderDtoClass } from "../../../dto/folder.dto";
import { createFolder } from "../../../../service";

interface CreateFolderModalProps {
  onClose: (e: any) => void;
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

const CreateFolderModal: React.FC<CreateFolderModalProps> = ({ onClose }) => {
  const [folderFormData, setfolderFormData] = useState(new FolderDtoClass());

  const folderDataChangeHandler = (e: any): void => {
    console.log(e);
    setfolderFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const createFolderInRoot = async (e:any) => {
    folderFormData.parent = null;
    folderFormData.isRoot = true;
    folderFormData.isDisabled = false;
    folderFormData.isLeaf = true;
    folderFormData.level = 0;
    await createFolder(folderFormData);
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
