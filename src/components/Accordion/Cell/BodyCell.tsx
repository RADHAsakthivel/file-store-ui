import React from "react";
import styled from "styled-components";

const TableCell = styled.div<{ cellStyle?: string }>`
  vertical-align: middle;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => props?.cellStyle}
`;

const Cell: React.FC<{ children: React.ReactNode; otherStyle?: string }> = ({
  children,
  otherStyle,
}) => {
  return <TableCell cellStyle={otherStyle}>{children}</TableCell>;
};

export default Cell;
