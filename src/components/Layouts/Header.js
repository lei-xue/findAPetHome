import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Search } from "../Sections/Search";
import { DropdownLoggedIn, DropdownLoggedOut } from "../index"
import { useCart } from "../../context";

export const Header = () => {
  const { cartList } = useCart();
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkMode')) || false);
  const [search, setSearch] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const token = JSON.parse(sessionStorage.getItem('token'));

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
    , [darkMode]);

  return (
    <header>
      <nav className="bg-white dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link to="/" className="flex items-center">
            <img src={Logo} className="h-6 mr-3 sm:h-9" alt="Adopt-A-Pet Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Find-A-Pet-Home</span>
          </Link>
          <div className="flex items-center relative">
            <span onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-gear-wide-connected"></span>
            <span onClick={() => setSearch(!search)}
              className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search"></span>
            <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
              <span className="text-2xl bi bi-cart-fill relative">
                <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">{cartList.length}</span>
              </span>
            </Link>
            <span onClick={() => setDropdown(!dropdown)} className="bi bi-person-circle cursor-pointer text-2xl text-gray-700 dark:text-white"></span>
            {dropdown && (token ? <DropdownLoggedIn setDropdown={setDropdown} dropdown={dropdown} /> : <DropdownLoggedOut setDropdown={setDropdown} />)}
          </div>
        </div>
      </nav>
      {search && <Search setSearch={setSearch} />}
    </header>
  )
}
