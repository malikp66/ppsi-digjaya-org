"use client";
import Link from "next/link";
import { useState } from "react";

const CommunityOne = () => {
  let [amount, setAmount] = useState(500000);
  return (
    <>
      <section className='community'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-8 col-xl-7'>
              <div
                className='section__header'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                <span className='sub-title'>
                  <i className='icon-donation' />
                  Dana Sosial &amp; Dukungan Atlet
                </span>
                <h2 className='title-animation_inner'>
                  Salurkan <span>dana sosial</span> untuk atlet &amp; pelatih
                </h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
              <div
                className='community-donation'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                <div className='community-donation__inner'>
                  <h4>Dukungan Dana Sosial PPSI Digjaya</h4>
                  <div className='warning'>
                    <div className='line'>
                      <i className='fa-solid fa-triangle-exclamation' />
                    </div>
                    <p>
                      <strong>Informasi:</strong> Form ini simulasi frontend.
                      Transaksi riil dilakukan melalui sekretariat PPSI Digjaya.
                    </p>
                  </div>
                  <div className='donation-form'>
                    <div className='donation-form__single'>
                      <h5>Nominal Kontribusi (Rp)</h5>
                      <div className='input-group-icon'>
                        <div className='thumb'>
                          <i className='fa-solid fa-dollar-sign' />
                        </div>
                        <input
                          type='number'
                          name='donation-amount'
                          id='donationAmount'
                          value={amount}
                          onChange={(e) => setAmount(Number(e.target.value))}
                        />
                      </div>
                      <div className='made-amount'>
                        <span
                          className={`donation-amount ${
                            amount === 250000 && "active"
                          }`}
                          onClick={() => setAmount(250000)}
                        >
                          250K
                        </span>
                        <span
                          className={`donation-amount ${
                            amount === 500000 && "active"
                          }`}
                          onClick={() => setAmount(500000)}
                        >
                          500K
                        </span>
                        <span
                          className={`donation-amount ${
                            amount === 1000000 && "active"
                          }`}
                          onClick={() => setAmount(1000000)}
                        >
                          1Jt
                        </span>
                        <span
                          className={`donation-amount ${
                            amount === 2000000 && "active"
                          }`}
                          onClick={() => setAmount(2000000)}
                        >
                          2Jt
                        </span>
                        <span
                          className={`donation-amount custom-amount ${
                            amount === 0 && "active"
                          }`}
                          onClick={() => setAmount(0)}
                        >
                          Custom
                        </span>
                      </div>
                    </div>
                    <div className='donation-form__single'>
                      <h5>Pilih Skema Dukungan</h5>
                      <div className='radio-wrapper'>
                        <div className='radio-single'>
                          <input
                            type='radio'
                            id='bankDonation'
                            name='donation-payment'
                            defaultChecked=''
                          />
                          <label htmlFor='bankDonation'>Transfer Bank PPSI</label>
                        </div>
                        <div className='radio-single'>
                          <input
                            type='radio'
                            id='membershipDonation'
                            name='donation-payment'
                            defaultChecked=''
                          />
                          <label htmlFor='membershipDonation'>
                            Iuran Perguruan
                          </label>
                        </div>
                        <div className='radio-single'>
                          <input
                            type='radio'
                            id='sponsorDonation'
                            name='donation-payment'
                            defaultChecked=''
                          />
                          <label htmlFor='sponsorDonation'>
                            Sponsor Korporasi
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className='cta'>
                      <Link
                        href='/donate-us'
                        aria-label='dana sosial ppsi digjaya'
                        title='Dana Sosial PPSI Digjaya'
                        className='btn--primary'
                      >
                        Salurkan Dana Sosial{" "}
                        <i className='fa-solid fa-arrow-right' />
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className='community__thumb d-none d-lg-block'
                  data-aos='fade-left'
                  data-aos-duration={1000}
                >
                  <img
                    src='/assets/images/community/thumb.png'
                    alt='Image_inner'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='community-bg'>
          <img
            src='/assets/images/community/community-bg.png'
            alt='Image_inner'
          />
        </div>
        <div
          className='gift'
          data-aos='fade-up'
          data-aos-duration={1000}
          data-aos-delay={200}
        >
          <img src='/assets/images/community/gift.png' alt='Image_inner' />
        </div>
        <div className='spade'>
          <img
            src='/assets/images/community/spade.png'
            alt='Image_inner'
            className='base-img'
          />
        </div>
      </section>
    </>
  );
};

export default CommunityOne;
