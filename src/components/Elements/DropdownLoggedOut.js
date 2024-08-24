
import { Link } from "react-router-dom";

export const DropdownLoggedOut = ({ setDropdown }) => {
  return (
    <div id="dropdownAvatar" className="select-none absolute top-10 right-0 z-10 w-44 bg-pink-500 rounded divide-y divide-gray-100 shadow dark:bg-pink-800 dark:divide-gray-600">
      <ul className="py-1 text-sm font-bold text-gray-200 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
        <li>
          <Link onclick={setDropdown(false)} to="/products" className="block py-2 px-4 hover:bg-pink-800 dark:hover:bg-gray-600 dark:hover:text-white">All Pets</Link>
        </li>
        <li>
          <Link onclick={setDropdown(false)} to="/login" className="block py-2 px-4 hover:bg-pink-800  dark:hover:bg-gray-600 dark:hover:text-white">Login</Link>
        </li>
        <li>
          <Link onclick={setDropdown(false)} to="/register" className="block py-2 px-4 hover:bg-pink-800 dark:hover:bg-gray-600 dark:hover:text-white">Register</Link>
        </li>
      </ul>
    </div>

  )
}
