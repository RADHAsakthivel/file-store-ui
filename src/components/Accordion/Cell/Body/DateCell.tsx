import React from "react";
import TableCell from "../../Cell/BodyCell";
import { PSmall } from "../../../Shared/P";

interface DateCellProps {
  date: Date;
}

const DateCell: React.FC<DateCellProps> = ({ date }) => {
  const dateString = date.toLocaleString("en-GB", { 
    day: "2-digit", 
    month: "2-digit", 
    year: "numeric", 
    hour: "2-digit", 
    minute: "2-digit", 
    hour12: false,
    timeZoneName: "shortGeneric"
}).split(" ").slice(0,2).join().replace(/,/g," ")

  return (
    <>
      <TableCell>
        <PSmall text={dateString} />
      </TableCell>
    </>
  );
};

export default DateCell;
