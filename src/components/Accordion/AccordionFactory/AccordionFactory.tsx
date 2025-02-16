import RecursiveAccordion from "../RecursiveAccordion/RecursiveAccordion";
import { AccordionFactoryEnum } from "../../../enum/AccordionFactory.enum";
import TableAccordion from "../RecursiveAccordion/TableAccordion";

interface AccordionFactoryProps {
  accordionType: AccordionFactoryEnum;
  data?: any;
}

const AccordionFactory = ({ accordionType, data }: AccordionFactoryProps) => {

  function getComponent(type:AccordionFactoryEnum):React.ElementType {
    switch(type){
      case AccordionFactoryEnum.RECURSIVE_ACCORDION:
        return RecursiveAccordion;
      case AccordionFactoryEnum.Table_ACCORDION:
        return TableAccordion;
    }
  }

  const Accordion = getComponent(accordionType);
  
  return (
    <>
      <Accordion data={data} level={0} />
    </>
  );
};

export default AccordionFactory;
