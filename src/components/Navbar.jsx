import { Link } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext.jsx";
import { AuthContext } from "../context/AuthContext.jsx";

const Navbar = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const { isAuth, logout } = useContext(AuthContext);
  const selectLanguage = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <select value={language} onChange={selectLanguage}>
        <option value="nl">NL</option>
        <option value="en">EN</option>
        <option value="fr">FR</option>
        <option value="es">ES</option>
      </select>
      {isAuth && (
        <button type="button" onClick={logout}>
          Logout
        </button>
      )}
    </div>
  );
};

export default Navbar;
