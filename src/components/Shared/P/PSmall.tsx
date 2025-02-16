import styled from "styled-components";

interface PSmallProps {
  text: string;
  otherStyle?: string;
}

const P = styled.p<{ otherStyle?: string }>`
  font-family: Inter;
  font-weight: 400;
  font-size: 13px;
  line-height: 15.73px;
  letter-spacing: 0%;
${(props) => props?.otherStyle}
`;

export const PSmall = ({ text, otherStyle }: PSmallProps) => {
  return <P otherStyle={otherStyle}>{text}</P>;
};

export default PSmall;
