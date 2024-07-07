import { createSlice } from "@reduxjs/toolkit";

// Vérification initiale pour s'assurer que localStorage contient un tableau
const storedEmployees = JSON.parse(localStorage.getItem("employees"));
const initialState = {
  data: Array.isArray(storedEmployees) ? storedEmployees : [],
};

const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      // Ajout de l'employé au tableau des employés
      const updatedEmployees = [...state.data, action.payload];
      state.data = updatedEmployees;
      localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    },
    setEmployees: (state, action) => {
      // Vérification pour s'assurer que action.payload est bien un tableau
      if (Array.isArray(action.payload)) {
        state.data = action.payload;
        localStorage.setItem("employees", JSON.stringify(state.data));
      }
    },
  },
});

export const { addEmployee, setEmployees } = employeeSlice.actions;
export default employeeSlice.reducer;
