/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from 'next/image';

const Footer = () => {
    return (
        <>
            <footer className="footer mt-50">
                <div className="container">
                    <div className="footer-top">
                        <div className="row">
                            <div className="col-md-4 col-sm-6 text-center text-md-start">
                                <Link href="/" legacyBehavior>
                                    <a>
                                        <Image src="/assets/imgs/template/logo-benittos-n.svg" alt="paninotecabar puerto vallarta" width={162} height={42}/>
                                    </a>
                                </Link>
                            </div>
                            <div className="col-md-8 col-sm-6 text-center text-md-end">
                                <span className="color-gray-900 text-heading-6 mr-30 text-mb-sm-20">¿Quieres saber más de nosotros?</span>
                                <Link href="/page-contact" legacyBehavior>
                                    <a className="btn btn-square">Contacto</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 width-20 mb-30">
                            <h4 className="text-heading-5"><Link href="/page-contact" legacyBehavior><a>Contacto</a></Link></h4>
                            <div className="mt-20 text-body-text color-gray-600">+52 (322) 209-0287</div>
                            <div className="text-body-text color-gray-600">hola@benittos.com</div>
                        </div>
                        <div className="col-lg-3 width-20 mb-30">
                            <h4 className="text-heading-5"><Link href="/" legacyBehavior><a>Inicio</a></Link></h4>
                        </div>
                        <div className="col-lg-3 width-20 mb-30">
                            <h4 className="text-heading-5"><Link href="servicios-nube" legacyBehavior><a>Menu</a></Link></h4>
                        </div>
                    </div>
                    <div className="footer-bottom mt-20">
                        <div className="row">
                            <div className="col-md-6">
                                <span className="color-gray-400 text-body-lead">© Benittos 2024</span>
                            </div>
                            <div className="col-md-6 text-center text-lg-end text-md-end">
                                <div className="footer-social">
                                    <Link href="https://www.facebook.com/benittos.paninotecabar" legacyBehavior>
                                        <a className="icon-socials icon-facebook"></a>
                                    </Link>
                                    <Link href="https://www.instagram.com/benittospv/" legacyBehavior>
                                        <a className="icon-socials icon-instagram"></a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
