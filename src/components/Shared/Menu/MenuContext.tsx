import React from "react";
import styled from "styled-components";

interface MenuProps {
  text: string;
  style?: string;
  showBoarder?: boolean;
  onClick?: (e:any) => void;
  icon?: React.ElementType;
}

const Div = styled.div<{ otherStyles?: string}>`
  padding: 5px;
  cursor: pointer;
  border-bottom: 1px solid #dddddd;
  ${(props) => props?.otherStyles}
  &:hover {
    background: #a9b5df4d;
  }
`;

export const MenuContent = ({
  text,
  style,
  showBoarder,
  onClick,
  icon: MenuIcon,
}: MenuProps) => {
  showBoarder;
  return (
    <>
      <Div otherStyles={style} onClick={(e) => onClick && onClick(e)}>
        {MenuIcon && <MenuIcon />}
        <p>{text}</p>
      </Div>
    </>
  );
};

export default MenuContent;
