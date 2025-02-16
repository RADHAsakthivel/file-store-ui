import styled from "styled-components";
import { IconProps } from "../../../interfaces/Icon.interface";

const Div = styled.span<{ styles?: any }>`
  width: ${(props) => props.styles.width || "auto"};
  height: ${(props) => props.styles.height || "auto"};
  margin: ${(props) => props.styles.margin || "0"};
  padding: ${(props) => props.styles.padding || "0"};
  ${(props) => props.styles.othersStyle || ""}
`;

const Icon: React.FC<IconProps> = ({
  icon: StyledIcon,
  width,
  height,
  margin,
  padding,
  othersStyle,
}) => {
  const style = {
    width,
    height,
    margin,
    padding,
    othersStyle,
  };
  return <Div styles={style}>{StyledIcon && <StyledIcon />}</Div>;
};

export default Icon;
