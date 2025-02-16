"use strict";
import { SquareFill } from "@styled-icons/bootstrap/SquareFill";
import { User } from "@styled-icons/boxicons-regular";
import styled from "styled-components";
import { data } from "../../../mock_data/aside.data";

const Aside = styled.aside`
  background-color: #2d336b;
  padding: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  min-width: 25px;
  width: 2.5%;
  height: 97vh;
  top: 0;
  left: 0;
`;

const Div = styled.div<{ styles?: string }>`
  ${(props) => props.styles || ""};
  cursor: pointer;
`;

const Nav = () => {

  return (
    <>
      <Aside>
        {data.map((item, index) => (
          <Div
            key={index}
            title={item}
            styles={index == 0 ? "margin : 0 0 30px 0;" : ""}
          >
            <SquareFill
              height={"50px"}
              width={"100%"}
              color={index == 0 ? "#A9B5DF" : "#A9B5DF33"}
            />
          </Div>
        ))}
        <Div title={"actions"} styles="margin-top: auto; margin-bottom: 10px;">
          <User height={"50px"} width={"100%"} color="white" />
        </Div>
      </Aside>
    </>
  );
};

export default Nav;