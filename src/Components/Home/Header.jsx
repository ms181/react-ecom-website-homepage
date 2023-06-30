import { Search, Cart, User } from "../../assets/Icons";
import Logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <header>
      {/* Main Header */}
      <div className="main flex justify-between items-center py-6">
        <img src={Logo} alt="logo" />
        <ul className="menu flex gap-8">
          <li>
            <a
              href=""
              className="text-gray-500 hover:text-gray-700 text-lg font-semibold "
            >
              Shop
            </a>
          </li>
          <li>
            <a
              href=""
              className="text-gray-500 hover:text-gray-700 text-lg font-semibold "
            >
              Most Wanted
            </a>
          </li>
          <li>
            <a
              href=""
              className="text-gray-500 hover:text-gray-700 text-lg font-semibold "
            >
              New Arrival
            </a>
          </li>
          <li>
            <a
              href=""
              className="text-gray-500 hover:text-gray-700 text-lg font-semibold "
            >
              Brands
            </a>
          </li>
        </ul>
        <div className="other flex items-center gap-8">
          <label
            className="input flex gap-2 items-center px-4 py-2.5 rounded-xl bg-gray-50 border-2 border-gray-100"
            for="search"
          >
            <Search classNames="stroke-gray-400" />
            <input
              type="text"
              id="search"
              placeholder="Search"
              className="border-none outline-none bg-transparent"
            />
          </label>
          <div className="icons flex items-center gap-4">
            <a href="">
              <Cart classNames="w-5 h-5 stroke-gray-700" />
            </a>
            <a href="">
              <User classNames="w-5 h-5 stroke-gray-700" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
