import React, { useEffect, useRef, useState } from "react";
import TableCell from "../../Cell/BodyCell";
import { MoreVertical } from "@styled-icons/feather/MoreVertical";
import { Menu } from "../../../Shared/Menu";

const MoreOptionCell: React.FC = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuVisible(false);
      }
    };

    if (menuVisible) {
      window.addEventListener("click", handleClickOutside);
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [menuVisible]);

  return (
    <TableCell otherStyle={"position:relative"}>
      <span
        onClick={(event) => {
          event.stopPropagation();
          setMenuVisible(!menuVisible);
        }}
        style={{ cursor: "pointer" }}
      >
        <MoreVertical size={16} />
      </span>

      {menuVisible && (
          <Menu ref={menuRef} onClick={(event) => event.stopPropagation()}/>
      )}
    </TableCell>
  );
};

export default MoreOptionCell;
