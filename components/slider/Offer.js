/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React from 'react';
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Autoplay, Navigation, Pagination]);

const OfferSlider = () => {

    const data = [
        {
            "img": "market.svg",
            "title": "Migración de Datos",
            "text": "Ofrecemos servicios de migración de datos para tu transición a la nube."
        },
        {
            "img": "consulting.svg",
            "title": "Consultoría Estratégica",
            "text": "Nuestra consultoría estratégica te guía hacia el éxito en la nube."
        },
        {
            "img": "cognity.svg",
            "title": "Creación y Mantenimiento de Servidores en la Nube",
            "text": "Diseñamos y gestionamos servidores y configuraciones de red en la nube a medida."
        },
        {
            "img": "business-strategy.svg",
            "title": "Implementación de DevOps",
            "text": "Mejoramos la agilidad y eficiencia con DevOps en la nube."
        },
        {
            "img": "social.svg",
            "title": "Desarrollo de Cultura DevOps",
            "text": "Fomentamos una cultura DevOps para la innovación continua en la nube."
        },
        {
            "img": "local.svg",
            "title": "Seguridad en la Nube",
            "text": "Protegemos tus datos y aplicaciones en la nube con alta seguridad."
        }
    ];

    return (
        <>
            <div className="box-swiper">
                <div className="swiper-container swiper-group-4">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false
                        }}
                        navigation={{
                            prevEl: ".swiper-button-prev-5",
                            nextEl: ".swiper-button-next-5"
                        }}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                        }}
                        className="swiper-wrapper pb-70 pt-5"
                    >
                        {data.map((item, i) => (
                            <SwiperSlide key={i}>
                                <div className="swiper-slide">
                                    <div className="card-grid-style-2 hover-up">
                                        <div className="grid-2-img">
                                            <img src={`assets/imgs/page/homepage1/${item.img}`} alt="Sube.Cloud" />
                                        </div>
                                        <h3 className="text-heading-5 mt-20">{item.title}</h3>
                                        <p className="text-body-text color-gray-600 mt-20">{item.text}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default OfferSlider;
