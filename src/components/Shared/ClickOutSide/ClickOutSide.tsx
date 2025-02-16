import React, { useRef } from "react";
import {useClickOutside} from "../../../CustomHooks";

interface ClickOutsideWrapperProps {
  onClose: () => void;
  children: React.ReactNode;
}

const ClickOutsideWrapper: React.FC<ClickOutsideWrapperProps> = ({ onClose, children }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useClickOutside(wrapperRef, onClose);

  return <div ref={wrapperRef}>{children}</div>;
};

export default ClickOutsideWrapper;
