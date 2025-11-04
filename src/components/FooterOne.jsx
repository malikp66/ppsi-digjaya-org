import Link from "next/link";
import OptimizedImage from "@/components/common/OptimizedImage";

const FooterOne = () => {
  return (
    <>
      <footer className='footer-two'>
        <div className='container'>
          <div className='row align-items-center gutter-30'>
            <div className='col-12 col-lg-7 col-xxl-6'>
              <div className='footer-two__newsletter-content'>
                <h3 className='title-animation_inner'>
                  Berlangganan Warta PPSI Digjaya
                </h3>
                <p>Dapatkan kabar pelestarian pencak silat, agenda, dan program anggota.</p>
              </div>
            </div>
            <div className='col-12 col-lg-5 col-xxl-5 offset-xxl-1'>
              <div className='footer-two__newsletter-form'>
                <form action='#' method='post'>
                  <input
                    type='email'
                    required=''
                    name='subscribe-email'
                    id='subscribeEmail'
                    placeholder='Masukkan Email'
                  />
                  <button
                    type='submit'
                    aria-label='subscribe to our newsletter'
                    title='subscribe to our newsletter'
                    className='btn--primary'
                  >
                    {" "}
                    <i className='fa-solid fa-paper-plane' />
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
              <hr className='divider' />
            </div>
          </div>
          <div className='row gutter-60'>
            <div className='col-12 col-md-6 col-xl-3'>
              <div
                className='footer-two__widget'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                <div className='footer-two__widget-logo'>
                  <Link href='/'>
                    <OptimizedImage src="/assets/images/logo-light.png" style={{ maxWidth: "100px" }} alt="Image_inner" />
                  </Link>
                </div>
                <div className='footer-two__widget-content'>
                  <p>
                    PPSI Digjaya menguatkan ekosistem pencak silat tradisi melalui pembinaan,
                    sinergi perguruan, dan dukungan ekonomi-kerakyatan bagi atlet serta pelatih.
                  </p>
                  <div className='social'>
                    <Link
                      href='https://www.facebook.com'
                      target='_blank'
                      aria-label='share us on facebook'
                      title='facebook'
                    >
                      <i className='fa-brands fa-facebook-f' />
                    </Link>
                    <Link
                      href='https://vimeo.com'
                      target='_blank'
                      aria-label='share us on vimeo'
                      title='vimeo'
                    >
                      <i className='fa-brands fa-vimeo-v' />
                    </Link>
                    <Link
                      href='https://x.com'
                      target='_blank'
                      aria-label='share us on twitter'
                      title='twitter'
                    >
                      <i className='fa-brands fa-twitter' />
                    </Link>
                    <Link
                      href='https://www.linkedin.com'
                      target='_blank'
                      aria-label='share us on linkedin'
                      title='linkedin'
                    >
                      <i className='fa-brands fa-linkedin-in' />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-6 col-xl-2 offset-xl-1'>
              <div
                className='footer-two__widget'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={200}
              >
                <div className='footer-two__widget-intro'>
                  <h5>Quick Links</h5>
                  <div className='line'>
                    <span className='large-line' />
                    <span className='small-line' />
                    <span className='small-line' />
                  </div>
                </div>
                <div className='footer-two__widget-content'>
                  <ul>
                    <li>
                      <Link href='/'>
                        <i className='fa-solid fa-arrow-right' />
                        Beranda
                      </Link>
                    </li>
                    <li>
                      <Link href='/about-us'>
                        <i className='fa-solid fa-arrow-right' />
                        Tentang PPSI
                      </Link>
                    </li>
                    <li>
                      <Link href='/keanggotaan'>
                        <i className='fa-solid fa-arrow-right' />
                        Keanggotaan
                      </Link>
                    </li>
                    <li>
                      <Link href='/pelestarian-budaya'>
                        <i className='fa-solid fa-arrow-right' />
                        Pelestarian Budaya
                      </Link>
                    </li>
                    <li>
                      <Link href='/events'>
                        <i className='fa-solid fa-arrow-right' />
                        Kalender Budaya
                      </Link>
                    </li>
                    <li>
                      <Link href='/contact-us'>
                        <i className='fa-solid fa-arrow-right' />
                        Kontak &amp; Aspirasi
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-6 col-xl-3'>
              <div
                className='footer-two__widget footer-two__widget--alternate'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={400}
              >
                <div className='footer-two__widget-intro'>
                  <h5>Program Prioritas</h5>
                  <div className='line'>
                    <span className='large-line' />
                    <span className='small-line' />
                    <span className='small-line' />
                  </div>
                </div>
                <div className='footer-two__widget-content'>
                  <ul>
                    <li>
                      <Link href='/our-causes'>
                        <i className='fa-solid fa-arrow-right' />
                        Program &amp; Kegiatan PPSI
                      </Link>
                    </li>
                    <li>
                      <Link href='/donate-us'>
                        <i className='fa-solid fa-arrow-right' />
                        Dana Sosial &amp; Dukungan Atlet
                      </Link>
                    </li>
                    <li>
                      <Link href='/pelatihan-atlet'>
                        <i className='fa-solid fa-arrow-right' />
                        Pelatihan &amp; Atlet
                      </Link>
                    </li>
                    <li>
                      <Link href='/shop'>
                        <i className='fa-solid fa-arrow-right' />
                        Marketplace Anggota
                      </Link>
                    </li>
                    <li>
                      <Link href='/sertifikat-online'>
                        <i className='fa-solid fa-arrow-right' />
                        Sertifikat Online
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-6 col-xl-3'>
              <div
                className='footer-two__widget footer-two__widget--alternate'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={600}
              >
                <div className='footer-two__widget-intro'>
                  <h5>Hubungi Kami</h5>
                  <div className='line'>
                    <span className='large-line' />
                    <span className='small-line' />
                    <span className='small-line' />
                  </div>
                </div>
                <div className='footer-two__widget-content footer-two__widget-content--contact'>
                  <ul>
                    <li>
                      <Link
                        href='https://maps.app.goo.gl/Gr9pTNqz5FRNrjQw8'
                        target='_blank'
                      >
                        <i className='fa-solid fa-location-dot' />
                        Jl. Cijagra III No. 12, Turangga, Lengkong, Kota Bandung
                      </Link>
                    </li>
                    <li>
                      <Link href='tel:6282129251959'>
                        <i className='fa-solid fa-phone' />
                        0821-2925-1959
                      </Link>
                    </li>
                    <li>
                      <Link href='mailto:dpdppsikotabandungofficial@gmail.com'>
                        <i className='fa-regular fa-envelope' />
                        dpdppsikotabandungofficial@gmail.com
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='footer-two__copyright'>
          <div className='container'>
            <div className='row align-items-center gutter-12'>
              <div className='col-12 col-lg-6'>
                <div className='footer-two__copyright-inner text-center text-lg-start'>
                  <p>
                    Copyright © <span id='copyrightYear' />{" "}
                    <Link href='/'>PPSI Digjaya</Link>. Hak cipta dilindungi.
                  </p>
                </div>
              </div>
              <div className='col-12 col-lg-6'>
                <div className='footer__bottom-left'>
                  <ul className='footer__bottom-list justify-content-center justify-content-lg-end'>
                    <li>
                      <Link href='/about-us'>Pedoman Organisasi</Link>
                    </li>
                    <li>
                      <Link href='/faq'>Kode Etik &amp; FAQ</Link>
                    </li>
                    <li>
                      <Link href='/contact-us'>Kontak Dukungan</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='sprade' data-aos='zoom-in' data-aos-duration={1000}>
          <OptimizedImage
            src='assets/images/sprade.png'
            alt='Image_inner'
            className='base-img'
          />
        </div> */}
        {/* <div
          className='sprade-light'
          data-aos='zoom-in'
          data-aos-duration={1000}
        >
          <OptimizedImage src='assets/images/sprade-light.png' alt='Image_inner' />
        </div> */}
      </footer>
    </>
  );
};

export default FooterOne;
