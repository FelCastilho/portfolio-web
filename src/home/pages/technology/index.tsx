import { useState } from 'react';
import './style.css'

import { FaReact, FaSass, FaFigma } from "react-icons/fa";
import { SiExpo } from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";
import { TbBrandCss3, TbBrandHtml5, TbBrandJavascript } from "react-icons/tb";
import { LiaGitAlt } from "react-icons/lia";

export function Technology() {

    const [hover, setHover] = useState('')

    return (
        <section className="my-techs" id="techs">

            <div className="container-techs">

                <div className="container-text">

                    <div className="container-title">
                        <h1>Minhas tecnologias <span className='dot'>.</span></h1>
                    </div>

                    <div className="container-hover">{hover}</div>

                </div>

                <div className="container-icons">

                    <div className="first-group">

                    </div>

                    <div className="second-group">
                        <FaReact
                            className='techs-icon'
                            onMouseEnter={() => setHover('Desenvolvimento em React Native e  para agilizar processo de criação e desenvolvimento de sites.')}
                            onMouseLeave={() => setHover('')}
                        />
                        <TbBrandHtml5
                            className='techs-icon'
                            onMouseEnter={() => setHover('Estruturas feita em HTML5 seguindo estruturas semânticas.')}
                            onMouseLeave={() => setHover('')}
                        />
                        <TbBrandCss3
                            className='techs-icon'
                            onMouseEnter={() => setHover('Estilizações feitas em CSS abordando conceitos como Mobile First e responsividade.')}
                            onMouseLeave={() => setHover('')}
                        />
                        <TbBrandJavascript
                            className='techs-icon'
                            onMouseEnter={() => setHover('Estrutura dinâmica dos sites desenvolvida em Javascript para melhor otimização.')}
                            onMouseLeave={() => setHover('')}
                        />
                    </div>

                    <div className="third-group">
                        <FaSass
                            className='techs-icon'
                            onMouseEnter={() => setHover('Estilização de sites utilizando Sass para agilizar e organizar o projeto.')}
                            onMouseLeave={() => setHover('')}
                        />
                        <FaFigma
                            className='techs-icon'
                            onMouseEnter={() => setHover('Utilização do figma para desenvolvimento de interfaces.')}
                            onMouseLeave={() => setHover('')}
                        />
                        <LiaGitAlt
                            className='techs-icon'
                            onMouseEnter={() => setHover('Utilização do GIT para versionamento do código e desenvolvimento em equipe.')}
                            onMouseLeave={() => setHover('')}
                        />
                    </div>

                </div>

            </div>

        </section>
    )
}