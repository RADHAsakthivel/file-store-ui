import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import { upLoadFile, getFolders } from "../../../../service";
import { FileDtoClass } from "../../../dto/file.dto";
import { FolderDto } from "../../../dto/folder.dto";
import { FileExtensionTypeEnum } from "../../../enum/FileExtensionType.enum";
import { useAccordion } from "../../../stateManagement";
import AccordionContextProps from "../../../interfaces/AccordionContextProps";

interface UploadFileModalProps {
  onClose: (e?: any) => void;
  parentData?: FolderDto;
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

const UploadFileModal: React.FC<UploadFileModalProps> = ({
  onClose,
  parentData,
}) => {
  const { setAccoridionsData }: AccordionContextProps = useAccordion();

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFiles([...selectedFiles, ...Array.from(event.target.files)]);
    }
  };
  
  const handleUpload = async () => {
  
    if (selectedFiles.length > 0) {
  
      const formData = new FormData();
      const fileFormData = new FileDtoClass();
  
      selectedFiles.forEach((file) => {
        formData.append("file", file);
        fileFormData.name = file.name;
        fileFormData.extension =
          file.name.split(".").pop() || FileExtensionTypeEnum.UNKNOWN;
        fileFormData.type = file.type;
      });
  
      if (!parentData) {
        fileFormData.parentId = "root";
        fileFormData.description = "---";
      } else {
        fileFormData.parentId = parentData._id;
      }
      formData.append("metadata", JSON.stringify(fileFormData));
  
      await upLoadFile(formData);
      const data = await getFolders();
      setAccoridionsData(data);
      setSelectedFiles([] as any);
      onClose();
    }
  };

  return (
    <Modal title="Upload Files" onClose={onClose} onConfirm={handleUpload}>
      <UploadContainer>
        <FileInput
          type="file"
          id="file-upload"
          multiple
          onChange={handleFileChange}
        />
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
