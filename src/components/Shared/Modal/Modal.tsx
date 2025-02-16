import React from "react";
import styled from "styled-components";
import { CloseOutline as X } from "@styled-icons/evaicons-outline";

interface ModalProps {
  title: string;
  children: React.ReactNode;
  onClose: (e:any) => void;
  onConfirm: (e:any) => void;
  onClear?: (e:any) => void;
  confirmText?: string;
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  min-width: 350px;
  position: relative;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
`;

const CloseButton = styled(X)`
  width: 20px;
  cursor: pointer;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 10px;
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(props) => (props?.primary ? "#2D336B" : "#fff")};
  color: ${(props) => (props?.primary ? "white" : "black")};
  &:hover {
    background-color: ${(props) => (props?.primary ? "#1F2558" : "#e0e0e0")};
  }
`;

const Modal = ({
  title,
  children,
  onClose,
  onConfirm,
  onClear,
  confirmText = "Confirm",
}: ModalProps) => {
  return (
    <ModalOverlay onClick={(e) => e.stopPropagation()}>
      <ModalContainer>
        <ModalHeader>
          <span>{title}</span>
          <div>
            {onClear && <span onClick={onClear}>clear</span>}
            <CloseButton onClick={(e)=>onClose(e)} />
          </div>
        </ModalHeader>
        <div>{children}</div>
        <ModalFooter>
          <Button onClick={onClose}>Cancel</Button>
          <Button primary onClick={onConfirm}>
            {confirmText}
          </Button>
        </ModalFooter>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
