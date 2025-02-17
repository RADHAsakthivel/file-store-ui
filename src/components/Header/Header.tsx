import BreadGrum from "../Shared/BreadGrum/BreadGrum";
import Context from "../Shared/Context/Context";
import styled from "styled-components";
import {useAccordion} from "../../stateManagement"
import AccordionContextProps from "../../interfaces/AccordionContextProps"
import { FolderDto } from "../../dto/folder.dto";


export const Header = () => {
  const {
    openAccordions: expanded,
    apiData
  }: AccordionContextProps = useAccordion();

  const HeaderElement = styled.header`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 75px;
    margin-inline : 2%;
  `;

  let heading:string[] = [];

  (function getHeadings(data:FolderDto[]){
    if(!data?.length) return;

    data?.forEach((item) =>{
      if(expanded.has(item._id)){
        heading.push(item.name);
        getHeadings(item.children);
      }
    })

  })(apiData?.data?.folders)
  return (
    <>
      <HeaderElement>
        <BreadGrum titles={["Home"].concat(heading)} />
        <Context />
      </HeaderElement>
    </>
  );
};

export default Header;