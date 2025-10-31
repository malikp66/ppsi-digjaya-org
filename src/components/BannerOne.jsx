"use client";
import Link from "next/link";
import { useRef } from "react";
import Slider from "@/components/ClientSlider";

const BannerOne = () => {
  const sliderRef = useRef(null);
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    arrows: false,
  };
  const slides = [
    {
      id: "pelestarian",
      background: "url(/assets/images/banner/banner-two-bg.png)",
      icon: "icon-donation",
      subtitle: "PPSI Digjaya – Pelestari Silat Tradisi Jawa Barat",
      titleLine1: "Menyatukan Perguruan",
      titleLine2Prefix: "dan membentuk ",
      titleHighlight: "generasi berkarakter",
      titleLine2Suffix: " pencak silat.",
      description:
        "Menyatukan perguruan, membina atlet, dan menguatkan ekonomi anggota.",
      primaryCta: {
        href: "/keanggotaan",
        label: "Daftar Anggota PPSI",
        aria: "daftar anggota",
        className: "btn--primary",
      },
      secondaryCta: {
        href: "/our-causes",
        label: "Lihat Program & Kegiatan",
        aria: "program dan kegiatan",
        className: "btn--tertiary",
      },
    },
    {
      id: "program-budaya",
      background: "url(/assets/images/banner/banner-one-bg.png)",
      icon: "icon-donation",
      subtitle: "Program budaya, pasanggiri, dan edukasi silat tradisi",
      titleLine1: "Menggerakkan Kegiatan",
      titleLine2Prefix: "melalui ",
      titleHighlight: "pasanggiri & pelestarian",
      titleLine2Suffix: " warisan leluhur.",
      description:
        "Dukung agenda budaya, pasanggiri sekolah, dan regenerasi pendekar muda.",
      primaryCta: {
        href: "/events",
        label: "Kalender Budaya",
        aria: "kalender budaya",
        className: "btn--primary",
      },
      secondaryCta: {
        href: "/pelestarian-budaya",
        label: "Pelestarian Silat",
        aria: "pelestarian pencak silat",
        className: "btn--tertiary",
      },
    },
    {
      id: "ekonomi",
      background: "url(/assets/images/banner/banner-two-bg.png)",
      icon: "icon-donation",
      subtitle: "Ekonomi kreatif & dukungan atlet PPSI Digjaya",
      titleLine1: "Marketplace Anggota",
      titleLine2Prefix: "serta ",
      titleHighlight: "dana sosial",
      titleLine2Suffix: " untuk pelatih dan atlet.",
      description:
        "Belanja atribut resmi, dukung dana sosial, dan perkuat kemandirian ekonomi anggota.",
      primaryCta: {
        href: "/shop",
        label: "Toko Atribut PPSI",
        aria: "toko atribut ppsi",
        className: "btn--primary",
      },
      secondaryCta: {
        href: "/donate-us",
        label: "Dukung Atlet & Pelatih",
        aria: "dana sosial ppsi",
        className: "btn--tertiary",
      },
    },
  ];

  return (
    <>
      <section className='banner-two'>
        <div className='banner-two__slider swiper'>
          <Slider {...settings} ref={sliderRef} className='swiper-wrapper'>
            {slides.map((slide) => (
              <div className='swiper-slide' key={slide.id}>
                <div className='banner-two__slider-single'>
                  <div
                    className='banner-two__slider-bg'
                    style={{ backgroundImage: slide.background }}
                  ></div>
                  <div className='container'>
                    <div className='row'>
                      <div className='col-12 col-md-9 col-lg-7 col-xxl-6'>
                        <div className='banner-two__slider-content'>
                          <span className='sub-title'>
                            <i className={slide.icon} />
                            {slide.subtitle}
                          </span>
                          <h1>
                            {slide.titleLine1} <br />
                            {slide.titleLine2Prefix}
                            <span className='bottom-line'>
                              {slide.titleHighlight}
                            </span>
                            {slide.titleLine2Suffix}
                          </h1>
                          {slide.description && <p>{slide.description}</p>}
                          <div className='banner__content-cta cta'>
                            <Link
                              href={slide.primaryCta.href}
                              aria-label={slide.primaryCta.aria}
                              title={slide.primaryCta.label}
                              className={slide.primaryCta.className}
                            >
                              {slide.primaryCta.label}{" "}
                              <i className='fa-solid fa-arrow-right' />
                            </Link>
                            <Link
                              href={slide.secondaryCta.href}
                              aria-label={slide.secondaryCta.aria}
                              title={slide.secondaryCta.label}
                              className={slide.secondaryCta.className}
                            >
                              {slide.secondaryCta.label}{" "}
                              <i className='fa-solid fa-arrow-right' />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className='slider-navigation d-none d-md-flex'>
          <button
            onClick={() => sliderRef.current.slickPrev()}
            type='button'
            aria-label='prev slide'
            title='prev slide'
            className='prev-banner slider-btn'
          >
            <i className='fa-solid fa-arrow-left' />
          </button>
          <button
            onClick={() => sliderRef.current.slickNext()}
            type='button'
            aria-label='next slide'
            title='next slide'
            className='next-banner slider-btn slider-btn-next'
          >
            <i className='fa-solid fa-arrow-right' />
          </button>
        </div>
        <div
          className='shape-left'
          data-aos='fade-right'
          data-aos-duration={1000}
          data-aos-delay={300}
        >
          <img
            src='/assets/images/banner/banner-two-shape.png'
            alt='Image_inner'
          />
        </div>
        <div className='sprade-shape'>
          <img
            src='assets/images/sprade-base.png'
            alt='Image_inner'
            className='base-img'
            data-aos='zoom-in'
            data-aos-duration={1000}
          />
        </div>
        <div className='unity'>
          <img src='/assets/images/unity.png' alt='Image_inner' />
        </div>
      </section>
    </>
  );
};

export default BannerOne;
