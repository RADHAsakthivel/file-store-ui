import React from "react";
import SimpleCard from "../../Shared/Card/SimpleCard";
import { DocumentTypeEnum } from "../../../enum/DocumentType.enum";
import styled from "styled-components";
import AccordingFactoryRequest from "../../../dto/AccordionFactoryRequest";
import { useAccordion } from "../../../stateManagement";
import AccordionContextProps from "../../../interfaces/AccordionContextProps";

const Div = styled.div<{ otherstyle?: string }>`
  ${(props) => props?.otherstyle}
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
    <Div otherstyle={otherStyle}>
      {data?.map((folder) => (
        <div key={folder._id}>
          <SimpleCard
            key={folder._id}
            title={folder.name}
            documentType={DocumentTypeEnum.FOLDER}
            onClick={() => {
              toggleExpand(folder._id);
            }}
            otherStyle={`
              grid-template-columns: 1fr 9fr auto;
              display: grid;
              align-items: center;
              ${expanded.has(folder._id) ? "background-color: #A9B5DF4D" : ""}
              `}
            isClicked={expanded.has(folder._id)}
          />
          {expanded.has(folder._id) && folder.children && (
            <div>
              <RecursiveAccordion
                data={folder.children}
                otherStyle={`margin-left:1${level}px`}
                level={level + 2}
              />
            </div>
          )}
          {expanded.has(folder._id) &&
            !!folder?.files?.length &&
            folder.files.map((file) => (
              <SimpleCard
                key={file._id}
                title={file.name}
                documentType={file.type}
                otherStyle={`
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  margin-left:1${level}px;
                  ${
                    expanded.has(folder._id)
                      ? "background-color: #A9B5DF4D"
                      : ""
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
