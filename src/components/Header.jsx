import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <h1 className="mb-12 text-3xl">HRnet</h1>
      <Link to="/Employee">View Current Employees</Link>
    </>
  );
}
