import './style.css'

import diplomaFaculdade from '../assets/diploma-faculdade.svg';
import cursoJavascript from '../assets/curso-javascript.svg';
import cursoWebDesign from '../assets/curso-web-design.svg';
import cursoProfigma from '../assets/curso-figma.svg';

import { Link } from 'react-router-dom';

export default function Certificate() {
    return (
        <section className="certificates">

            <div className="container-item-certificate">
                
                <div className="container-title">
                    <h1 className='title'>Sobre mim <span className="dot">.</span></h1>
                    <Link to="/" className='goBack-btn'>
                        Voltar
                    </Link>
                </div>


                <div className="container-certificates">
                    <img src={diplomaFaculdade} alt="Diploma Estácio de Sá" />
                    <img src={cursoJavascript} alt="Diploma Estácio de Sá" />
                    <img src={cursoProfigma} alt="Diploma Estácio de Sá" />
                    <img src={cursoWebDesign} alt="Diploma Estácio de Sá" />
                </div>


            </div>

        </section>
    )
}