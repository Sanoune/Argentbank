import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { Modal } from "mod-mod-modal-for-msg-registry";
import PropTypes from "prop-types";
import { useState } from "react";

export default function DatesPicker({ func, formData, val, name }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleDateChange = (value) => {
    if (dayjs(value).isAfter(dayjs())) {
      setModalMessage("La date ne peut pas être dans le futur.");
      setIsModalOpen(true);
    } else {
      func(value);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalMessage("");
  };

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
        onChange={handleDateChange}
        required
      />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <p>{modalMessage}</p>
      </Modal>
    </LocalizationProvider>
  );
}

DatesPicker.propTypes = {
  func: PropTypes.func.isRequired,
  val: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  formData: PropTypes.object.isRequired,
};
