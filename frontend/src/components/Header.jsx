import { Link, Outlet } from "react-router-dom";

function Header() {
  return (
    <div>
      <ul>
        <li>
          <Link to={"/form"}>Form</Link>
        </li>
        <li>
          <Link to={"/list_user"}>List User</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}

export default Header;
