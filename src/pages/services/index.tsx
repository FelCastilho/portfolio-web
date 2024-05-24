import './style.css'

import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { FiMonitor } from "react-icons/fi";
import { MdOutlinePalette } from "react-icons/md";

export function Services() {
    return (

        <section className="services" id="services">

            <h1>Meus serviços</h1>

            <div className="container-services">

                <div className="service-box">

                    <HiOutlineDevicePhoneMobile size={40} color='#00D1FF' className='teste'/>

                    <h2>Aplicativos</h2>

                    <p>
                        Coloque sua marca no topo com <br />
                        aplicativos modernos e intuitivos.
                    </p>

                </div>

                <div className="service-box">

                    <FiMonitor size={40} color='#00D1FF' className='teste'/>

                    <h2>Criação de sites</h2>

                    <p>
                        Transformo suas ideias em 
                        sites <br /> sofisticados e funcionais
                    </p>

                </div>

                <div className="service-box">

                    <MdOutlinePalette size={40} color='#00D1FF' className='teste'/>

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