import TableCell from "../Cell/BodyCell";
import { TextCell } from '../Cell/Body';

const HeaderRow = () => {
  return (
    <th>
        <TableCell>
            <TextCell description={"Name"} />
        </TableCell>
        <TableCell>
            <TextCell description={"Description"} />
        </TableCell>
        <TableCell>
            <TextCell description={"Created at"} />
        </TableCell>
        <TableCell>
            <TextCell description={"Updated at"} />
        </TableCell>
    </th>
  )
}

export default HeaderRow