import './style.css'

import { Link } from 'react-router-dom'
import fotoPerfil from '../../../assets/foto - perfil.svg'

import { FaBehance } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

export function About() {
    return (
    
        <section className="about" id="about">

            <div className="container-about">

                <div className="hero-about-text">

                    <h1>Sobre mim <span className="dot">.</span></h1>

                    <p>Me chamo Felipe Coutinho e tenho 22 anos, sou <br /> formado em Sistemas de informação.
                    <br/>
                    <br/>
                    Atualmente busco me desenvolver no
                    mercado de trabalho e aprimorar minhas habilidades
                    de criação de sites e aplicativos.</p>
    
                    <div className="hero-about-icons">
                        <Link to="https://www.behance.net/felipecoutinho10" target='_blank'>
                            <FaBehance size={20}/>
                        </Link>

                        <Link to="https://www.linkedin.com/in/felipe-coutinho-/" target='_blank'>
                            <FaLinkedinIn/>
                        </Link>

                        <Link to="https://github.com/FelCastilho" target='_blank'>
                            <FiGithub size={20}/>
                        </Link>

                        <Link to="https://www.instagram.com/felipec_castilho/" target='_blank'>
                            <FaInstagram size={20}/>
                        </Link>
                    </div>
                
                </div>

                <div className="hero-about-img">
                    <img src={fotoPerfil} alt="Foto de perfil"/>
                </div>

            </div>

        </section>

    )
}