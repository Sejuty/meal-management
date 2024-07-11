import PropTypes from 'prop-types';

const TableHeader = ({ columns }) => {
  return (
    <thead>
      <tr>
        {columns.map((column, index) => (
          <th key={index}>{column}</th>
        ))}
      </tr>
    </thead>
  );
};

TableHeader.propTypes = {
  columns: PropTypes.array.isRequired,
};

export default TableHeader;
