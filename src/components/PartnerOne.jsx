"use client";
import Slider from "@/components/ClientSlider";
import OptimizedImage from "@/components/common/OptimizedImage";

const PartnerOne = () => {
  // Slider settings (DISIMPAN, tapi sementara tidak dipakai)
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="partner">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="partner__slider swiper">
              {/* 
                SLIDER DIMATIKAN SEMENTARA
                Jika mau diaktifkan lagi, tinggal uncomment blok Slider di bawah
              */}

              {/*
              <Slider {...settings} className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="partner__slider-single">
                    <a
                      href="https://xapiens.id/id"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <OptimizedImage
                        src="/assets/images/sponsor/xapiens.svg"
                        alt="Image_inner"
                      />
                    </a>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="partner__slider-single">
                    <a
                      href="https://asix.id"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <OptimizedImage
                        src="/assets/images/sponsor/one.png"
                        alt="Image_inner"
                      />
                    </a>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="partner__slider-single">
                    <a
                      href="https://www.vnt.co.id/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <OptimizedImage
                        src="/assets/images/sponsor/three.png"
                        alt="Image_inner"
                      />
                    </a>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="partner__slider-single">
                    <OptimizedImage
                      src="/assets/images/sponsor/four.png"
                      alt="Image_inner"
                    />
                  </div>
                </div>
              </Slider>
              */}

              {/* STATIC LIST – TANPA SLIDESHOW & TANPA DUPLIKAT IMAGE */}
              <div className="partner__slider-static d-flex flex-wrap justify-content-center gap-4 md:gap-12">
                {/* xapiens.id */}
                <div className="partner__slider-single">
                  <a
                    href="https://xapiens.id/id"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <OptimizedImage
                      src="/assets/images/sponsor/xapiens.svg"
                      alt="Image_inner"
                    />
                  </a>
                </div>

                {/* asix.id */}
                <div className="partner__slider-single">
                  <a
                    href="https://asix.id"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <OptimizedImage
                      src="/assets/images/sponsor/one.jpeg"
                      alt="Image_inner"
                    />
                  </a>
                </div>

                {/* vnt.co.id */}
                <div className="partner__slider-single">
                  <a
                    href="https://www.vnt.co.id/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <OptimizedImage
                      src="/assets/images/sponsor/vnt.jpeg"
                      alt="Image_inner"
                    />
                  </a>
                </div>

              </div>
              {/* END STATIC LIST */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerOne;
