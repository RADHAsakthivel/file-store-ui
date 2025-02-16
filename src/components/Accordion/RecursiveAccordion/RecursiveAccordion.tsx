import React from "react";
import SimpleCard from "../../Shared/Card/SimpleCard";
import { DocumentTypeEnum } from "../../../enum/DocumentType.enum";
import styled from "styled-components";
import AccordingFactoryRequest from "../../../dto/AccordionFactoryRequest";
import { useAccordion } from "../../../stateManagement";
import AccordionContextProps from "../../../interfaces/AccordionContextProps";

const Div = styled.div<{ otherStyle?: string }>`
  ${(props) => props?.otherStyle}
`;

const RecursiveAccordion: React.FC<AccordingFactoryRequest> = ({
  data,
  level,
  otherStyle,
}: AccordingFactoryRequest) => {
  const {
    openAccordions: expanded,
    toggleAccordion: toggleExpand,
  }: AccordionContextProps = useAccordion();

  return (
    <Div otherStyle={otherStyle}>
      {data.map((folder) => (
        <div key={folder.id}>
          <SimpleCard
            key={folder.id}
            title={folder.name}
            documentType={DocumentTypeEnum.FOLDER}
            onClick={() => {
              toggleExpand(folder.id);
            }}
            otherStyle={
              expanded.has(folder.id) ? "background-color: #A9B5DF4D" : ""
            }
            isClicked={expanded.has(folder.id)}
          />
          {expanded.has(folder.id) && folder.children && (
            <div>
              <RecursiveAccordion
                data={folder.children}
                otherStyle={`margin-left:1${level}px`}
                level={level + 2}
              />
            </div>
          )}
          {expanded.has(folder.id) &&
            folder.file &&
            folder.file.map((file) => (
              <SimpleCard
                key={file.id}
                title={file.id}
                documentType={file.type}
                otherStyle={`
                  margin-left:1${level}px;
                  ${
                    expanded.has(folder.id) ? "background-color: #A9B5DF4D" : ""
                  }
                  `}
                onClick={() => {}}
                isClicked={false}
              />
            ))}
        </div>
      ))}
    </Div>
  );
};

export default RecursiveAccordion;
