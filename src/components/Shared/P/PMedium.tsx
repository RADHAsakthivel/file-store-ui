import styled from "styled-components";

interface PMediumProps {
  text: string;
  otherProps?: string;
}

const P = styled.p<{ otherStyles?: string }>`
  font-family: Inter;
  font-weight: 600;
  font-size: 15px;
  line-height: 18.15px;
  letter-spacing: 0%;
${(props) => props?.otherStyles}
`;

export const PMedium = ({ text, otherProps }: PMediumProps) => {
  return <P otherStyles={otherProps}>{text}</P>;
};

export default PMedium;
