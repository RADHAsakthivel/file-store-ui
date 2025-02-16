import React, { createContext, useState, useContext } from "react";
import AccordionContextProps from "../../interfaces/AccordionContextProps";

const AccordionContext = createContext<AccordionContextProps | undefined>(undefined);

export const AccordionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  
    const [openAccordions, setOpenAccordions] = useState<Set<string>>(new Set());
  
    const toggleAccordion = (id: string) => {
        setOpenAccordions((prev) => {
        const newSet = new Set(prev);
        newSet.has(id) ? newSet.delete(id) : newSet.add(id);
        return newSet;
      });
    };

  return (
    <AccordionContext.Provider value={{ openAccordions, toggleAccordion }}>
      {children}
    </AccordionContext.Provider>
  );
};

export const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (!context) throw new Error("useAccordion must be used within AccordionProvider");
  return context;
};
