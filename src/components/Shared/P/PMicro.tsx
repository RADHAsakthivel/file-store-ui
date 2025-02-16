import styled from "styled-components";

interface PMicroProps {
  text: string;
  otherProps?: string;
}

export const PMicro = ({ text, otherProps }: PMicroProps) => {
  const P = styled.p<{ otherProps?: string }>`
    font-family: Inter;
    font-weight: 400;
    font-size: 12px;
    line-height: 14.52px;
    letter-spacing: 0%;
    ${otherProps && otherProps}
  `;
  return <P otherProps={otherProps}>{text}</P>;
};

export default PMicro;
