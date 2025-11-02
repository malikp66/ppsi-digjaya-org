"use client";
import Link from "next/link";
import React, { useRef } from "react";
import Slider from "@/components/ClientSlider";

const DifferenceOne = () => {
  const sliderRef = useRef(null);
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const focusAreas = [
    {
      id: "budaya",
      title: "Program Budaya & Pasanggiri",
      description:
        "Menghadirkan festival tradisi, kurikulum silat sekolah, dan pasanggiri tingkat Jawa Barat.",
      href: "/our-causes",
      wrapperClass: "difference__single-first",
      icon: "icon-education",
      background: "url(/assets/images/difference/bg-one.png)",
    },
    {
      id: "pembinaan",
      title: "Pembinaan Atlet & Pelatih",
      description:
        "Pelatihan terstruktur, mentoring pelatih senior, dan pendampingan prestasi atlet muda.",
      href: "/pelatihan-atlet",
      wrapperClass: "difference__single-second",
      icon: "icon-support-heart",
      background: "url(/assets/images/difference/bg-two.png)",
    },
    {
      id: "ekonomi",
      title: "Ekonomi & Marketplace Anggota",
      description:
        "Mengembangkan pemasaran atribut resmi, UMKM anggota, serta dana sosial berkelanjutan.",
      href: "/shop",
      wrapperClass: "difference__single-third",
      icon: "icon-fund",
      background: "url(/assets/images/difference/bg-three.png)",
    },
  ];
  const sliderItems = [...focusAreas, ...focusAreas];

  return (
    <>
      <section className='difference'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-lg-10 col-xl-8'>
              <div
                className='section__header text-center'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                <span className='sub-title'>
                  <i className='icon-donation' />
                  Pilar Strategis PPSI Digjaya
                </span>
                <h2 className='title-animation_inner'>
                  Menjaga warisan <span>silat</span> dan memberdayakan anggota
                </h2>
                <p>
                  PPSI Digjaya hadir sebagai wadah resmi yang memadukan pelestarian tradisi,
                  pembinaan prestasi, serta penguatan ekonomi komunitas pencak silat Jawa Barat.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='difference__inner'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className='difference__slider swiper'>
                  <Slider
                    {...settings}
                    ref={sliderRef}
                    className='swiper-wrapper'
                  >
                    {sliderItems.map((item, index) => (
                      <div className='swiper-slide px-2' key={`${item.id}-${index}`}>
                        <div className='difference__single-wrapper'>
                          <div
                            className={`difference__single ${item.wrapperClass}`}
                            style={{ backgroundImage: item.background }}
                          >
                            <div className='difference__single-thumb'>
                              <i className={item.icon} />
                            </div>
                            <div className='difference__single-content'>
                              <h5>
                                <Link href={item.href}>{item.title}</Link>
                              </h5>
                              <p>{item.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
          <div className='slider-navigation'>
            <button
              onClick={() => sliderRef.current.slickPrev()}
              type='button'
              aria-label='prev slide'
              title='prev slide'
              className='prev-difference slider-btn'
            >
              <i className='fa-solid fa-arrow-left' />
            </button>
            <button
              onClick={() => sliderRef.current.slickNext()}
              type='button'
              aria-label='next slide'
              title='next slide'
              className='next-difference slider-btn slider-btn-next'
            >
              <i className='fa-solid fa-arrow-right' />
            </button>
          </div>
        </div>
        {/* <div
          className='shape-hand'
          data-aos='fade-right'
          data-aos-duration={1000}
          data-aos-delay={300}
        >
          <img
            src='/assets/images/difference/shape-hand.png'
            alt='Image_inner'
          />
        </div> */}
      </section>
    </>
  );
};

export default DifferenceOne;
