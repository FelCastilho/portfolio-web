import './style.css'
import { FaRegCopyright } from "react-icons/fa";


export function Footer() {
    return (
        <footer>
            <p className='copyright'>
                <FaRegCopyright />
                Todos os direitos reservados | 2024
            </p>

            <p>Powered by: <span className="name">Felipe <span className="strong">Castilho</span></span></p>
        </footer>
    )
}