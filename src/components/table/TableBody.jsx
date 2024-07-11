import PropTypes from "prop-types";

const TableBody = ({ data }) => {
  return (
    <tbody>
      {data.map((row, rowIndex) => (
        <tr key={rowIndex} className="bg-white border-b hover:bg-gray-100 cursor-pointer">
          {Object.values(row).map((cell, cellIndex) => (
            <td key={cellIndex} className="px-12 py-4 text-gray-700">
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
