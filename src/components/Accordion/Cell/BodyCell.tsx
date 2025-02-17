import React from "react";
import styled from "styled-components";

const TableCell = styled.div<{ tablestyle?: string }>`
  vertical-align: middle;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => props?.tablestyle}
`;

const Cell: React.FC<{ children: React.ReactNode; otherStyle?: string }> = ({
  children,
  otherStyle,
}) => {
  return <TableCell tablestyle={otherStyle}>{children}</TableCell>;
};

export default Cell;
