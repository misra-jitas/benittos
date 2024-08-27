/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Accordion from "../components/elements/Accordion";
import Layout from "../components/layout/Layout";
import OfferSlider from "../components/slider/Offer";
import Logos from '../components/elements/Logos'; 



function Service2() {
    return (
        <>

            <Layout>
                <section className="section-box">
                    <div className="banner-hero bg-service-2">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <h1 className="text-display-2">Eleva Tu  <span className="color-green-900">Negocio</span> a las<br className="d-lg-block d-none" /> Alturas en la  <span className="color-green-900">Nube</span></h1>
                                    <p className="text-body-lead-large color-gray-500 mt-40 pr-40">Potenciando el Éxito Empresarial: Los Innumerables Beneficios de la Nube para Empresas de Cualquier Tamaño</p>
                                    <div className="mt-40 text-center">
                                        <Link href="/page-contact" legacyBehavior><a className="btn btn-black icon-arrow-right-white">Contacto</a></Link>

                                        <Link href="#" legacyBehavior><a className="btn btn-link icon-triangle color-gray-900 ml-40">Algunos de nuestros servicios</a></Link>
                                    </div>
                                </div>
                                </div>
                                </div>
                                </div>
                                </section>
                            {/*
                            
                            
                            <div className="col-lg-12 d-none d-lg-block">
                                    <div className="row">
                                        <div className="col-lg-2" />
                                        <div className="col-lg-8">
                                            <div className="banner-imgs">
                                                <div className="block-1 shape-2"><img src="/assets/imgs/page/services/2/banner2.png" alt="Sube.Cloud" /></div>
                                                <div className="block-2 shape-2"><img src="/assets/imgs/page/services/2/banner1.png" alt="Sube.Cloud" /></div>
                                                <div className="block-3 shape-2"><img src="/assets/imgs/page/services/2/banner3.png" alt="Sube.Cloud" /></div><img src="/assets/imgs/page/services/1/banner.png" alt="Sube.Cloud" />
                                            </div>
                                        </div>
                                        <div className="col-lg-2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    
    */}

                


                <section className="section-box">
                    <div className="container mt-120">
                        <div className="bg-2 bdrd-58 pattern-white none-pattern pb-60">
                            <div className="row">
                                <div className="col-lg-2 col-sm-1 col-12" />
                                <div className="col-lg-8 col-sm-10 col-12 text-center mt-70">
                                    <h2 className="text-heading-1 color-gray-900">¿Qué ofrecemos?</h2>
                                    <p className="text-body-lead-large color-gray-600 mt-20">¿Qué nos distingue de los demás? Ofrecemos soluciones integrales con estrategia, diseño y tecnología en consultoría de la nube.</p>
                                </div>
                                <div className="col-lg-2 col-sm-1 col-12" />
                            </div>
                            <div className="container mt-70">
                                <OfferSlider/>
                            </div>
                        </div>
                    </div>
                </section>

                <Logos />
                
                <section className="section-box mt-90">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-sm-1 col-12" />
                            <div className="col-lg-8 col-sm-10 col-12 text-center mt-40">
                                <h2 className="text-heading-1 color-gray-900 mb-10">Diseñamos Soluciones <br className="d-lg-block d-none" />a tu Medida</h2>
                                <p className="text-body-lead-large color-gray-600 mt-20">Sube.Cloud es tu aliado en el viaje hacia el éxito empresarial en la nube. Con un equipo de expertos que conoce a la perfección el universo de la nube, diseñamos soluciones a medida para tus necesidades. Confía en nosotros para elevar tu negocio a nuevas alturas en el mundo digital.</p>
                            </div>
                            <div className="col-lg-2 col-sm-1 col-12" />
                        </div>
                    </div>
                    <div className="container mt-90 mb-100">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12">
                                <div className="bg-2 box-square hover-up">
                                    <h4 className="text-heading-4 color-gray-900 mb-15">Migración a la nube</h4>
                                    <p className="text-body-text-md color-gray-600">Evaluar, migrar datos y aplicaciones, probar, desplegar, optimizar y asegurar.</p>
                                    <div className="box-image-inner bg-color-1"><img src="/assets/imgs/page/homepage2/nubedinero.png" alt="Sube.Cloud" /></div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <div className="bg-6 box-square hover-up">
                                    <h4 className="text-heading-4 color-gray-900 mb-15">Backup y Recuperación en la Nube</h4>
                                    <p className="text-body-text-md color-gray-600">Planificación y Almacenamiento, Pruebas y Recuperación, Optimización y Seguridad.</p>
                                    <div className="box-image-inner bg-color-2"><img src="/assets/imgs/page/homepage2/nubepeluche.png" alt="Sube.Cloud" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="section-box pt-140 pb-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 mb-40">
                                <h3 className="text-heading-1">Preguntas frecuentes</h3>
                                <p className="text-body-text color-gray-600 mt-30">¿Te sientes inquisitivo? Echa un vistazo a algunas de nuestras preguntas frecuentes o ponte en contacto con nuestros colaboradores para obtener ayuda.</p>
                                <div className="row">
                                    <div className="col-lg-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">Potencia tus Ventas</h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">Aprovecha la consultoría en la nube para el crecimiento.</p>
                                    </div>
                                    <div className="col-lg-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">Descubre Nuevas Funcionalidades</h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">Desbloquea las últimas tendencias de diseño con plantillas personalizadas.</p>
                                    </div>
                                </div>
                                <div className="mt-60">
                                    <Link href="/page-contact" legacyBehavior><a className="btn btn-black icon-arrow-right-white">Contacto</a></Link>

                                    <Link href="/" legacyBehavior><a className="btn btn-link text-heading-6">Inicio</a></Link>
                                </div>
                            </div>
                            <div className="col-lg-7">
                            <Accordion/>
                            </div>
                        </div>
                    </div>
                </section>
            {/*}    <section className="section-box overflow-visible mb-100">
                    <div className="container mt-100">
                        <div className="row">
                            <div className="col-lg-10 mx-auto">
                                <div className="bg-6 box-newsletter position-relative">
                                    <div className="row">
                                        <div className="col-lg-5 col-md-7"><span className="text-body-capitalized color-gray-500 text-uppercase">newsletter</span>
                                            <h4 className="text-heading-2 mb-10 mt-10">Subscribe our newsletter</h4>
                                            <p className="text-body-text color-gray-500">By clicking the button, you are agreeing with our</p>
                                            <Link href="/page-terms" legacyBehavior><a>Term and Conditions</a></Link>

                                            <div className="box-form-newsletter mt-30">
                                                <form className="form-newsletter"><input className="input-newsletter"  placeholder="Enter you mail .." /><button className="btn btn-send" /></form>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-5 mt-30 mt-lg-0 mt-md-30 mt-sm-30 position-relative text-end">
                                            <div className="block-chart shape-1"><img src="/assets/imgs/template/chart.png" alt="Sube.Cloud" /></div><img className="img-responsive img-newsletter" src="assets/imgs/template/img-newsletter.png" alt="Sube.Cloud" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
*/}
            </Layout>

        </>
    )
}

export default Service2;