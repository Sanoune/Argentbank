import PropTypes from "prop-types";
import styles from "./TableHeader.module.css";
const TableHeader = ({ label, onClick, isSorted, isAscending }) => {
  return (
    <th
      className={`${styles["table-header"]} ${
        isSorted ? styles["sorted"] : ""
      }`}
      onClick={onClick}
    >
      {label}
      <span className={styles["sort-arrows"]}>
        <span
          className={`${styles["sort-arrow"]} ${
            isSorted && isAscending ? styles["active"] : ""
          }`}
        >
          ▲
        </span>
        <span
          className={`${styles["sort-arrow"]} ${
            isSorted && !isAscending ? styles["active"] : ""
          }`}
        >
          ▼
        </span>
      </span>
    </th>
  );
};

TableHeader.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isSorted: PropTypes.bool.isRequired,
  isAscending: PropTypes.bool.isRequired,
};

export default TableHeader;
