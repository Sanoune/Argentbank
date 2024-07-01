import PropTypes from "prop-types";

export default function DatePicker({ func, formData, val, name }) {
  return (
    <div className="flex flex-col">
      <label className="self-start" htmlFor={val}>
        {name}
      </label>
      <input
        type="date"
        id={val}
        name={val}
        value={formData[val]}
        onChange={func}
        required
        className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

DatePicker.propTypes = {
  func: PropTypes.func.isRequired,
  val: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  formData: PropTypes.object.isRequired,
};
