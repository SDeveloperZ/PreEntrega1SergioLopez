import { TiShoppingCart } from 'react-icons/ti';
import logo from '../img/logo.png';




export function Nav() {
    const menuItems = [
        "Inicio",
        "Reserva",
        "Contacto "
    ]

    return (
      <nav className='nav-container'>
        <img src={logo} alt="Mi Logo" className="logo" />
        {menuItems.map(menuItem => ` ${menuItem}`)}
        <span>
        <TiShoppingCart />
        </span> 
      </nav>
    );
  }

export default Nav
