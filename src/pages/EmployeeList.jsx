import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DataTable from "../components/DataTable";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  // État pour le terme de recherche
  const [searchTerm, setSearchTerm] = useState("");
  const employe = useSelector((state) => state.employees);
  console.log(employe);
  // Récupérer les employés depuis le localStorage lors du montage du composant
  useEffect(() => {
    const storedEmployees = localStorage.getItem("employees");
    if (storedEmployees) {
      setEmployees(JSON.parse(storedEmployees));
    }
  }, []);

  // Fonction pour mettre à jour le terme de recherche
  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  // Filtrer les employés en fonction du terme de recherche
  const filteredEmployees = employees.filter((employee) =>
    Object.values(employee).some((value) =>
      value.toString().toLowerCase().includes(searchTerm)
    )
  );

  // Définition des colonnes pour le DataTable
  const columns = [
    { field: "firstName", headerName: "First Name", width: 130 },
    { field: "lastName", headerName: "Last Name", width: 130 },
    { field: "startDate", headerName: "Date of Start", width: 130 },
    { field: "depSelection", headerName: "Department", width: 130 },
    { field: "dateOfBirth", headerName: "Date of Birth", width: 130 },
    { field: "street", headerName: "Street", width: 130 },
    { field: "city", headerName: "City", width: 130 },
    { field: "statsSelection", headerName: "State", width: 130 },
    { field: "zipcode", headerName: "Zip Code", width: 130 },
  ];

  return (
    <div className="flex flex-col justify-center p-12 gap-6">
      <h1 className="flex justify-center text-2xl">Current Employees</h1>
      <div className="flex flex-col self-center gap-6">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchTermChange}
          className="p-2 border border-gray-300 rounded-md max-w-80"
        />

        <DataTable employees={filteredEmployees} columns={columns} />
      </div>
      <div className="flex justify-center">
        <Link to="/" className="underline underline-offset-1">
          Home
        </Link>
      </div>
    </div>
  );
};

export default EmployeeList;
