import Link from "next/link";
import OptimizedImage from "@/components/common/OptimizedImage";

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
                  <OptimizedImage
                    src='assets/images/difference/thumb-lg-two.png'
                    alt='Image_inner'
                  />
                </div>
                {/* elemen dekorasi opsional disembunyikan */}
              </div>
            </div>
          </div>

          <div className='col-12 col-lg-7'>
            <div className='difference-three__content'>
              <div className='section__content'>
                <span className='sub-title'>
                  <i className='icon-donation' />
                  Aplikasi PPSI Digjaya
                </span>
                <h2 className='title-animation_inner'>
                  Organisasi <span>PPSI</span> dalam genggaman
                </h2>
                <p>
                  Dengan <strong>PPSI Digjaya Mobile</strong>, perguruan,
                  pelatih, dan pesilat dapat registrasi, mengelola anggota,
                  melihat serta mendaftar jadwal kejuaraan, hingga menerbitkan
                  e-sertifikat—semua cepat, aman, dan terintegrasi.
                </p>
              </div>

              <div className='differnce-quote'>
                <blockquote>
                  <q>
                    <span>Teknologi</span> mendekatkan tradisi dengan generasi—
                    aplikasi memudahkan kita menjaga, berlatih, dan berprestasi.
                  </q>
                </blockquote>
              </div>

              <div className='help__content-list'>
                <ul>
                  <li>
                    <i className='fa-regular fa-circle-check' /> Registrasi &
                    verifikasi anggota digital
                  </li>
                  <li>
                    <i className='fa-regular fa-circle-check' /> Manajemen
                    event: pendaftaran, jadwal, hasil pertandingan
                  </li>
                  <li>
                    <i className='fa-regular fa-circle-check' /> Database
                    perguruan & kurikulum jurus (foto/video)
                  </li>
                  <li>
                    <i className='fa-regular fa-circle-check' /> E-sertifikat,
                    ranking, dan notifikasi real-time
                  </li>
                </ul>
              </div>

              <div className='difference-three-cta'>
                <Link
                  href='/app'
                  aria-label='aplikasi ppsi'
                  title='PPSI Digjaya App'
                  className='btn--primary'
                >
                  Coba Aplikasinya <i className='fa-solid fa-arrow-right' />
                </Link>

                <div className='author-info'>
                  <div className='author-thumb'>
                    <OptimizedImage
                      src='assets/images/author-two.png'
                      alt='Image_inner'
                    />
                  </div>
                  <div className='author-content'>
                    <span>Product Lead PPSI Digjaya</span>
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
