import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";

export default function Input({ id, name, value, onChange, required, label }) {
  return (
    <TextField
      label={label}
      variant="outlined"
      type="text"
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}
Input.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
};
