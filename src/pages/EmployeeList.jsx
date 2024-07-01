import { useState } from "react";
import { useSelector } from "react-redux";
import TableHeader from "../components/TableHeader";
import TableRow from "../components/TableRow";

export default function EmployeeList() {
  const employees = useSelector((state) => state.employees.employees);
  const [sortConfig, setSortConfig] = useState(null);

  const sortedEmployees = [...employees];
  if (sortConfig !== null) {
    sortedEmployees.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
  }

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return (
    <table>
      <thead>
        <tr>
          <TableHeader
            label="First Name"
            onClick={() => requestSort("firstName")}
          />
          <TableHeader
            label="Last Name"
            onClick={() => requestSort("lastName")}
          />
          <TableHeader
            label="Date of Birth"
            onClick={() => requestSort("dateOfBirth")}
          />
          <TableHeader
            label="Start Date"
            onClick={() => requestSort("startDate")}
          />
          <TableHeader label="Street" onClick={() => requestSort("street")} />
          <TableHeader label="City" onClick={() => requestSort("city")} />
          <TableHeader
            label="State"
            onClick={() => requestSort("statsSelection")}
          />
          <TableHeader
            label="Zip Code"
            onClick={() => requestSort("zipcode")}
          />
          <TableHeader
            label="Department"
            onClick={() => requestSort("depSelection")}
          />
        </tr>
      </thead>
      <tbody>
        {sortedEmployees.map((employee, index) => (
          <TableRow key={index} employee={employee} />
        ))}
      </tbody>
    </table>
  );
}
