interface AccordionContextProps {
    openAccordions: Set<string>;
    apiData:any;
    toggleAccordion: (key: string) => void;
    setAccoridionsData: (data:any) => void;
  }

  export default AccordionContextProps;