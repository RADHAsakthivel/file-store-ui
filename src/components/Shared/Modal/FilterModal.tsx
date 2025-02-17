import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import {getQueryData } from "../../../../service"
import { useAccordion } from "../../../stateManagement";
import AccordionContextProps from "../../../interfaces/AccordionContextProps";
import {FilterState} from "../../../dto/filterDto"
interface FilterModalProps {
  onClose: (e:any) => void;
}

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 15px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const FilterModal: React.FC<FilterModalProps> = ({ onClose }) => {
  const {
    setAccoridionsData
  }: AccordionContextProps = useAccordion();
  const [filters, setFilters] = useState<FilterState>({
    folderName: "",
    description: "",
    date: "",
  });

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const submitHandle = async ()=>{
    const data = await getQueryData(filters);
    setAccoridionsData(data);
  }

  return (
    <Modal title={"Filter"}
        onClose={onClose} 
        onConfirm={submitHandle} 
        confirmText="Apply">
      <FilterContainer>
        <Input type="text" name="folderName" placeholder="Folder Name" value={filters.folderName} onChange={handleChange} />
        <Input type="text" name="description" placeholder="Description" value={filters.description} onChange={handleChange} />
        <Input type="date" name="date" value={filters.date} onChange={handleChange} />
      </FilterContainer>
    </Modal>
  );
};

export default FilterModal;
