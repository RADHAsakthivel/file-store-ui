import styled from "styled-components";
import { PLarge, PSmall } from "../P";

interface SizeIndicatorProps {
  icon: React.ElementType;
  name: string;
  size: number;
  otherStyles?:string;
}

const Div = styled.div<{ otherStyles?: string }>`
  margin-right: 20px;
  width: 75px;
  height: 90px;
  ${(props) => props?.otherStyles}
`;

const SizeIndicator = ({
  icon: StyledIcon,
  name,
  size,
  otherStyles,
}: SizeIndicatorProps) => {
  function getSize(size: number): string {
    return size < 900 ? size.toString() + "" : "900+";
  }
  return (
    <Div >
      <StyledIcon />
      <PSmall text={name} />
      <PLarge text={getSize(size)} otherProps={otherStyles ||"margin-block:7px;"} />
    </Div>
  );
};

export default SizeIndicator;
