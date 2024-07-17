import './style.css'

import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { FiMonitor } from "react-icons/fi";
import { MdOutlinePalette } from "react-icons/md";

export function Services() {
    return (

        <section className="services" id="services">

            <h1>Meus serviços <span className="dot">.</span></h1>

            <div className="container-services">

                <div className="service-box">

                    <FiMonitor size={40} color='#FF7300' className='teste' />

                    <h2>Criação de sites</h2>

                    <p>
                        Transformo suas ideias em
                        sites <br /> sofisticados, funcionais e responsivos.
                    </p>

                </div>

                <div className="service-box">

                    <HiOutlineDevicePhoneMobile size={40} color='#FF7300' className='teste' />

                    <h2>Design</h2>

                    <p>
                        Destaque sua marca com <br />
                        designs modernos e cativantes.
                    </p>

                </div>

                <div className="service-box">

                    <MdOutlinePalette size={40} color='#FF7300' className='teste' />

                    <h2>UI Design</h2>

                    <p>
                        Destaque sua marca com interfaces
                        simples e modernas.
                    </p>

                </div>

            </div>

        </section>

    )
}