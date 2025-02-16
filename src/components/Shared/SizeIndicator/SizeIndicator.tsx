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
    return size < 900 ? (size - (size % 100)).toString() + "+" : "900+";
  }
  otherStyles;
  return (
    <Div >
      <StyledIcon />
      <PSmall text={name} />
      <PLarge text={getSize(size)} otherProps="margin-block:7px;" />
    </Div>
  );
};

export default SizeIndicator;
