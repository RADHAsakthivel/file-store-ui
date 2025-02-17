import styled from "styled-components";

interface PLargeProps {
  text: string;
  otherProps?: string;
}

const P = styled.p<{ otherstyles?: string }>`
  font-family: Inter;
  font-weight: 600;
  font-size: 20px;
  line-height: 24.2px;
  letter-spacing: 0%;
${(props) => props?.otherstyles}
`;

export const PLarge = ({ text, otherProps }: PLargeProps) => {
  return <P otherstyles={otherProps || ""}>{text}</P>;
};

export default PLarge;
