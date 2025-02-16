import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import MenuContent from "../Menu/MenuContext";
import { CreateFolderModal, UploadFileModal } from "../Modal";

interface ContextCreateUploadRowProps {
  icon: React.ReactNode;
}

const Menucontextdiv = styled.div<{ menuStyle?: string }>`
  background: #ffffff;
  box-shadow: 0px 0px 4px 4px #0000001a;
  position: absolute;
  right: 0;
  border-radius: 5px;
  width: 200px;
  z-index: 1;
  top: 60px;
  ${(props) => props.menuStyle}
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

const ContextCreateUploadRow: React.FC<ContextCreateUploadRowProps> = ({ icon }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuContent, setMenuContent] = useState({
    create: false,
    upload: false,
  });

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuVisible(false);
      }
    };

    if (menuVisible) {
      window.addEventListener("click", handleClickOutside);
    } else {
      window.removeEventListener("click", handleClickOutside);
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [menuVisible]);

  const createCloseHandler = (e?:any) => {
    console.log("createCloseHandler")
    e?.stopPropagation();
    setMenuVisible(false);
    setMenuContent(
      (prev) => (
        console.log("createCloseHandler"),
        {
          ...prev,
          ["create"]: !prev["create"],
        }
      )
    );
  };

  const uploadCloseHandler = (e?:any) => {
    console.log("uploadCloseHandler")
    e?.stopPropagation();
    setMenuVisible(false);
    setMenuContent(
      (prev) => (
        {
          ...prev,
          ["upload"]: !prev["upload"],
        }
      )
    );
    console.log("uploadCloseHandler2", menuContent);
  };

  return (
    <Div
      ref={menuRef}
      onClick={(e) => {
        console.log("Div")
        e?.stopPropagation();
        setMenuVisible((prev) => !prev);
      }}
    >
      {icon}
      {menuVisible && (
        <Menucontextdiv>
          <MenuContent text="Create Folder" onClick={createCloseHandler} showBoarder/>
          <MenuContent text="Upload Document" onClick={uploadCloseHandler} />
        </Menucontextdiv>
      )}
      {menuContent.create && (
          <CreateFolderModal onClose={createCloseHandler} />
      )}
      {menuContent.upload && (
          <UploadFileModal
            onClose={uploadCloseHandler}
          />
      )}
    </Div>
  );
};

export default ContextCreateUploadRow;
