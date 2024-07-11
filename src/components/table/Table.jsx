import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import PropTypes from "prop-types";

const Table = ({ columns, data }) => {
  return (
    <table>
      <TableHeader columns={columns} />
      <TableBody data={data} />
    </table>
  );
};

Table.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};

export default Table;
