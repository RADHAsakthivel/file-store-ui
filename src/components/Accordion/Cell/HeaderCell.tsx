import { PSmall } from "../../Shared/P";

interface HeaderCellProps {
  text: string;
}

const HeaderCell = ({ text }: HeaderCellProps) => {
  return (
    <>
      <th>
        <PSmall text={text} otherStyle={'font-weight:500'} />
      </th>
    </>
  );
};

export default HeaderCell;
