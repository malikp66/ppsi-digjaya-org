"use client";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import OptimizedImage from "@/components/common/OptimizedImage";

const DonationFutureOne = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {" "}
      <section className='donation-future'>
        <div className='container'>
          <div className='row gutter-40'>
            <div className='col-12 col-lg-6 col-xl-7'>
              <div className='donation-future__content'>
                <div
                  className='section__content'
                  data-aos='fade-up'
                  data-aos-duration={1000}
                >
                  <span className='sub-title'>
                    <i className='icon-donation' />
                    Mulai berdonasi untuk masyarakat rentan
                  </span>
                  <h2 className='title-animation_inner'>
                    Membangun <span>masa depan</span> lebih baik lewat donasi
                  </h2>
                  <div className='video-btn-wrapper'>
                    <button
                      onClick={() => setIsOpen(true)}
                      className='open-video-popup'
                    >
                      <i className='icon-play' />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-lg-6 col-xl-5'>
              <div
                className='donation-future__thumb'
                style={{
                  backgroundImage: "url(/assets/images/donation/thumb-bg.png)",
                }}
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={300}
              >
                <h4>Dukungan biaya konsumsi</h4>
                <div className='cause__progress progress-bar-single'>
                  <div className='cause-progress__bar'>
                    <div className='progress-bar-wrapper' data-percent='60%'>
                      <div className='progress-bar'>
                        <div
                          className='progress-bar-percent'
                          style={{ width: "60%" }}
                        >
                          <span className='percent-value' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='cause-progress__goal'>
                  <p>
                    Terkumpul: <span className='raised'>Rp85.000.000</span>
                  </p>
                  <p>
                    Target: <span className='goal'>Rp150.000.000</span>
                  </p>
                </div>
                <hr />
                <div className='made-amount'>
                  <span className='donation-amount'>Rp250.000</span>
                  <span className='donation-amount'>Rp500.000</span>
                  <span className='donation-amount active'>Rp1.000.000</span>
                  <span className='donation-amount'>Rp2.000.000</span>
                  <span className='donation-amount'>Rp5.000.000</span>
                </div>
                <div className='cta'>
                  <Link
                    href='/donate-us'
                    className='btn--primary'
                    aria-label='donasi sekarang'
                    title='Donasi Sekarang'
                  >
                    Donasi Sekarang <i className='icon-heart' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='donation-bg'>
          <OptimizedImage
            src='/assets/images/donation/bg.png'
            alt='Image_inner'
            className='parallax-image'
          />
          <OptimizedImage
            src='/assets/images/donation/shape.png'
            alt='Image_inner'
            className='shape'
          />
        </div> */}
      </section>
      <ModalVideo
        channel='youtube'
        autoplay
        isOpen={isOpen}
        videoId='XxVg_s8xAms'
        onClose={() => setIsOpen(false)}
        allowFullScreen
      />
    </>
  );
};

export default DonationFutureOne;
