import './styles.css'

import { FaLink } from "react-icons/fa6";
import { PiCertificate } from "react-icons/pi";

import iconHero from '../../../assets/hero - img.svg';
import { Link } from "react-router-dom";

export function Hero() {
    return (
    
        <section className="profile">

            <div className="profile-text">

                <p className='small-hero'>Olá, eu sou</p>
                <h1>Felipe Coutinho</h1>
                <p>Desenvolvedor Front end & UI designer</p>

                <div className="container-btn-profile">

                    <Link to='https://drive.google.com/file/d/1JSSCyZPYL7D6GV-ZFAVN-fT5ZoXN36ML/view?usp=sharing' className="btn-curriculo" target='_blank'> <FaLink size={20} /> Meu Currículo</Link>

                    <Link to='/certificados' target='_blank' className="btn-certificados">  <PiCertificate size={20} /> Certificados</Link>

                </div>

            </div>

            <div className="icon-img-desktop">
                <img src={iconHero} alt="icone de tag" />
            </div>

        </section>

    )
}