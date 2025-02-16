import styled from "styled-components";
import { Indicators } from "../Indicators";
import { AccordionFactory } from "../Accordion";
import {AccordionFactoryEnum} from "../../enum/AccordionFactory.enum";
import dummyFolder from "../../../mock_data/folder.file";

interface FileExplorerProps {
  title: string;
}

const Section = styled.section`
  border-right: 1px solid #d3d3d3;
  box-shadow: 1px 1px 2px 0px #0000001a;
  padding: 10px 0 0 20px;
`;

const H2 = styled.h2`
  font-family: Inter;
  font-weight: 600;
  font-size: 15px;
  line-height: 18.15px;
  letter-spacing: 0%;
`;


const AccordionWarpper = styled.div`
  overflow: scroll;
  height: 80vh;
  overflow-x: hidden;
  overflow-y: auto;
`

const FileExplorer = ({ title }: FileExplorerProps) => {
  
  return (
    <Section>
      <H2>{title}</H2>
      <Indicators />
      <AccordionWarpper>
        <AccordionFactory accordionType={AccordionFactoryEnum.RECURSIVE_ACCORDION} data={dummyFolder}/>
      </AccordionWarpper>
    </Section>
  );
};

export default FileExplorer;
