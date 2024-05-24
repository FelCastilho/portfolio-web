import { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Logo from './Logo.svg'

export function Header(){

  const [ isOpen, setIsOpen ] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  }

  return(
    <header>
      <nav className={`navbar ${isOpen ? 'open' : ''}`}>
        
        <div className="nav-container">

          <img src={Logo} className="logo-header"/>

          <div className="menu-icon" onClick={toggleNavbar}>

            <div className={`bar ${isOpen ? 'open' : ''}`}></div>
            <div className={`bar ${isOpen ? 'open' : ''}`}></div>
            <div className={`bar ${isOpen ? 'open' : ''}`}></div>

          </div>

          <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
            <li><Link to='#'>Sobre mim</Link></li>
            <li><Link to='#'>Serviços</Link></li>
            <li><Link to='#'>Projetos</Link></li>
            <li><Link to='#'>Tecnologias</Link></li>
          </ul>

        </div>
      </nav>
    </header>
  )
};