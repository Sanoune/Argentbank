import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import PropTypes from "prop-types";

export default function DatesPicker({ func, formData, val, name }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <label className="self-start" htmlFor={val}>
        {name}
      </label>
      <DatePicker
        type="date"
        id={val}
        name={val}
        value={formData[val]}
        onChange={func}
        required
      />
    </LocalizationProvider>
  );
}

DatesPicker.propTypes = {
  func: PropTypes.func.isRequired,
  val: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  formData: PropTypes.object.isRequired,
};
