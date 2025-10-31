"use client";

import { useRef } from "react";
import Slider from "@/components/ClientSlider";

const testimonials = [
  {
    id: "perguruan",
    quote:
      "PPSI Digjaya mampu menyatukan perguruan tradisi dalam satu visi. Pasanggiri dan pelatihan bersama menumbuhkan regenerasi pendekar muda yang berkarakter.",
    name: "Eka Pratama",
    role: "Ketua Perguruan Tjimande Kota Bandung",
    avatar: "assets/images/author.png",
  },
  {
    id: "pelatih",
    quote:
      "Program sertifikasi pelatih memperkuat disiplin, etika, dan metodologi latihan. Kami dibekali materi keselamatan serta dukungan dana pembinaan atlet.",
    name: "Siti Rahmawati",
    role: "Pelatih Senior PPSI Digjaya",
    avatar: "assets/images/author.png",
  },
  {
    id: "atlet",
    quote:
      "Dukungan dana sosial membuat kami fokus berlatih menuju kejuaraan nasional. Marketplace PPSI juga membantu memenuhi kebutuhan atribut latihan resmi.",
    name: "Galih Siliwangi",
    role: "Atlet Pasanggiri Jawa Barat",
    avatar: "assets/images/author.png",
  },
  {
    id: "mitra",
    quote:
      "Kolaborasi dengan PPSI Digjaya membuka ruang edukasi pencak silat di sekolah. Materi budaya dan karakter diterima baik oleh guru dan siswa.",
    name: "Yudha Ramdhan",
    role: "Kepala Bidang Olahraga Disbudpar Kota Bandung",
    avatar: "assets/images/author.png",
  },
];

const TestimonialOne = () => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,

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

  return (
    <>
      <section
        className='testimonial'
        style={{
          backgroundImage: "url(/assets/images/bg-one.png)",
        }}
      >
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-md-8 col-xl-7'>
              <div
                className='section__header text-center'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                <span className='sub-title'>
                  <i className='icon-donation' />
                  Suara Anggota &amp; Mitra
                </span>
                <h2 className='title-animation_inner'>
                  Testimoni <span>sinergi</span> PPSI Digjaya
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className='testimonial__inner'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className='testimonial__slider swiper'>
                  <Slider
                    {...settings}
                    ref={sliderRef}
                    className='swiper-wrapper'
                  >
                    {testimonials.map((testimonial) => (
                      <div className='swiper-slide' key={testimonial.id}>
                        <div className='testimonial__slider-single'>
                          <div className='review'>
                            <i className='icon-star' />
                            <i className='icon-star' />
                            <i className='icon-star' />
                            <i className='icon-star' />
                            <i className='icon-star' />
                          </div>
                          <div className='content'>
                            <blockquote>
                              <q>{testimonial.quote}</q>
                            </blockquote>
                          </div>
                          <div className='author-info'>
                            <div className='author-thumb'>
                              <img
                                src={testimonial.avatar}
                                alt='Image_inner'
                              />
                            </div>
                            <div className='author-content'>
                              <h6>{testimonial.name}</h6>
                              <p>{testimonial.role}</p>
                            </div>
                          </div>
                          <div className='quote'>
                            <img
                              src='assets/images/quote.png'
                              alt='Image_inner'
                            />
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
              aria-label='prev testimonial'
              title='Testimoni sebelumnya'
              className='prev-testimonial slider-btn'
            >
              <i className='fa-solid fa-arrow-left' />
            </button>
            <button
              onClick={() => sliderRef.current.slickNext()}
              type='button'
              aria-label='next testimonial'
              title='Testimoni selanjutnya'
              className='next-testimonial slider-btn slider-btn-next'
            >
              <i className='fa-solid fa-arrow-right' />
            </button>
          </div>
        </div>
        <div
          className='shape'
          data-aos='fade-right'
          data-aos-duration={1000}
          data-aos-delay={200}
        >
          <img
            src='assets/images/community/shape.png'
            alt='Image_inner'
            className='base-img'
          />
        </div>
      </section>
    </>
  );
};

export default TestimonialOne;
