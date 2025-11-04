import Link from "next/link";

const TeamDetailsInner = () => {
  return (
    <section className='team-details'>
      <div className='container'>
        <div className='row gutter-40 align-items-center'>
          <div className='col-12 col-lg-6 col-xl-5'>
            <div
              className='team-details__thumb'
              data-aos='zoom-in'
              data-aos-duration={1000}
            >
              <img src='assets/images/team/thumb.png' alt='Image_inner' />
            </div>
          </div>
          <div className='col-12 col-lg-6 col-xl-7'>
            <div
              className='team-details__content'
              data-aos='fade-up'
              data-aos-duration={1000}
              data-aos-delay={100}
            >
              <div className='team-details__meta'>
                <h4 className='title-animation_inner'>Raka Permana</h4>
                <p className='designation'>Relawan PPSI</p>
                <div className='social'>
                  <a
                    href='https://www.facebook.com/'
                    target='_blank'
                    aria-label='bagikan di Facebook'
                    title='Facebook'
                    rel='noreferrer'
                  >
                    <i className='fa-brands fa-facebook-f' />
                  </a>
                  <a
                    href='https://vimeo.com/'
                    target='_blank'
                    aria-label='bagikan di Vimeo'
                    title='Vimeo'
                    rel='noreferrer'
                  >
                    <i className='fa-brands fa-vimeo-v' />
                  </a>
                  <a
                    href='https://x.com/'
                    target='_blank'
                    aria-label='bagikan di X'
                    title='X'
                    rel='noreferrer'
                  >
                    <i className='fa-brands fa-twitter' />
                  </a>
                  <a
                    href='https://www.linkedin.com/'
                    target='_blank'
                    aria-label='bagikan di LinkedIn'
                    title='LinkedIn'
                    rel='noreferrer'
                  >
                    <i className='fa-brands fa-linkedin-in' />
                  </a>
                </div>
                <p>
                  Raka memimpin program sosial PPSI Digjaya wilayah Priangan,
                  memadukan pelatihan pencak silat dengan pemberdayaan ekonomi
                  dan literasi bagi anggota perguruan.
                </p>
              </div>
              <div className='my-word'>
                <h5>Saya membantu perguruan bersinar, dan bersama kami bertumbuh.</h5>
              </div>
              <div className='progress-wrapper'>
                <div className='cause__progress progress-bar-single'>
                  <div className='cause-progress__bar'>
                    <p>Donasi Terkumpul</p>
                    <div className='progress-bar-wrapper' data-percent='70%'>
                      <div className='progress-bar'>
                        <div
                          className='progress-bar-percent'
                          style={{ width: "70%" }}
                        >
                          <span className='percent-value'>70%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='cause__progress progress-bar-single'>
                  <div className='cause-progress__bar'>
                    <p>Kegiatan Sukses</p>
                    <div className='progress-bar-wrapper' data-percent='85%'>
                      <div className='progress-bar'>
                        <div
                          className='progress-bar-percent'
                          style={{ width: "85%" }}
                        >
                          <span className='percent-value'>85%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='team-details__list'>
                <ul>
                  <li>
                    <i className='icon-circle-check' />
                    Layanan pelatihan berkualitas
                  </li>
                  <li>
                    <i className='icon-circle-check' />
                    Efisien waktu dan sumber daya
                  </li>
                  <li>
                    <i className='icon-circle-check' />
                    Tepat waktu dalam setiap program
                  </li>
                  <li>
                    <i className='icon-circle-check' />
                    Pendampingan anggota 24/7
                  </li>
                </ul>
              </div>
              <div className='team-details__cta cta'>
                <Link
                  href='/donate-us'
                  aria-label='donasi bersama relawan'
                  title='Donasi Bersama Relawan'
                  className='btn--primary'
                >
                  {" "}
                  Donasi Bersama Saya <i className='fa-solid fa-arrow-right' />
                </Link>
              </div>
            </div>
          </div>
          <div className='col-12'>
            <div
              className='about-me'
              data-aos='fade-up'
              data-aos-duration={1000}
              data-aos-delay={100}
            >
              <h4 className='title-animation_inner'>Tentang Saya</h4>
              <p>
                Sebagai koordinator relawan, Raka menjembatani kebutuhan sosial
                perguruan dengan dukungan donatur dan mitra. Ia mengatur jadwal
                bakti sosial, merancang modul pelatihan karakter, serta menjaga
                kedisiplinan kegiatan lintas kota agar nilai luhur PPSI tetap
                hidup di generasi muda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamDetailsInner;
