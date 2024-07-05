import PropTypes from "prop-types";
import { useState } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const Sort = ({ data, columns }) => {
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });

  const [entriesToShow, setEntriesToShow] = useState(10); // État pour le nombre d'entrées à afficher
  const [searchTerm, setSearchTerm] = useState(""); // État pour le terme de recherche

  const handleChangeEntriesToShow = (e) => {
    setEntriesToShow(parseInt(e.target.value)); // Mettre à jour le nombre d'entrées à afficher
  };

  const handleChangeSearchTerm = (e) => {
    setSearchTerm(e.target.value); // Mettre à jour le terme de recherche
  };

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  let sortedData = [...data];

  // Filtrer les données en fonction du terme de recherche
  if (searchTerm.trim() !== "") {
    sortedData = sortedData.filter((item) =>
      Object.values(item).some(
        (value) =>
          value &&
          value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }

  if (sortConfig.key !== null) {
    sortedData.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
  }

  // Limiter les données en fonction du nombre d'entrées à afficher
  sortedData = sortedData.slice(0, entriesToShow);

  return (
    <div className="flex flex-col">
      <div className="flex justify-between m-6">
        {/* Sélecteur pour choisir le nombre d'entrées à afficher */}
        <select value={entriesToShow} onChange={handleChangeEntriesToShow}>
          <option value={10}>10 entries</option>
          <option value={25}>25 entries</option>
          <option value={50}>50 entries</option>
          <option value={100}>100 entries</option>
        </select>
        {/* Input de recherche */}
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChangeSearchTerm}
        />
      </div>
      {/* Tableau */}
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <TableHeader
                key={column.key}
                label={column.label}
                onClick={() => requestSort(column.key)}
                isSorted={sortConfig.key === column.key}
                isAscending={sortConfig.direction === "ascending"}
              />
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, index) => (
            <TableRow key={index} {...item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

Sort.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Sort;
