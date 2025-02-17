import styled from "styled-components";
import { Folder } from "@styled-icons/boxicons-regular";
import { AddCircle } from "@styled-icons/ionicons-sharp";
import { DocumentText } from "@styled-icons/ionicons-solid";
import { PSmall } from "../P";
import { DocumentTypeEnum } from "../../../enum/DocumentType.enum";
import React from "react";

interface SimpleCardProps {
  title: string;
  documentType: DocumentTypeEnum;
  onClick: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
  isClicked: boolean;
  otherStyle?: string;
}

const Div = styled.div<{ otherstyle?: string }>`
  margin-block: 1px;
  padding: 10px 0 10px 5px;
  border-bottom: 1px solid #dddddd;
  ${(props) => props.otherstyle}
`;

const StyledFolder = styled(Folder)`
  width: 25px;
  height: 25px;
`;

const StyledFile = styled(DocumentText)`
  width: 25px;
  height: 25px;
  color: #4086f4;
`;

const StyledAddCircle = styled(AddCircle)<{ $active: boolean }>`
  height: 22px;
  width: 22px;
  color: ${({ $active }) => ($active ? "#ffd95f" : "#a9b5df4d")};
  cursor: pointer;
  &:hover {
    color: #ffd95f;
  }
`;

const SimpleCard = ({
  title,
  documentType,
  otherStyle,
  onClick,
  isClicked,
}: SimpleCardProps) => {
  return (
    <Div otherstyle={otherStyle}>
      {documentType == DocumentTypeEnum.FOLDER && <StyledFolder />}
      {documentType == DocumentTypeEnum.FILE && <StyledFile />}
      <PSmall text={title} />
      <StyledAddCircle
        $active={isClicked}
        onClick={(e) => {
          onClick(e);
        }}
      />
    </Div>
  );
};

export default SimpleCard;
