import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { logout, getUser } from '../../services';
import { useEffect, useState } from "react";

export const DropdownLoggedIn = ({ setDropdown }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const handleLogOut = () => {
    logout();
    setDropdown(false);
    navigate('/');
  }
  useEffect(() => {
    async function fetchData() {
      const data = await getUser();
      data.email ? setUser(data) : handleLogOut();
    }
    fetchData();
  }, [])
    ;

  return (
    <div id="dropdownAvatar" className="select-none absolute top-10 right-0 z-10 w-44 bg-pink-500 rounded divide-y divide-gray-100 shadow dark:bg-pink-800 dark:divide-gray-600">
      <div className="py-3 px-4 text-sm text-gray-200 dark:text-white">
        <div className="font-medium truncate">{user.email}</div>
      </div>
      <ul className="py-1 text-sm font-bold text-gray-200 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
        <li>
          <Link onClick={() => setDropdown(false)} to="/products" className="block py-2 px-4 hover:bg-pink-800 dark:hover:bg-gray-600 dark:hover:text-white">All Pets</Link>
        </li>
        <li>
          <Link onClick={() => setDropdown(false)} to="/dashboard" className="block py-2 px-4 hover:bg-pink-800 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
        </li>
      </ul>
      <div className="py-1">
        <span onClick={handleLogOut} className="cursor-pointer block py-2 px-4 text-sm text-gray-700 hover:bg-pink-800 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Log out</span>
      </div>
    </div>

  )
}