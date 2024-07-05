import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PropTypes from "prop-types";
import * as React from "react";

export default function Dropdown({ buttonLabel, tabData, onSelect }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedItem, setSelectedItem] = React.useState(tabData[0]);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (item) => {
    setSelectedItem(item); // Met à jour l'état local avec la valeur sélectionnée
    onSelect(item.value); // Appelle la fonction onSelect (passée en tant que prop) avec la valeur sélectionnée
    handleClose();
  };

  return (
    <div className="flex flex-col justify-center">
      <label>{buttonLabel}</label>
      <Button
        sx={{
          color: "#9E9E9E",
          border: "1px solid #E0E0E0", // Bordure verte clair
          textAlign: "left", // Aligner le texte à gauche
          justifyContent: "flex-start", // Justifier le contenu à gauche
          padding: "12px", // Ajouter un padding à gauche pour l'espacement

          width: "auto", // Largeur automatique pour ajuster au contenu
        }}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {selectedItem.label}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {tabData.map((item, index) => (
          <MenuItem key={index} onClick={() => handleMenuItemClick(item)}>
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

Dropdown.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  tabData: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSelect: PropTypes.func.isRequired,
};
