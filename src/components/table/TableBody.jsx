import PropTypes from "prop-types";

const TableBody = ({ data }) => {
  return (
    <tbody>
      {data.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {Object.values(row).map((cell, cellIndex) => (
            <td key={cellIndex}>
              {typeof cell === "boolean" ? (cell ? "Yes" : "No") : cell}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

TableBody.propTypes = {
  data: PropTypes.array.isRequired,
};

export default TableBody;
