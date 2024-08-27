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
                                        {/* <img alt="Sube.Cloud" src="/assets/imgs/template/logo.svg" /> */}
                                        <Image src="/assets/imgs/template/logo-sube.svg" alt="Sube.Cloud" width={162} height={42}/>
                                    </a>
                                </Link>
                            </div>
                            <div className="col-md-8 col-sm-6 text-center text-md-end">
                                <span className="color-gray-900 text-heading-6 mr-30 text-mb-sm-20">¿Quieres saber mas de nosotros?</span>
                                <Link href="/page-contact" legacyBehavior>
                                    <a className="btn btn-square">Contacto</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    <div class="col-lg-3 width-20 mb-30">
    <h4 class="text-heading-5"> <Link href="/page-contact" legacyBehavior><a>Contacto</a></Link></h4>
   

                           {/* <div className="mt-20 text-body-text color-gray-600 mb-20">4517 Washington Ave. Manchester, Kentucky 39495</div>*/}
                            <div className="mt-20 text-body-text color-gray-600">+52 (322) 209-0287</div>
                            <div className="text-body-text color-gray-600">hola@benittos.com</div>
                        </div>
                        <div class="col-lg-3 width-20 mb-30">
    <h4 class="text-heading-5"><Link href="/" legacyBehavior><a>Inicio</a></Link></h4>


                            {/*  <ul className="menu-footer mt-20">
                                <li>
                                    <Link href="/#" legacyBehavior>
                                        <a>Mission and Vision</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#" legacyBehavior>
                                        <a>Our Team</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/page-career" legacyBehavior>
                                        <a>Careers</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#" legacyBehavior>
                                        <a>Press and Media</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#" legacyBehavior>
                                        <a>Advertising</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#" legacyBehavior>
                                        <a>Testimonials</a>
                                    </Link>
                                </li>
    </ul>*/}
                        </div>
                        <div class="col-lg-3 width-20 mb-30">
    <h4 class="text-heading-5"><Link href="servicios-nube" legacyBehavior><a>Menu</a></Link></h4>
    
    </div>

                           {/* ] <ul className="menu-footer mt-20">
                                <li>
                                    <Link href="/blog-2" legacyBehavior>
                                        <a>Our Blog</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/page-pricing-1" legacyBehavior>
                                        <a>Plans and Pricing</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#" legacyBehavior>
                                        <a>Knowledge Base</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#" legacyBehavior>
                                        <a>Cookie Policy</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#" legacyBehavior>
                                        <a>Office Center</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog-1" legacyBehavior>
                                        <a>News and Events</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 width-20 mb-30">
                            <h4 className="text-heading-5">Support</h4>
                            <ul className="menu-footer mt-20">
                                <li>
                                    <Link href="/page-faqs-1" legacyBehavior>
                                        <a>FAQs</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#" legacyBehavior>
                                        <a>Editor Help</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#" legacyBehavior>
                                        <a>Community</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#" legacyBehavior>
                                        <a>Live Chatting</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/page-contact" legacyBehavior>
                                        <a>Contact Us</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#" legacyBehavior>
                                        <a>Support Center</a>
                                    </Link>
                                </li>
</ul>*/}
                        
                        <div className="col-lg-3 width-16">
                            <h4 className="text-heading-5">N</h4>
                          {/*}  <ul className="menu-footer mt-20">
                                <li>
                                    <Link href="/#" legacyBehavior>
                                        <a>Request an offer</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#" legacyBehavior>
                                        <a>How it works</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/page-pricing-2" legacyBehavior>
                                        <a>Pricing</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#" legacyBehavior>
                                        <a>Reviews</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#" legacyBehavior>
                                        <a>Stories</a>
                                    </Link>
                                </li>
</ul>*/}
                        </div>
                    </div>
                    <div className="footer-bottom mt-20">
                        <div className="row">
                            <div className="col-md-6">
                                <span className="color-gray-400 text-body-lead">© Benittos 2024</span>
                                <Link href="/page-terms" legacyBehavior>
                                    <a className="text-body-text color-gray-400 ml-50">Privacidad</a>
                                </Link>
                                <Link href="/page-terms" legacyBehavior>
                                    <a className="text-body-text color-gray-400 ml-50">Terminos</a>
                                </Link>
                            </div>
                            <div className="col-md-6 text-center text-lg-end text-md-end">
                                <div className="footer-social">
                                    <Link href="https://facebook.com" legacyBehavior>
                                        <a className="icon-socials icon-facebook"></a>
                                    </Link>
                                   {/*} <Link href="https://twitter.com" legacyBehavior>
                                        <a className="icon-socials icon-twitter"></a>
</Link> */}
                                    <Link href="https://www.instagram.com" legacyBehavior>
                                        <a className="icon-socials icon-instagram"></a>
                                    </Link>
                                    <Link href="https://www.linkedin.com" legacyBehavior>
                                        <a className="icon-socials icon-linkedin"></a>
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