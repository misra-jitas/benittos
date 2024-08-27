    import Link from "next/link";
    import { useState, useEffect } from "react";
    import Accordion from "../components/elements/Accordion";
    import Contacto from "../components/elements/Contacto";
    import Layout from "../components/layout/Layout";
    import { HomeBanner } from "../components/elements/HomeBanner";
    import { HomeBanner2 } from "../components/elements/HomeBanner2";
    import VuelaBlog from  "../components/elements/VuelaBlog";
    import Logos from '../components/elements/Logos'; 
    function Index() {
    // Open modal
    const [modal, setModal] = useState(false);
    const [videoLoading, setVideoLoading] = useState(true);

    // State for the first blog post
    const [firstBlogPost, setFirstBlogPost] = useState(null);

    // Function to open the modal
    const openModal = () => {
        setModal(!modal);
    };

    // Function to handle the video loading
    const spinner = () => {
        setVideoLoading(!videoLoading);
    };

    useEffect(() => {
    // Fetch the latest blog post using Axios
    const fetchData = async () => {
        try {
        const response = await axios.get('https://unanube-blog-e193372c4dad.herokuapp.com/api/vuelas?_sort=id:desc&_limit=1 ');
        if (response.status === 200) {
            // Get the latest blog post
            const latestPost = response.data.data[0].attributes;
            setFirstBlogPost(latestPost);
        }
        } catch (error) {
        console.error('Error fetching data:', error);
        }
    };

    fetchData();
    }, []);


    return (
        <>
        <Layout>
            <section className="section-box">
            <div className="banner-hero banner-3">
                <div className="container">
                <div className="text-center">
                    <span className="tag-1 bg-6 color-green-900">
                    Benittos
                    </span>
                    <h1 className="text-display-2 color-gray-900 mt-40">
                    <HomeBanner />
                    <HomeBanner2 />
                    </h1>
                    <div className="text-body-lead-large color-gray-500 mt-40">
                   Provechito!
                    </div>
                    <div className="mt-50">
                    <Link href="/servicios-nube" legacyBehavior>
                        <a className="btn btn-black icon-arrow-right-white mb-15">
                        Conoce mas de nosotros
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

           {/*     <section className="section-box">
            <div className="container mt-90">
                <div className="row">
                <div className="col-lg-4 col-sm-12 pr-30 mb-50">
                    <div className="card-grid-style-4">
                    <span className="tag-dot">El Blog de la Nube</span>
                    <Link href="/blog-single" legacyBehavior>
                        <a className="text-heading-4">
                        <VuelaBlog />                     </a>
                    </Link>

                   
                    </div>
                </div>
                {/* Other cards and content 
                </div>
            </div>
            </section>  
           
             <Logos />
            
                    <div className="section-box mt-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1 col-sm-1 col-12" />
                                <div className="col-lg-10 col-sm-10 col-12 text-center">
                                    <h2 className="text-heading-1 color-gray-900 mb-10">Ofrecemos soluciones integrales en la nube para cubrir todas tus necesidades empresariales. </h2>
                                    <p className="text-body-lead-large color-gray-600 mt-20">Desde migraciones hasta optimización, <br className="d-lg-block d-none" />¡estamos aquí para ayudarte a llevar tu negocio a la nube! 🚀 #ConsultoríaEnLaNube #Soluciones</p>
                                </div>
                                <div className="col-lg-1 col-sm-1 col-12" />
                            </div>
                        </div>
                        <div className="container mt-40">
                            <div className="row">
                                <div className="col-lg-4 col-md-12 col-sm-12">
                                    <div className="list-icons mt-50">
                                        <div className="item-icon"><span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-acquis.svg" alt="Sube.Cloud" /></span>
                                            <h4 className="text-heading-4">1. Descubre</h4>
                                            <p className="text-body-text color-gray-600 mt-15">Explora nuestras soluciones en la nube y desbloquea todo el potencial para tu negocio.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 col-sm-12">
                                    <div className="list-icons mt-50">
                                        <div className="item-icon"><span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-active.svg" alt="Sube.Cloud" /></span>
                                            <h4 className="text-heading-4">2. Migra</h4>
                                            <p className="text-body-text color-gray-600 mt-15">Confía en nuestros expertos para una migración suave y segura a la nube, sin complicaciones.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 col-sm-12">
                                    <div className="list-icons mt-50">
                                        <div className="item-icon"><span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-retent.svg" alt="Sube.Cloud" /></span>
                                            <h4 className="text-heading-4">3. Optimiza</h4>
                                            <p className="text-body-text color-gray-600 mt-15">Maximiza la eficiencia y el rendimiento. Consultoría en la nube. 🌟 #SubeALaNube</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="section-box">
                        <div className="container mt-120">
                            <div className="row">
                                <div className="col-lg-6 col-sm-12 block-img-we-do"><img className="bdrd-16 img-responsive" src="assets/imgs/template/nube.svg" alt="Sube.Cloud" /></div>
                                <div className="col-lg-6 col-sm-12 block-we-do"><span className="tag-1 bg-6 color-green-900"> 🚀 #SubeALaNube</span>
                                    <h5 className="text-heading-2 mt-30">Una experiencia excepcionalmente única, diseñada especialmente para ti. 🌟</h5>
                                    <p className="text-body-lead-large color-gray-600 mt-30">Subir tu negocio a la nube, ya sea privada, pública o híbrida, te brinda una serie de beneficios esenciales. La nube optimiza la eficiencia, ahorra costos y fomenta el crecimiento empresarial. En Sube.cloud, estamos aquí para guiarte en este viaje de transformación digital. Algunos de nuestros servicios incluyen:</p>
                                    <div className="line-bd-green mt-50" />
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                            <h4 className="text-heading-6 icon-leaf">Migración sin Problemas</h4>
                                            <p className="text-body-excerpt color-gray-600 mt-15">Transferimos tus datos y aplicaciones a la nube de manera eficiente y segura.</p>
                                        </div>
                                        <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                            <h4 className="text-heading-6 icon-leaf">Optimización de Costos</h4>
                                            <p className="text-body-excerpt color-gray-600 mt-15">Ayudamos a reducir los gastos operativos y a maximizar los beneficios de la nube.</p>
                                        </div>
                                        <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                            <h4 className="text-heading-6 icon-leaf">Escalabilidad</h4>
                                            <p className="text-body-excerpt color-gray-600 mt-15">Diseñamos una infraestructura que crece contigo, permitiendo una expansión fácil según las necesidades de tu negocio.</p>
                                        </div>
                                        <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                            <h4 className="text-heading-6 icon-leaf">Monitoreo y Gestión:</h4>
                                            <p className="text-body-excerpt color-gray-600 mt-15">Supervisamos y administramos tu entorno en la nube para un rendimiento óptimo.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Clientes que nos refieren
                    <section className="section-box pt-100 pb-100 mt-100 bg-orange-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5 mb-30"><span className="tag-1 bg-6 color-gray-900">Built Exclusively For You</span>
                                    <h3 className="text-heading-1 mt-30">Do not take our word for it. See what our clients say.</h3>
                                    <p className="text-body-lead-large color-gray-600 mt-30">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero tempus, blandit</p>
                                    <div className="mt-40">
                                        <Link href="/page-contact" legacyBehavior><a className="btn btn-default btn-white icon-arrow-right">Learn More
                                        </a></Link>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-12 col-sm-12">
                                            <div className="card-grid-style-2 card-square hover-up mb-20">
                                                <p className="text-body-text color-gray-600 text-comment">{ "No matter where you go, Its is the coolest, most happening thing around! Not able to tell you how happy I am with it. " }</p>
                                                <div className="box-img-user">
                                                    <div className="img-user img-user-round"><img src="/assets/imgs/page/homepage2/user-1.png" alt="Sube.Cloud" /></div>
                                                    <h4 className="text-body-lead color-gray-900 mb-5">Jane Cooper</h4>
                                                    <p className="text-body-text-md">Biffco Enterprises Ltd.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12">
                                            <div className="card-grid-style-2 card-square hover-up mb-20">
                                                <p className="text-body-text color-gray-600 text-comment">{"Wow what great service, I love it! Its is the most valuable business resource we have EVER purchased. We cant understand how we have been living without it. I couldnt have asked for more than this."}</p>
                                                <div className="box-img-user">
                                                    <div className="img-user img-user-round"><img src="/assets/imgs/page/homepage2/user-2.png" alt="Sube.Cloud" /></div>
                                                    <h4 className="text-body-lead color-gray-900 mb-5">Wade Warren</h4>
                                                    <p className="text-body-text-md">Krusty Krab</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12">
                                            <div className="card-grid-style-2 card-square hover-up mb-20">
                                                <p className="text-body-text color-gray-600 text-comment">{"Your company is truly upstanding and is behind its product 100%. Its the perfect solution for our business. It has really helped our business. Needless to say we are extremely satisfied with the results. "}</p>
                                                <div className="box-img-user">
                                                    <div className="img-user img-user-round"><img src="/assets/imgs/page/homepage2/user-3.png" alt="Sube.Cloud" /></div>
                                                    <h4 className="text-body-lead color-gray-900 mb-5">Leslie Alexander</h4>
                                                    <p className="text-body-text-md">Biffco Enterprises Ltd.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12">
                                            <div className="card-grid-style-2 card-square hover-up mb-20">
                                                <p className="text-body-text color-gray-600 text-comment">{"Its is both attractive and highly adaptable. Its exactly what I have been looking for. Definitely worth the investment."}</p>
                                                <div className="box-img-user">
                                                    <div className="img-user img-user-round"><img src="/assets/imgs/page/homepage2/user-4.png" alt="Sube.Cloud" /></div>
                                                    <h4 className="text-body-lead color-gray-900 mb-5">Jenny Wilson</h4>
                                                    <p className="text-body-text-md">Soylent Corp</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}
                    
                
                    
                    
                    <section className="section-box">
                    <div className="col-lg-12">
                <Contacto/>
                                </div>
                    </section> 
                    {/* Suscribete a nuestro news letter 
                    <section className="section-box overflow-visible mb-100">
                        <div className="container mt-100">
                            <div className="row">
                                <div className="col-lg-10 mx-auto">
                                    <div className="bg-2 box-newsletter position-relative">
                                        <div className="row">
                                            <div className="col-lg-5 col-md-7"><span className="text-body-capitalized color-gray-500 text-uppercase">newsletter</span>
                                                <h4 className="text-heading-2 mb-10 mt-10">Subscribe our newsletter</h4>
                                                <p className="text-body-text color-gray-500">By clicking the button, you are agreeing with our</p>
                                                <Link href="/page-terms" legacyBehavior><a>Term and Conditions
                                                </a></Link>

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
                    </section>*/}

                    {modal ? (
                    <section className="modal__bg" onClick={openModal}>
                        <div className="modal__align">
                        <div className="modal__content" modal={modal}>
                            <div className="modal__video-align">
                            {videoLoading ? (
                                <div className="modal__spinner">
                                    <i className="fi-rr-refresh"></i>
                                </div>
                            ) : null}
                            <iframe
                                className="modal__video-style"
                                onLoad={spinner}
                                loading="lazy"
                                width="800"
                                height="500"
                                src="https://www.youtube.com/embed/oRI37cOPBQQ"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            ></iframe>
                            </div>
                        </div>
                        </div>
                    </section>
                    
                    ) : null}

                </Layout>

            </>
        )
    }

    export default Index;