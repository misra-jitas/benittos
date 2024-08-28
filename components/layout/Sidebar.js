/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

const Sidebar = ({ openClass }) => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };

    return (
        <>
            <div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${openClass}`}>
                <PerfectScrollbar className="mobile-header-wrapper-inner">
                    <div className="mobile-header-top">
                        <div className="user-account">
                            <img src="/assets/imgs/template/benitto_corchete.png" alt="Benittos Puerto Vallarta" />
                            <div className="content">
                                <h6 className="user-name">
                                    Benittos <span className="text-brand">¡We Create!</span>
                                </h6>
                                <p className="font-xs text-muted">
                                    Bienvenido
                                </p>
                            </div>
                        </div>
                    </div> 
                    <div className="mobile-header-content-area">
                        <div className="perfect-scroll">
                            <div className="mobile-menu-wrap mobile-header-border">
                                <nav>
                                    <ul className="mobile-menu font-heading">
                                        <li className={isActive.key == 1 ? "has-children active" : ""}>
                                            <span onClick={() => handleToggle(1)} className="menu-expand"><i className="fi-rr-angle"></i></span>
                                            <Link href="/" legacyBehavior><a className="active">Benittos</a></Link>
                                        </li>
                                        <li className={isActive.key == 2 ? "has-children active" : ""}>
                                            <span onClick={() => handleToggle(2)} className="menu-expand"><i className="fi-rr-angle"></i></span>
                                            <Link href="/servicios-nube" legacyBehavior><a>Menu</a></Link>
                                        </li>
                                        <li className={isActive.key == 3 ? "has-children active" : ""}>
                                            <span onClick={() => handleToggle(3)} className="menu-expand"><i className="fi-rr-angle"></i></span>
                                            <Link href="/page-contact" legacyBehavior><a>Contacto</a></Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="site-copyright color-gray-400">
                                Copyright 2024 © Benittos -<br /> PANINOTECABAR.<br />
                            </div>
                        </div>
                    </div>
                </PerfectScrollbar>
            </div>
        </>
    );
};

export default Sidebar;
