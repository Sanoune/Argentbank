import PropTypes from "prop-types";

export default function TableHeader({ label, onClick }) {
  return (
    <th onClick={onClick} style={{ cursor: "pointer" }}>
      {label}
    </th>
  );
}
TableHeader.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
