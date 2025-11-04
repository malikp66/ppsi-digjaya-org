import Link from "next/link";

const CommunityTwo = () => {
  return (
    <section className='community fc-community'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-12'>
            <div
              className='community-donation'
              data-aos='fade-up'
              data-aos-duration={1000}
            >
              <div className='community-donation__inner'>
                <div className='row gutter-30 align-items-center'>
                  <div className='col-12 col-md-8 col-xl-8'>
                    <div className='section__header mb-0'>
                      <span className='sub-title'>
                        Kami selalu siap mendampingi generasi muda
                      </span>
                      <h2 className='title-animation_inner mt-0 hb'>
                        Dukungan dana makan untuk warga yang membutuhkan
                      </h2>
                    </div>
                  </div>
                  <div className='col-12 col-md-4 col-xl-4'>
                    <div className='text-start text-xl-end'>
                      <span className='tag-c'>Donasi Sekarang Dukungan 24/7</span>
                    </div>
                  </div>
                </div>
                <div className='donation-form mt-60'>
                  <div className='donation-form__single'>
                    <div className='donation-form__single-intro'>
                      <p className='text-xl fw-6'>Rp120.000.000 Terkumpul</p>
                      <p className='text-xl fw-6'>Rp160.000.000 Target</p>
                    </div>
                    <div className='cause__progress progress-bar-single'>
                      <span className='percent-value pcr text-xl fw-7'>
                        56%
                      </span>
                      <div className='cause-progress__bar'>
                        <div
                          className='progress-bar-wrapper'
                          data-percent='56%'
                        >
                          <div className='progress-bar'>
                            <div
                              className='progress-bar-percent'
                              style={{ width: "56%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='made-amount mt-60'>
                      <span className='donation-amount'>Rp250.000</span>
                      <span className='donation-amount'>Rp500.000</span>
                      <span className='donation-amount'>Rp1.000.000</span>
                      <span className='donation-amount'>Rp2.000.000</span>
                      <span className='donation-amount'>Rp5.000.000</span>
                      <span className='donation-amount custom-amount'>
                        Nominal Lain
                      </span>
                    </div>
                  </div>
                  <div className='mt-60'>
                    <Link
                      href='/donate-us'
                      aria-label='donasi ppsi digjaya'
                      title='Donasi PPSI Digjaya'
                      className='btn--primary'
                    >
                      Donasi Sekarang <i className='icon-heart' />
                    </Link>
                  </div>
                </div>
                <div className='unity'>
                  <img src='assets/images/unit.png' alt='Image_inner' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='parasuit'>
        <img src='assets/images/parasuit.png' alt='Image_inner' />
      </div> */}
      {/* <div className='spade'>
        <img src='assets/images/fc-twelve.png' alt='Image_inner' />
      </div> */}
      <span className='dn-now'>Donasi Sekarang</span>
    </section>
  );
};

export default CommunityTwo;
