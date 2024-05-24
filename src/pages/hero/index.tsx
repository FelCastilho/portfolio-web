import './styles.css'

import { FaLink } from "react-icons/fa6";
import { PiCertificate } from "react-icons/pi";

import iconHero from '../../assets/hero - img.svg';
import { Link } from "react-router-dom";


export function Hero() {
    return (
    
        <section className="profile">

            <div className="profile-text">

                <p>Olá, eu sou</p>
                <h1>Felipe Castilho</h1>
                <p>Desenvolvedor Web</p>

                <div className="container-btn-profile">

                    <Link to='#' className="btn-curriculo"> <FaLink size={20} /> Meu Currículo</Link>

                    <Link to='#' className="btn-certificados">  <PiCertificate size={20} /> Certificados</Link>

                </div>

            </div>

            <div className="icon-img-desktop">
                <img src={iconHero} alt="icone de tag" />
            </div>

        </section>

    )
}