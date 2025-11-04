"use client";

import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
import OptimizedImage from "@/components/common/OptimizedImage";
const CommunityThree = () => {
  return (
    <section className='ff-community counter-four commit pb-120'>
      <div className='container'>
        <div className='row gutter-40 align-items-center'>
          <div className='col-12 col-xl-6'>
            <div className='ff-community__content'>
              <div
                className='section__header mb-0'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                <span className='sub-title'>
                  Kami selalu terbuka untuk generasi muda
                </span>
                <h2 className='title-animation_inner fw-6 mt-0'>
                  Saling membantu membuat dunia lebih baik
                </h2>
                <p className='mt-20 text-gr mx-0'>
                  Program relawan PPSI membuka peluang mengasah kepemimpinan,
                  komunikasi, serta manajemen kegiatan budaya di setiap
                  perguruan.
                </p>
              </div>
              <div className='counter-four__content mt-20'>
                <h3 className='hb cnt'>
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span className='odometer fw-8'>
                          <CountUp delay={0} start={0} end={154859} />
                          <span className='prefix txt-base'>+</span>
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h3>
                <p className='text-xl fw-5 text-gr mt-10'>
                  Bergabunglah dengan mereka yang sudah mendukung misi kami
                </p>
              </div>
              <div className='commmit-tab-single mt-40'>
                <div className='commit-tab-inner'>
                  <div className='thumb'>
                    <i className='icon-donation' />
                  </div>
                  <div className='content'>
                    <p className='text-lg fw-7'>Organisasi terpercaya</p>
                    <p>Transparansi dana dan laporan rutin untuk seluruh anggota.</p>
                  </div>
                </div>
                <span className='divider d-none d-xxl-block' />
                <div className='commit-tab-inner'>
                  <div className='thumb'>
                    <i className='icon-award' />
                  </div>
                  <div className='content'>
                    <p className='text-lg fw-7'>Layanan berpenghargaan</p>
                    <p>Program pelestarian dan sosial diakui pemerintah daerah.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 col-xl-5 offset-xl-1'>
            <div className='ff-community__thumb'>
              <div className='tc-one'>
                <h3 className='fw-6'>12 juta+</h3>
                <p className='mt-10 txt-lg'>
                  Hidup generasi muda berubah berkat dukungan Anda
                </p>
              </div>
              <div className='tc-wrapper mt-60'>
                <div className='tc-two'>
                  <h5 className='fw-6'>Pendampingan</h5>
                  <p className='mt-10'>Dapatkan dukungan ahli dengan mudah.</p>
                </div>
                <div className='tc-three'>
                  <h3 className='fw-7'>
                    35+ <br />
                    Proyek
                  </h3>
                  <p className='mt-10'>
                    Relawan PPSI membina kelas silat, wirausaha, dan bakti sosial lintas daerah.
                  </p>
                  <OptimizedImage src='assets/images/line.png' alt='Image_inner' />
                </div>
              </div>
              <OptimizedImage src='assets/images/dot.png' alt='Image_inner' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityThree;
