import React from "react";
import styled from "styled-components";
import { FunnelFill } from "styled-icons/bootstrap";
import { Add } from "@styled-icons/fluentui-system-filled";
import { Icon } from "../Icon";
import ContextCreateUploadRow from "./ContextCreateUploadRow";
import FilterContextRow from "./ContextFilterRow";

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const StyleFunnel = styled(FunnelFill)`
  fill: white;
  height: 20px;
`;

const StyleAdd = styled(Add)`
  fill: white;
  height: 20px;
`;

const iconStyle = `
  background-color: #2D336BCC; 
  display: flex; 
  justify-content: center; 
  align-items: center; 
  border-radius: 10px;
  margin-inline: 5px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #2D336B;
  }
`;

const Context: React.FC = () => {

  
  return (
    <Div>
      <FilterContextRow
        icon={<Icon icon={StyleFunnel} height="35px" width="35px" othersStyle={iconStyle} />}
      />
      <ContextCreateUploadRow
        icon={<Icon icon={StyleAdd} height="35px" width="35px" othersStyle={iconStyle} />}
      />
    </Div>
  );
};

export default Context;
