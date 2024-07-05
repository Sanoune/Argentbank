import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <div className="flex flex-col items-center">
      <img src={logo} alt="logo" />
      <h1 className="m-12 text-3xl">HRnet</h1>
      <Link to="/Employee" className="underline underline-offset-1">
        View Current Employees
      </Link>
    </div>
  );
}
