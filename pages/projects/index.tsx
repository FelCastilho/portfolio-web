import './style.css'

import { Link } from 'react-router-dom'

import { FaLink } from "react-icons/fa6";

import logoEquilibrium from '../../assets/logo - equilibrium.svg'
import logoDevgames from '../../assets/logo - devgames.svg'

export function Projects() {
    
    return (

        <section className="projects" id="projects">

            <h1 className="title">Meus projetos</h1>

            <div className="container-projects">

                <div className="container-equilibrium">

                    <div id="banner-equilibrium" className="banner">
                        <img src={logoEquilibrium} alt="" />
                    </div>

                    <div className="project-text" id="project-equilibrium">

                        <p>
                            Aplicativo para monitoramento de saúde e <br/>
                            criação de metas.
                        </p>

                        <br />

                        <p className="span-text-equilibrium">React Native CLI | Typescript | Firebase | Figma</p>

                        <br />

                        <Link to='#' className="btn-visualizar"><FaLink size={20} />Vizualizar</Link>

                    </div>


                </div>

                <div className="container-devgames">

                    <div id="banner-devgames" className="banner">
                        <img src={logoDevgames} alt="" />
                    </div>

                    <div className="project-text" id="project-devgames">

                        <p>Site para captação de clientes com  uma interface <br /> moderna e simples.</p>

                        <br />

                        <p className="span-text-devgames">Vite | React | Typescript | GIT | Figma</p>

                        <br />

                        <Link to='#' className="btn-visualizar"><FaLink size={20} />Vizualizar</Link>

                    </div>

                </div>

            </div>


        </section>
    )
}