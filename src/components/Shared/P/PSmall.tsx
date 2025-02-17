import styled from "styled-components";

interface PSmallProps {
  text: string;
  otherStyle?: string;
}

const P = styled.p<{ otherstyle?: string }>`
  font-family: Inter;
  font-weight: 400;
  font-size: 13px;
  line-height: 15.73px;
  letter-spacing: 0%;
${(props) => props?.otherstyle}
`;

export const PSmall = ({ text, otherStyle }: PSmallProps) => {
  return <P otherstyle={otherStyle}>{text}</P>;
};

export default PSmall;
