import Link from "next/link";
import Image from 'next/image';
import Layout from "../components/layout/Layout";

function Index() {
    return (
        <>
            <Layout>
                <section className="section-box">
                    <div className="banner-hero banner-3">
                        <div className="container">
                            <div className="text-center">
                                <Image alt="benittos" src="/assets/imgs/template/logo-benittos-n.svg" width={300} height={300} />
                                <div className="row mt-40">
                                    <div className="col-md-6">
                                        <p className="text-body-lead-large color-gray-500">
                                            Benittos Paninoteca es una joya culinaria en el corazón de Puerto Vallarta, reconocida por su rica historia y el talento excepcional detrás de cada platillo. Establecido con una pasión por los sabores auténticos y la artesanía artesanal, Benittos se ha convertido en un destino querido tanto para los locales como para los turistas. Cada panini es un testimonio de nuestro compromiso con la calidad, combinando técnicas tradicionales con ingredientes innovadores para crear una experiencia culinaria verdaderamente única. Únase a nosotros en Benittos y saboree el sabor del vibrante patrimonio culinario de Puerto Vallarta.
                                        </p>
                                    </div>
                                    <div className="col-md-6">
                                        <p className="text-body-lead-large color-gray-500">
                                            Benittos Paninoteca is a culinary gem in the heart of Puerto Vallarta, renowned for its rich history and the exceptional talent behind every dish. Established with a passion for authentic flavors and artisanal craftsmanship, Benittos has become a beloved destination for locals and tourists alike. Each panini is a testament to our commitment to quality, blending traditional techniques with innovative ingredients to create a truly unique dining experience. Join us at Benittos and savor the taste of Puerto Vallarta&apos;s vibrant culinary heritage.
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-50">
                                    <Link href="/servicios-nube" legacyBehavior>
                                        <a className="btn btn-black icon-arrow-right-white mb-15">
                                            Conoce Nuestro Menu
                                        </a>
                                    </Link>
                                    <Link href="/page-contact" legacyBehavior>
                                        <a className="btn btn-default icon-arrow-right color-gray-900 ml-20 btn-mb mb-15">
                                            ¡Contáctanos ya!
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}

export default Index;
