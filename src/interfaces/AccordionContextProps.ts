interface AccordionContextProps {
    openAccordions: Set<string>;
    apiData:any;
    toggleAccordion: (key: string) => void;
  }

  export default AccordionContextProps;