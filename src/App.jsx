import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CreateEmployee from "./pages/CreateEmployee";
import EmployeeList from "./pages/EmployeeList";
import { store } from "./store/store";

function App() {
  return (
    <div className="p-12">
      <Provider store={store}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Router>
            <Routes>
              <Route path="/" element={<CreateEmployee />} />
              <Route path="/Employee" element={<EmployeeList />} />
            </Routes>
          </Router>
        </LocalizationProvider>
      </Provider>
    </div>
  );
}

export default App;
