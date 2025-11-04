import Link from "next/link";

const DifferenceThree = () => {
  return (
    <section className='difference-three'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-12 col-lg-5'>
            <div className='difference-three__thumb d-none d-lg-block'>
              <div className='difference-three__thumb-inner'>
                <div
                  className='thumb-lg'
                  data-aos='fade-right'
                  data-aos-duration={1000}
                >
                  <img
                    src='assets/images/difference/thumb-lg-two.png'
                    alt='Image_inner'
                  />
                </div>
                {/* <div className='spade'>
                  <img
                    src='assets/images/difference/spade.png'
                    alt='Image_inner'
                    className='base-img'
                  />
                </div> */}
                <div
                  className='thumb-sm'
                  data-aos='fade-up'
                  data-aos-duration={1000}
                  data-aos-delay={300}
                >
                  <img
                    src='assets/images/difference/thub-sm-two.png'
                    alt='Image_inner'
                  />
                </div>
                {/* <div className='line'>
                  <img
                    src='assets/images/difference/line.png'
                    alt='Image_inner'
                  />
                </div> */}
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-7'>
            <div className='difference-three__content'>
              <div className='section__content'>
                <span className='sub-title'>
                  <i className='icon-donation' />
                  PPSI Digjaya Menguatkan Tradisi
                </span>
                <h2 className='title-animation_inner'>
                  Dukung <span>PPSI</span> menjaga warisan dan prestasi
                </h2>
                <p>
                  Setiap kontribusi anggota dan mitra mendorong program
                  pelestarian budaya, pembinaan atlet, serta inovasi pengajaran
                  pencak silat yang relevan dengan generasi muda.
                </p>
              </div>
              <div className='differnce-quote'>
                <blockquote>
                  <q>
                    <span>Tradisi silat</span> tumbuh ketika komunitas bergerak
                    bersama menjaga nilai luhur dan solidaritas
                  </q>
                </blockquote>
              </div>
              <div className='help__content-list'>
                <ul>
                  <li>
                    <i className='fa-regular fa-circle-check' /> Penguatan
                    komunitas pesilat PPSI
                  </li>
                  <li>
                    <i className='fa-regular fa-circle-check' /> Pelatihan &
                    sertifikasi pelatih
                  </li>
                  <li>
                    <i className='fa-regular fa-circle-check' /> Dokumentasi
                    warisan budaya silat
                  </li>
                  <li>
                    <i className='fa-regular fa-circle-check' /> Pendampingan
                    atlet berprestasi
                  </li>
                  <li>
                    <i className='fa-regular fa-circle-check' /> Kolaborasi
                    dengan lembaga pendidikan
                  </li>
                  <li>
                    <i className='fa-regular fa-circle-check' /> Program sosial
                    berbasis kearifan lokal
                  </li>
                </ul>
              </div>
              <div className='difference-three-cta'>
                <Link
                  href='/about-us'
                  aria-label='tentang ppsi'
                  title='Tentang PPSI'
                  className='btn--primary'
                >
                  Tentang Kami <i className='fa-solid fa-arrow-right' />
                </Link>
                <div className='author-info'>
                  <div className='author-thumb'>
                    <img src='assets/images/author-two.png' alt='Image_inner' />
                  </div>
                  <div className='author-content'>
                    <span>Ketua Bidang Pelatihan</span>
                    <h6>Asep Kurniawan</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferenceThree;
