"use client";
import { useRef } from "react";
import Slider from "@/components/ClientSlider";
import ProgressBar from "../helper/ProgressBar";
import Link from "next/link";

const programs = [
  {
    id: "pasanggiri",
    image: "/assets/images/cause/one.png",
    tag: "Pasanggiri",
    title: "Pasanggiri Pencak Silat Jawa Barat 2025",
    description:
      "Seleksi rutin untuk atlet muda dengan pembinaan seni jurus dan tanding tradisi Sunda.",
    href: "/cause-details",
    progress: 72,
    achievement: "72 perguruan",
    target: "100 perguruan",
    ctaHref: "/events",
    ctaLabel: "Lihat Agenda",
  },
  {
    id: "kurikulum",
    image: "/assets/images/cause/two.png",
    tag: "Pelestarian",
    title: "Integrasi Kurikulum Silat di Sekolah",
    description:
      "Pendampingan guru olahraga untuk menghadirkan materi pencak silat tradisi di sekolah negeri.",
    href: "/cause-details",
    progress: 55,
    achievement: "38 sekolah",
    target: "70 sekolah",
    ctaHref: "/pelestarian-budaya",
    ctaLabel: "Pelajari Program",
  },
  {
    id: "festival",
    image: "/assets/images/cause/three.png",
    tag: "Festival",
    title: "Festival Seni Pencak & Pameran Budaya",
    description:
      "Pagelaran seni pencak, musik tradisi, dan pameran arsip silat yang mempertemukan perguruan.",
    href: "/cause-details",
    progress: 80,
    achievement: "Rp185 jt",
    target: "Rp225 jt",
    ctaHref: "/donate-us",
    ctaLabel: "Dukung Kegiatan",
  },
  {
    id: "pelatih",
    image: "/assets/images/cause/four.png",
    tag: "Pembinaan",
    title: "Sertifikasi Pelatih PPSI Digjaya",
    description:
      "Workshop metodologi latihan, manajemen keselamatan, dan etika pelatih untuk kader baru.",
    href: "/cause-details",
    progress: 65,
    achievement: "120 pelatih",
    target: "180 pelatih",
    ctaHref: "/pelatihan-atlet",
    ctaLabel: "Daftar Pelatihan",
  },
];

const CauseOne = () => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    dots: true,

    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
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

  return (
    <section
      className='cause'
      style={{
        backgroundImage: "url(/assets/images/cause/cause-bg.png)",
      }}
    >
      <div className='container'>
        <div className='row gutter-30 align-items-center'>
          <div className='col-12 col-md-8 col-xl-7'>
            <div className='section__header'>
              <span className='sub-title'>
                <i className='icon-donation' />
                Program Budaya &amp; Pasanggiri
              </span>
              <h2 className='title-animation_inner'>
                Menghidupkan <span>warisan</span> pencak silat tradisi
              </h2>
            </div>
          </div>
          <div className='col-12 col-md-4 col-xl-5'>
            <div className='slider-navigation'>
              <button
                onClick={() => sliderRef.current.slickPrev()}
                type='button'
                aria-label='prev slide'
                title='prev slide'
                className='prev-cause slider-btn'
              >
                <i className='fa-solid fa-arrow-left' />
              </button>
              <button
                onClick={() => sliderRef.current.slickNext()}
                type='button'
                aria-label='next slide'
                title='next slide'
                className='next-cause slider-btn slider-btn-next'
              >
                <i className='fa-solid fa-arrow-right' />
              </button>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <div className='cause__slider-wrapper'>
              <div className='cause__slider swiper'>
                <Slider
                  {...settings}
                  ref={sliderRef}
                  className='swiper-wrapper'
                >
                  {programs.map((program) => (
                    <div className='swiper-slide' key={program.id}>
                      <div className='cause__slider-inner'>
                        <div className='cause__slider-single'>
                          <div className='thumb'>
                            <Link href={program.href}>
                              <img src={program.image} alt='Image_inner' />
                            </Link>
                            <div className='tag'>
                              <Link href='/our-causes'>{program.tag}</Link>
                            </div>
                          </div>
                          <div className='content'>
                            <h6>
                              <Link href={program.href}>{program.title}</Link>
                            </h6>
                            <p>{program.description}</p>
                          </div>
                          <div className='cause__slider-cta'>
                            <div className='cause__progress progress-bar-single'>
                              <ProgressBar percent={program.progress} />
                              <div className='cause-progress__goal'>
                                <p>
                                  Capaian:{" "}
                                  <span className='raised'>
                                    {program.achievement}
                                  </span>
                                </p>
                                <p>
                                  Target:{" "}
                                  <span className='goal'>{program.target}</span>
                                </p>
                              </div>
                            </div>
                            <div className='cause__cta'>
                              <Link
                                href={program.ctaHref}
                                aria-label={program.ctaLabel.toLowerCase()}
                                title={program.ctaLabel}
                                className='btn--secondary'
                              >
                                {program.ctaLabel}
                              </Link>
                            </div>
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
      </div>
      <div className='spade'>
        <img src='/assets/images/help/spade.png' alt='Image_inner' />
      </div>
    </section>
  );
};

export default CauseOne;
