import React, { createContext, useState, useContext } from "react";
import AccordionContextProps from "../../interfaces/AccordionContextProps";

const AccordionContext = createContext<AccordionContextProps | undefined>(
  undefined
);

export const AccordionProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [openAccordions, setOpenAccordions] = useState<Set<any>>(new Set());
  const [apiData, setApiData]: any = useState();
  
  const findAndSetParents = (set: Set<string>, folders: any[], targetId: string) => {
    for (const folder of folders) {
      if (folder._id === targetId) {
        set.add(folder._id);
  
        if (folder.parent) {
          set.add(folder.parent); 
          findAndSetParents(set, folders, folder.parent); 
        }
        return;
      }
  
      if (folder.children?.length) {
        findAndSetParents(set, folder.children, targetId);
      }
    }
  };
  

  const toggleAccordion = (id: string) => {
    setOpenAccordions((prev) => {
      const newSet = new Set<string>(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.clear();
        findAndSetParents(newSet, apiData?.data?.folders, id);
      }
      return newSet;
    });
  };
  

  const setAccoridionsData = (data: any) => {
    setApiData(data);
  };

  return (
    <AccordionContext.Provider
      value={{ openAccordions, apiData, toggleAccordion, setAccoridionsData }}
    >
      {children}
    </AccordionContext.Provider>
  );
};

export const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (!context)
    throw new Error("useAccordion must be used within AccordionProvider");
  return context;
};
