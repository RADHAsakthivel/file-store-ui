import BreadGrum from "../Shared/BreadGrum/BreadGrum";
import Context from "../Shared/Context/Context";
import styled from "styled-components";

export const Header = () => {
  const HeaderElement = styled.header`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 75px;
    margin-inline : 2%;
  `;
  return (
    <>
      <HeaderElement>
        <BreadGrum titles={["Home", "Dashboard"]} />
        <Context />
      </HeaderElement>
    </>
  );
};

export default Header;