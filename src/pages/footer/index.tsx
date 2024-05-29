import './style.css'
import { FaRegCopyright } from "react-icons/fa";
import logo from './footer-logo.svg'

export function Footer() {
    return (
        <footer>
            <p className='copyright'>
                <FaRegCopyright />
                Todos os direitos reservados | 2024
            </p>

            <img src={logo} alt="logo portfólio" />
        </footer>
    )
}