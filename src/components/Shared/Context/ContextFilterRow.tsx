import React, { useState } from "react";
import styled from "styled-components";
import { FilterModal } from "../Modal";

interface ContextFilterRowProps {
  icon: React.ReactNode;
}

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

const ContextFilterRow: React.FC<ContextFilterRowProps> = ({ icon }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const filterModelCloseHandler = (e: any) => {
    e.stopPropagation();
    setMenuVisible((prev) => !prev);
  };

  return (
    <Div
      onClick={(e) => {
        e.stopPropagation();
        setMenuVisible(true);
      }}
    >
      {icon}
      {menuVisible && <FilterModal onClose={filterModelCloseHandler} />}
    </Div>
  );
};

export default ContextFilterRow;
