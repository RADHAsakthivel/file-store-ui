import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

interface FilterModalProps {
  onClose: (e:any) => void;
}

interface FilterState {
  name: string;
  description: string;
  date: string;
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
  const [filters, setFilters] = useState<FilterState>({
    name: "",
    description: "",
    date: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const submitHandle = ()=>{
    console.log(filters);
  }

  return (
    <Modal title={"Filter"}
        onClose={onClose} 
        onConfirm={submitHandle} 
        confirmText="Apply">
      <FilterContainer>
        <Input type="text" name="name" placeholder="Folder Name" value={filters.name} onChange={handleChange} />
        <Input type="text" name="description" placeholder="Description" value={filters.description} onChange={handleChange} />
        <Input type="date" name="date" value={filters.date} onChange={handleChange} />
      </FilterContainer>
    </Modal>
  );
};

export default FilterModal;
