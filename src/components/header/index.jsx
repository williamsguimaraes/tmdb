import { useState } from "react";
import { Link } from "react-router-dom";
import img from "../../img/iconMovie.webp";
import Styles from "./styles.module.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={Styles.header}>
      {/* Logo fixa no canto esquerdo */}
      <Link to="/" className={Styles.logoLink}>
        <img src={img} alt="Logo" className={Styles.logo} />
      </Link>

      {/* Ícone de menu sanduíche no canto direito */}
      <div className={Styles.hamburger} onClick={toggleMenu}>
        <div className={Styles.bar}></div>
        <div className={Styles.bar}></div>
        <div className={Styles.bar}></div>
      </div>

      {/* Links no lado direito */}
      <nav
        className={`${Styles.linksContainer} ${
          menuOpen ? Styles.showMenu : ""
        }`}
      >
        <Link to="/" className={Styles.link}>
          Home
        </Link>
        <Link to="/favoritos" className={Styles.link}>
          Favoritos
        </Link>
        <Link to="/populares" className={Styles.link}>
          Populares
        </Link>
      </nav>
    </header>
  );
};

export default Header;
