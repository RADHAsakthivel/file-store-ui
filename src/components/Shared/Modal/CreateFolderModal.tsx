import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

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
  const [folderName, setFolderName] = useState("");
  const [description, setDescription] = useState("");

  return (
    <Overlay onClick={(e) => e.stopPropagation()}>
      <Modal
        title="Create Folder"
        onClose={onClose}
        onConfirm={() =>
          console.log(
            "folderName =>",
            folderName,
            "description =>",
            description
          )
        }
      >
        <Input
          type="text"
          placeholder="Folder name"
          value={folderName}
          onChange={(e) => setFolderName(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Folder description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Modal>
    </Overlay>
  );
};

export default CreateFolderModal;
