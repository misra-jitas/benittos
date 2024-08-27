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
                                    <div className="col-md-6 col-12 mb-4">
                                        <p className="text-body-lead-large color-gray-500">
                                            Benittos Paninoteca es una joya culinaria en el corazón de Puerto Vallarta, reconocida por su historia y talento excepcional. Con pasión por sabores auténticos y artesanía, Benittos es un destino querido por locales y turistas. Cada panini refleja nuestro compromiso con la calidad y la innovación. ¡Únete a nosotros y saborea el vibrante patrimonio culinario de Puerto Vallarta!
                                        </p>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <p className="text-body-lead-large color-gray-500">
                                            Benittos Paninoteca is a culinary gem in the heart of Puerto Vallarta, known for its history and exceptional talent. With a passion for authentic flavors and craftsmanship, Benittos is a beloved destination for locals and tourists. Each panini reflects our commitment to quality and innovation. Join us and savor the vibrant culinary heritage of Puerto Vallarta!
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-50">
                                    <Link href="/servicios-nube" legacyBehavior>
                                        <a className="btn btn-black icon-arrow-right-white mb-15">
                                            Conoce más de nosotros
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
