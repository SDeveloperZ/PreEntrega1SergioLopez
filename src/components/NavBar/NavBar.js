import CartWidget from "../CartWidget/CartWidget";
import logo from "../../assets/logo.png";

export function Nav() {
  const menuItems = ["Inicio", "Reserva", "Contacto "];

  return (
    <nav className="nav-container">
      <div className="logo-container">
        <img src={logo} alt="Mi Logo" className="logo" />
      </div>
      <ul className="menu-items">
        {menuItems.map((menuItem) => (
          <li key={menuItem}>{menuItem}</li>
        ))}
        <li>
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
