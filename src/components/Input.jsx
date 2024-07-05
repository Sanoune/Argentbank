import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
import { useState } from "react";

export default function Input({ id, name, value, onChange, required, label }) {
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    let isValid = true;

    // Vérifier le nom de l'input pour appliquer la logique de validation appropriée
    switch (name) {
      case "firstName":
      case "lastName":
      case "city":
        // Seuls les lettres et espaces sont autorisés pour FirstName, LastName et City
        isValid = /^[a-zA-Z\s-]*$/.test(inputValue) || inputValue === "";
        break;
      case "street":
        // Aucune restriction sur la saisie pour Street
        isValid = true;
        break;
      default:
        isValid = true;
    }

    if (isValid) {
      onChange(e);
      setError(false); // Aucune erreur si la saisie est valide
    } else {
      setError(true); // Afficher une erreur si la saisie n'est pas valide
    }
  };

  return (
    <div>
      <TextField
        label={label}
        variant="outlined"
        type="text"
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        required={required}
        error={error} // Activer l'état d'erreur pour afficher le message
        helperText={
          error && name !== "street"
            ? "Only letters and spaces are allowed."
            : ""
        }
        style={{ minWidth: "250px" }}
      />
    </div>
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
