import './style.css'

import { Link } from 'react-router-dom'

import { FaLink } from "react-icons/fa6";

import logoAlex from '../../../assets/logo-alex.svg';
import logoVoid from '../../../assets/logo-void.svg';

export function Projects() {
    
    return (

        <section className="projects" id="projects">

            <h1 className="title">Meus projetos <span className='dot'>.</span></h1>

            <div className="container-projects">

                <div className="container-alex">

                    <div id="banner-alex" className="banner">
                        <img src={logoAlex} alt="" />
                    </div>

                    <div className="project-text" id="project-alex">

                        <p>
                            Portfólio desenvolvido para Alex Oliveira <br/>
                            buscando ressaltar os traços de design.
                        </p>

                        <br />

                        <p className="span-text-alex">Vite | React | Typescript | GIT | Figma</p>

                        <br />

                        <Link to='https://alexdesign-portfolio.vercel.app/' target='_blank' className="btn-visualizar"><FaLink size={20} />Visualizar</Link>

                    </div>


                </div>

                <div className="container-void">

                    <div id="banner-void" className="banner">
                        <img src={logoVoid} alt="" />
                    </div>

                    <div className="project-text" id="project-void">

                        <p>Site da equipe Void que busca ser minimalista <br /> e direta.</p>

                        <br />

                        <p className="span-text-void">Vite | React | Typescript | GIT | Figma</p>

                        <br />

                        <Link to='https://void-studio-gules.vercel.app/' target='_blank' className="btn-visualizar"><FaLink size={20} />Visualizar</Link>

                    </div>

                </div>

            </div>

        </section>
    )
}