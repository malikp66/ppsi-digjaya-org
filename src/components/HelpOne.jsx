"use client";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const HelpOne = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section className='help'>
        <div className='container'>
          <div className='row align-items-center gutter-40'>
            <div className='col-12 col-lg-5 col-xxl-6 d-none d-lg-block'>
              <div className='help__thumb'>
                <div className='help__thumb-inner'>
                  <div className='thumb-top thumb'>
                    <img
                      src='/assets/images/help/thumb-top.png'
                      alt='Image_inner'
                    />
                  </div>
                  <div
                    className='thumb-lg thumb'
                    data-aos='fade-left'
                    data-aos-duration={1000}
                  >
                    <img
                      src='/assets/images/help/thumb-lg.png'
                      alt='Image_inner'
                    />
                    <div className='video-btn-wrapper'>
                      <span
                        onClick={() => setIsOpen(true)}
                        className='open-video-popup'
                      >
                        <i className='icon-play' />
                      </span>
                    </div>
                  </div>
                  <div className='thumb thumb-bottom'>
                    <img
                      src='/assets/images/help/thumb-bottom.png'
                      alt='Image_inner'
                    />
                  </div>
                  <div className='line'>
                    <img src='/assets/images/help/line.png' alt='Image_inner' />
                  </div>
                  <div className='grid-line'>
                    <img
                      src='/assets/images/help/grid.png'
                      alt='Image_inner'
                      className='base-img'
                    />
                  </div>
                  <div className='vertical-text'>
                    <h5>
                      PPSI <span>Digjaya</span> Menjaga Tradisi{" "}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-lg-7 col-xxl-6'>
              <div className='help__content'>
                <span className='sub-title'>
                  <i className='icon-donation' />
                  Profil PPSI Digjaya
                </span>
                <h2 className='title-animation_inner'>
                  Pelestarian silat tradisi melalui <span>pembinaan</span> dan sinergi
                </h2>
                <p>
                  PPSI dibentuk 17 Agustus 1957 oleh Kol. R.A. Kosasi bersama para pendekar
                  Jawa Barat untuk mempersatukan perguruan dan menjaga keamanan masyarakat.
                  Kini DPW Jawa Barat terus memperkuat pelestarian budaya, pembinaan atlet,
                  dan pengembangan ekonomi anggota melalui jaringan perguruan di Kota Bandung.
                </p>
                <div className='help__content-icon-group'>
                  <div className='help__content-icon'>
                    <div className='thumb'>
                      <i className='icon-make-donation' />
                    </div>
                    <div className='content'>
                      <h6>Struktur Profesional</h6>
                      <p>Perencanaan, pelaksanaan, dan evaluasi organisasi yang akuntabel.</p>
                    </div>
                  </div>
                  <div className='help__content-icon'>
                    <div className='thumb'>
                      <i className='icon-support-heart' />
                    </div>
                    <div className='content'>
                      <h6>Pembinaan Berkarakter</h6>
                      <p>Disiplin, integritas, dan etika dijunjung dalam setiap pelatihan.</p>
                    </div>
                  </div>
                </div>
                <div className='help__content-list'>
                  <ul>
                    <li>
                      <i className='fa-solid fa-circle-check' /> Mendorong PPSI menjadi induk pencak
                      silat tradisi nasional bersama KORMI.
                    </li>
                    <li>
                      <i className='fa-solid fa-circle-check' /> Menyediakan wadah pasanggiri, festival,
                      dan kurikulum silat di sekolah.
                    </li>
                    <li>
                      <i className='fa-solid fa-circle-check' /> Menjaga identitas bangsa melalui regenerasi
                      pendekar dan pelatih muda.
                    </li>
                  </ul>
                </div>
                <div className='help__content-cta cta'>
                  <Link
                    href='/about-us'
                    aria-label='profil ppsi digjaya'
                    title='Profil PPSI Digjaya'
                    className='btn--primary'
                  >
                    Profil Organisasi
                  </Link>
                  <div className='contact-btn'>
                    <div className='contact-icon'>
                      <i className='icon-phone' />
                    </div>
                    <div className='contact-content'>
                      <p>Phone</p>
                      <a href='tel:6282129251959'>082129251959</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='hand'>
          <img src='/assets/images/help/hand.png' alt='Image_inner' />
        </div>
        <div className='parasuit'>
          <img src='/assets/images/parasuit.png' alt='Image_inner' />
        </div>
        <div className='spade'>
          <img src='/assets/images/help/spade.png' alt='Image_inner' />
        </div>

        <ModalVideo
          channel='youtube'
          autoplay
          isOpen={isOpen}
          videoId='XxVg_s8xAms'
          onClose={() => setIsOpen(false)}
          allowFullScreen
        />
      </section>
    </>
  );
};

export default HelpOne;
