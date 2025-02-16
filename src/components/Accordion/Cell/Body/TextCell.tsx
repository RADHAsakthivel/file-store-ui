import React from "react";
import TableCell from "../../Cell/BodyCell";
import { PSmall } from "../../../Shared/P";

interface TextCellProps {
  description: string;
}

export const TextCell: React.FC<TextCellProps> = ({
  description,
}: TextCellProps) => {
  return (
    <TableCell>
      <PSmall text={description || "---"} />
    </TableCell>
  );
};

export default TextCell;
