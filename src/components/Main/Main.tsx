import { AccordionFactory } from "../Accordion";
import dummyFolder from "../../../mock_data/folder.file";
import { AccordionFactoryEnum } from "../../enum/AccordionFactory.enum";
import { Header } from "../Header";
import styled from "styled-components";

const Main = () => {

  const AccordionWarpper = styled.div`
    overflow: scroll;
    height: 90vh;
    overflow-x: hidden;
    overflow-y: auto;
    background-color:#e2ecf8;
  `

  return (
    <>
      <div>
        <Header />
        <AccordionWarpper>
          <AccordionFactory
            accordionType={AccordionFactoryEnum.Table_ACCORDION}
            data={dummyFolder}
          />
        </AccordionWarpper>
      </div>
    </>
  );
};

export default Main;
