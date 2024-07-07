import { DataGrid } from "@mui/x-data-grid";
import PropTypes from "prop-types";

const DataTable = ({ employees, columns }) => {
  return (
    <div style={{ height: "400px", width: "auto", overflow: "auto" }}>
      <DataGrid
        rows={employees}
        columns={columns}
        pagination
        pageSizeOptions={[10, 25, 50, 100]}
      />
    </div>
  );
};

DataTable.propTypes = {
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      dateOfBirth: PropTypes.string,
      startDate: PropTypes.string,
      street: PropTypes.string,
      city: PropTypes.string,
      zipcode: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      statsSelection: PropTypes.string,
      depSelection: PropTypes.string,
    })
  ).isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.string.isRequired,
      headerName: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default DataTable;
