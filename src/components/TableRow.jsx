import PropTypes from "prop-types";

export default function TableRow({ employee }) {
  return (
    <tr>
      <td>{employee.firstName}</td>
      <td>{employee.lastName}</td>
      <td>{employee.dateOfBirth}</td>
      <td>{employee.startDate}</td>
      <td>{employee.street}</td>
      <td>{employee.city}</td>
      <td>{employee.statsSelection}</td>
      <td>{employee.zipcode}</td>
      <td>{employee.depSelection}</td>
    </tr>
  );
}

TableRow.propTypes = {
  employee: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    dateOfBirth: PropTypes.string,
    startDate: PropTypes.string,
    street: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    statsSelection: PropTypes.string.isRequired,
    zipcode: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    depSelection: PropTypes.string.isRequired,
  }).isRequired,
};
