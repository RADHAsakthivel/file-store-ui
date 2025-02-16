interface AccordionContextProps {
    openAccordions: Set<string>;
    toggleAccordion: (key: string) => void;
  }

  export default AccordionContextProps;