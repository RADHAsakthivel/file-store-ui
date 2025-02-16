import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

interface UploadFileModalProps {
  onClose: (e?:any) => void;
}

const FileInput = styled.input`
  display: none;
`;

const UploadContainer = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border: 2px dashed #ccc;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  width: auto;
  margin-block: 20px;
`;

const FileList = styled.div`
  margin-top: 10px;
  max-height: 100px;
  overflow-y: auto;
  font-size: 14px;
`;

const UploadFileModal: React.FC<UploadFileModalProps> = ({ onClose }) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFiles([...selectedFiles, ...Array.from(event.target.files)]);
    }
  };

  const handleUpload = () => {
    if (selectedFiles.length > 0) {
      setSelectedFiles([]);
      onClose();
    }
  };

  return (
    <Modal title="Upload Files" onClose={onClose} onConfirm={handleUpload}>
      <UploadContainer>
        <FileInput type="file" id="file-upload" multiple onChange={handleFileChange} />
        <p>Click to select files or drag & drop</p>
      </UploadContainer>

      {selectedFiles.length > 0 && (
        <FileList>
          {selectedFiles.map((file, index) => (
            <p key={index}>{file.name}</p>
          ))}
        </FileList>
      )}
    </Modal>
  );
};

export default UploadFileModal;
