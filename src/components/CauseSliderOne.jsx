"use client";
import { useRef } from "react";
import Slider from "@/components/ClientSlider";
import ProgressBar from "../helper/ProgressBar";
import Link from "next/link";

const CauseSliderOne = () => {
  const sliderRef = useRef(null);
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 20000,
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
          dots: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          dots: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      },
    ],
  };

  const causes = [
    {
      id: "pendampingan-gizi",
      image: "assets/images/cause/one.png",
      tagHref: "/our-causes",
      tagLabel: "Kesehatan",
      title: "Pendampingan gizi atlet muda",
      description:
        "Pemeriksaan kesehatan rutin dan dukungan nutrisi bagi atlet usia sekolah anggota PPSI.",
      percent: 85,
      raised: "Rp85.000.000",
      target: "Rp100.000.000",
    },
    {
      id: "dapur-pasanggiri",
      image: "assets/images/cause/two.png",
      tagHref: "/our-causes",
      tagLabel: "Pangan",
      title: "Dapur pasanggiri keliling",
      description:
        "Menyiapkan konsumsi sehat bagi peserta lomba antar perguruan dan panitia pasanggiri.",
      percent: 90,
      raised: "Rp90.000.000",
      target: "Rp100.000.000",
    },
    {
      id: "beasiswa-pelatih",
      image: "assets/images/cause/three.png",
      tagHref: "/our-causes",
      tagLabel: "Pendidikan",
      title: "Beasiswa pelatih tradisi",
      description:
        "Pembiayaan sertifikasi, workshop, dan modul ajar bagi pelatih senior dan muda.",
      percent: 75,
      raised: "Rp75.000.000",
      target: "Rp100.000.000",
    },
    {
      id: "ambulans-paguron",
      image: "assets/images/cause/four.png",
      tagHref: "/our-causes",
      tagLabel: "Kesehatan",
      title: "Ambulans kegiatan perguruan",
      description:
        "Pengadaan ambulans siaga untuk event besar pencak silat dan latihan massal PPSI.",
      percent: 65,
      raised: "Rp65.000.000",
      target: "Rp100.000.000",
    },
    {
      id: "perpustakaan-silat",
      image: "assets/images/cause/five.png",
      tagHref: "/our-causes",
      tagLabel: "Budaya",
      title: "Perpustakaan digital silat",
      description:
        "Digitalisasi naskah kuno, buku silat, dan arsip PPSI untuk pembelajaran generasi muda.",
      percent: 85,
      raised: "Rp85.000.000",
      target: "Rp100.000.000",
    },
    {
      id: "pembinaan-atlet-putri",
      image: "assets/images/cause/six.png",
      tagHref: "/our-causes",
      tagLabel: "Pembinaan",
      title: "Pembinaan atlet putri",
      description:
        "Program latihan intensif, pendampingan gizi, dan sport science untuk atlet putri.",
      percent: 90,
      raised: "Rp90.000.000",
      target: "Rp100.000.000",
    },
    {
      id: "sarana-padepokan",
      image: "assets/images/cause/seven.png",
      tagHref: "/our-causes",
      tagLabel: "Infrastruktur",
      title: "Sarana padepokan inklusif",
      description:
        "Renovasi fasilitas latihan agar ramah difabel dan nyaman digunakan lintas usia.",
      percent: 75,
      raised: "Rp75.000.000",
      target: "Rp100.000.000",
    },
    {
      id: "pengkaderan-pemuda",
      image: "assets/images/cause/eight.png",
      tagHref: "/our-causes",
      tagLabel: "Komunitas",
      title: "Pengkaderan pemuda desa",
      description:
        "Ekspedisi perguruan ke desa untuk membuka kelas pencak silat tradisi PPSI.",
      percent: 65,
      raised: "Rp65.000.000",
      target: "Rp100.000.000",
    },
  ];

  return (
    <section
      className='cause cause-alt'
      style={{
        backgroundImage: "url(/assets/images/cause/cause-bg.png)",
      }}
    >
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-12 col-md-8 col-xl-7'>
            <div className='section__header text-center'>
              <span className='sub-title'>
                <i className='icon-donation' />
                Mulai berdonasi untuk masyarakat rentan
              </span>
              <h2 className='title-animation_inner'>
                Jadilah alasan <span>senyuman</span> para pesilat muda
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className='cause-inner__wrapper'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='cause__slider-wrapper'>
                <div className='cause__slider swiper'>
                  <Slider
                    {...settings}
                    ref={sliderRef}
                    className='swiper-wrapper'
                  >
                    {causes.map((cause) => (
                      <div className='swiper-slide' key={cause.id}>
                        <div className='cause__slider-inner'>
                          <div className='cause__slider-single'>
                            <div className='thumb'>
                              <Link href='/cause-details'>
                                <img
                                  src={cause.image}
                                  alt='Program sosial PPSI Digjaya'
                                />
                              </Link>
                              <div className='tag'>
                                <Link href={cause.tagHref}>{cause.tagLabel}</Link>
                              </div>
                            </div>
                            <div className='content'>
                              <h6>
                                <Link href='/cause-details'>{cause.title}</Link>
                              </h6>
                              <p>{cause.description}</p>
                            </div>
                            <div className='cause__slider-cta'>
                              <div className='cause__progress progress-bar-single'>
                                {/* ProgressBar */}
                                <ProgressBar percent={cause.percent} />
                                {/* ProgressBar */}
                                <div className='cause-progress__goal'>
                                  <p>
                                    Terkumpul: <span className='raised'>{cause.raised}</span>
                                  </p>
                                  <p>
                                    Target: <span className='goal'>{cause.target}</span>
                                  </p>
                                </div>
                              </div>
                              <div className='cause__cta'>
                                <Link
                                  href='/donate-us'
                                  aria-label='donasi sekarang'
                                  title='Donasi Sekarang'
                                  className='btn--secondary'
                                >
                                  Donasi Sekarang
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
        <div className='slider-navigation'>
          <button
            type='button'
            onClick={() => sliderRef.current.slickPrev()}
            aria-label='prev slide'
            title='prev slide'
            className='prev-cause slider-btn'
          >
            <i className='fa-solid fa-arrow-left' />
          </button>
          <button
            type='button'
            onClick={() => sliderRef.current.slickNext()}
            aria-label='next slide'
            title='next slide'
            className='next-cause slider-btn slider-btn-next'
          >
            <i className='fa-solid fa-arrow-right' />
          </button>
        </div>
      </div>
      {/* <div className='spade'>
        <img src='assets/images/help/spade.png' alt='Image_inner' />
      </div> */}
    </section>
  );
};

export default CauseSliderOne;


