import PropTypes from "prop-types";
const TableRow = ({
  firstName,
  lastName,
  dateOfBirth,
  street,
  city,
  statsSelection,
  zipcode,
  depSelection,
  startDate,
}) => {
  return (
    <tr className="p-2">
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{startDate}</td>
      <td>{depSelection}</td>
      <td>{dateOfBirth}</td>
      <td>{street}</td>
      <td>{city}</td>
      <td>{statsSelection}</td>
      <td>{zipcode}</td>

      {/* Ajoutez d'autres cellules pour les autres données de l'employé */}
    </tr>
  );
};

TableRow.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  dateOfBirth: PropTypes.string,
  street: PropTypes.string,
  city: PropTypes.string,
  statsSelection: PropTypes.string,
  zipcode: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  startDate: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  depSelection: PropTypes.string,
  // Ajoutez d'autres validations de props si nécessaire
};

export default TableRow;
