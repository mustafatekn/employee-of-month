import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import EmployeeDetails from "./pages/EmployeeDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<EmployeeDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
