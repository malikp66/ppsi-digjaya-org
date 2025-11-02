"use client";
import { useRef } from "react";
import Slider from "@/components/ClientSlider";
import ProgressBar from "../helper/ProgressBar";
import Link from "next/link";
import { danaSosialPrograms } from "@/data/programs";

const CauseSliderThree = () => {
  const sliderRef = useRef(null);
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className='cause cause-three'>
      <div className='container'>
        <div className='row gutter-30 align-items-center'>
          <div className='col-12 col-md-8'>
            <div className='section__header'>
              <span className='sub-title'>
                <i className='icon-donation' />
                Program Dana Sosial Unggulan
              </span>
              <h2 className='title-animation_inner'>
                Dukung <span>atlet</span> dan pelatih tradisi Jawa Barat
              </h2>
            </div>
          </div>
          <div className='col-12 col-md-4'>
            <div className='slider-navigation'>
              <button
                type='button'
                onClick={() => sliderRef.current.slickPrev()}
                aria-label='prev program'
                className='prev-cause slider-btn'
              >
                <i className='fa-solid fa-arrow-left' />
              </button>
              <button
                type='button'
                onClick={() => sliderRef.current.slickNext()}
                aria-label='next program'
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
                <Slider {...settings} ref={sliderRef} className='swiper-wrapper'>
                  {danaSosialPrograms.map((program, index) => (
                    <div className='swiper-slide' key={program.id}>
                      <div className='cause__slider-inner'>
                        <div className='cause__slider-single'>
                          <div className='thumb'>
                            <Link href='/donate-us'>
                              <img src={`/assets/images/cause/${index + 1}.png`} alt='Image_inner' />
                            </Link>
                            <div className='tag'>
                              <Link href='/donate-us'>Dana Sosial</Link>
                            </div>
                          </div>
                          <div className='content'>
                            <h6>
                              <Link href='/donate-us'>{program.title}</Link>
                            </h6>
                            <p>{program.description}</p>
                          </div>
                          <div className='cause__slider-cta'>
                            <div className='cause__progress progress-bar-single'>
                              <ProgressBar percent={program.progress} />
                              <div className='cause-progress__goal'>
                                <p>
                                  Target: <span className='goal'>{program.target}</span>
                                </p>
                              </div>
                            </div>
                            <div className='cause__cta'>
                              <Link href='/donate-us' className='btn--secondary'>
                                Salurkan Dana
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
      {/* <div className='spade'>
        <img src='/assets/images/help/spade.png' alt='Image_inner' />
      </div> */}
    </section>
  );
};

export default CauseSliderThree;
