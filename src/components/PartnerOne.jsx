"use client";
import Slider from "@/components/ClientSlider";
import OptimizedImage from "@/components/common/OptimizedImage";

const PartnerOne = () => {
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
              <Slider {...settings} className="swiper-wrapper">
                {/* ONE -> asix.id */}
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

                {/* TWO -> xapiens.id */}
                <div className="swiper-slide">
                  <div className="partner__slider-single">
                    <a
                      href="https://xapiens.id/id"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <OptimizedImage
                        src="/assets/images/sponsor/two.png"
                        alt="Image_inner"
                      />
                    </a>
                  </div>
                </div>

                {/* THREE -> vnt.co.id */}
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

                {/* FOUR (tanpa link, tetap seperti semula) */}
                <div className="swiper-slide">
                  <div className="partner__slider-single">
                    <OptimizedImage
                      src="/assets/images/sponsor/four.png"
                      alt="Image_inner"
                    />
                  </div>
                </div>

                {/* FIVE (tanpa link, tetap seperti semula) */}
                <div className="swiper-slide">
                  <div className="partner__slider-single">
                    <OptimizedImage
                      src="/assets/images/sponsor/five.png"
                      alt="Image_inner"
                    />
                  </div>
                </div>

                {/* Duplikat ONE */}
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

                {/* Duplikat TWO */}
                <div className="swiper-slide">
                  <div className="partner__slider-single">
                    <a
                      href="https://xapiens.id/id"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <OptimizedImage
                        src="/assets/images/sponsor/two.png"
                        alt="Image_inner"
                      />
                    </a>
                  </div>
                </div>

                {/* Duplikat THREE */}
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

                {/* Duplikat FOUR */}
                <div className="swiper-slide">
                  <div className="partner__slider-single">
                    <OptimizedImage
                      src="/assets/images/sponsor/four.png"
                      alt="Image_inner"
                    />
                  </div>
                </div>

                {/* Duplikat FIVE */}
                <div className="swiper-slide">
                  <div className="partner__slider-single">
                    <OptimizedImage
                      src="/assets/images/sponsor/five.png"
                      alt="Image_inner"
                    />
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerOne;
