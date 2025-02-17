import RecursiveAccordion from "../RecursiveAccordion/RecursiveAccordion";
import { AccordionFactoryEnum } from "../../../enum/AccordionFactory.enum";
import TableAccordion from "../RecursiveAccordion/TableAccordion";
import { useAccordion } from "../../../stateManagement";
import AccordionContextProps from "../../../interfaces/AccordionContextProps";

interface AccordionFactoryProps {
  accordionType: AccordionFactoryEnum;
  data?: any;
}

const AccordionFactory = ({ accordionType, data }: AccordionFactoryProps) => {
  const {
    apiData: apiData,
  }: AccordionContextProps = useAccordion();
  
  function getComponent(type:AccordionFactoryEnum):React.ElementType {
    switch(type){
      case AccordionFactoryEnum.RECURSIVE_ACCORDION:
        return RecursiveAccordion;
      case AccordionFactoryEnum.Table_ACCORDION:
        return TableAccordion;
    }
  }

  const Accordion = getComponent(accordionType);
  console.log("folders => ", apiData.data.folders)
  data = apiData.data.folders
  return (
    <>
      <Accordion data={data} level={0} />
    </>
  );
};

export default AccordionFactory;
