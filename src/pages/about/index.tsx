import './style.css'

import { Link } from 'react-router-dom'
import fotoPerfil from '../../assets/foto - perfil.svg'

import { FaBehance } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";


export function About() {
    return (
    
        <section className="about" id="about">

            <div className="container-about">

                <div className="hero-about-text">

                    <p>Me chamo Felipe Coutinho e tenho 22 anos, sou formado em Sistemas de informação.
                    <br/>
                    <br/>
                    Atualmente busco me desenvolver no
                    mercado de trabalho e aprimorar minhas habilidades
                    de criação de sites e aplicativos.</p>
    
                    <div className="hero-about-icons">
                        <Link to="#">
                            <FaBehance size={20}/>
                        </Link>

                        <Link to="#">
                            <FaLinkedinIn/>
                        </Link>

                        <Link to="#">
                            <FiGithub size={20}/>
                        </Link>

                        <Link to="#">
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