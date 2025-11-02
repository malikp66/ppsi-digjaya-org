import Link from "next/link";

const CauseTwo = () => {
  return (
    <section className='cause fc-cause pt-120 pb-120'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-12 col-md-8 col-xl-7'>
            <div className='section__header text-center'>
              <span className='sub-title'>
                Persatuan Pencak Silat Indonesia (PPSI) – Jawa Barat
              </span>
              <h2 className='title-animation_inner mt-0'>
                Program & Kegiatan Terbaru
              </h2>
            </div>
          </div>
        </div>

        <div className='row gutter-30 mt-60'>
          {/* 1. Dana Sosial Anggota */}
          <div className='col-12 col-lg-6 col-xl-4'>
            <div className='cause__slider-single'>
              <div className='thumb'>
                <Link href='/cause-details'>
                  <img src='assets/images/cause/eight.png' alt='dana sosial anggota ppsi' />
                </Link>
                <div className='tag'>
                  <Link href='/cause-details'>Dana Sosial</Link>
                </div>
              </div>
              <div className='content'>
                <h6 className='fw-7'>
                  <Link href='/cause-details'>
                    Dukungan Dana Sosial untuk Anggota & Pelatih
                  </Link>
                </h6>
                <p>
                  Bantuan bagi anggota, pelatih, atau atlet PPSI yang sedang membutuhkan
                  dukungan kesejahteraan.
                </p>
              </div>
              <div className='cause__slider-cta'>
                <div className='cause__progress progress-bar-single'>
                  <div className='cause-progress__intro'>
                    <p>
                      <span className='raised'>Rp 70.000.000</span> terkumpul dari{" "}
                      <span className='goal'>Rp 100.000.000</span>
                      <span className='percent-value'>70%</span>
                    </p>
                  </div>
                  <div className='cause-progress__bar'>
                    <div className='progress-bar-wrapper' data-percent='70%'>
                      <div className='progress-bar'>
                        <div
                          className='progress-bar-percent'
                          style={{ width: "70%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='cause__cta'>
                  <Link
                    href='/donate-us'
                    aria-label='dukung sekarang'
                    title='Dukung sekarang'
                    className='btn--secondary'
                  >
                    Dukung Sekarang
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Pembinaan & Pasanggiri */}
          <div className='col-12 col-lg-6 col-xl-4'>
            <div className='cause__slider-single'>
              <div className='thumb'>
                <Link href='/cause-details'>
                  <img src='assets/images/cause/nine.png' alt='pembinaan atlet ppsi' />
                </Link>
                <div className='tag'>
                  <Link href='/cause-details'>Pembinaan</Link>
                </div>
              </div>
              <div className='content'>
                <h6>
                  <Link href='/cause-details'>
                    Pembinaan Atlet & Pasanggiri Pencak Silat
                  </Link>
                </h6>
                <p>
                  Peningkatan kualitas latihan, teknik jurus, dan etika pesilat untuk
                  mengikuti event PPSI tingkat Jawa Barat.
                </p>
              </div>
              <div className='cause__slider-cta'>
                <div className='cause__progress progress-bar-single'>
                  <div className='cause-progress__intro'>
                    <p>
                      <span className='raised'>Rp 80.000.000</span> terkumpul dari{" "}
                      <span className='goal'>Rp 100.000.000</span>
                      <span className='percent-value'>80%</span>
                    </p>
                  </div>
                  <div className='cause-progress__bar'>
                    <div className='progress-bar-wrapper' data-percent='80%'>
                      <div className='progress-bar'>
                        <div
                          className='progress-bar-percent'
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='cause__cta'>
                  <Link
                    href='/donate-us'
                    aria-label='dukung sekarang'
                    title='Dukung sekarang'
                    className='btn--secondary'
                  >
                    Dukung Sekarang
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Digitalisasi Sertifikat & Keanggotaan */}
          <div className='col-12 col-lg-6 col-xl-4'>
            <div className='cause__slider-single'>
              <div className='thumb'>
                <Link href='/cause-details'>
                  <img src='assets/images/cause/ten.png' alt='digitalisasi sertifikat ppsi' />
                </Link>
                <div className='tag'>
                  <Link href='/cause-details'>Administrasi</Link>
                </div>
              </div>
              <div className='content'>
                <h6>
                  <Link href='/cause-details'>
                    Digitalisasi Sertifikat, Arsip & Keanggotaan PPSI
                  </Link>
                </h6>
                <p>
                  Pencatatan kenaikan sabuk, lisensi pelatih, dan keanggotaan secara online
                  agar mudah diverifikasi.
                </p>
              </div>
              <div className='cause__slider-cta'>
                <div className='cause__progress progress-bar-single'>
                  <div className='cause-progress__intro'>
                    <p>
                      <span className='raised'>Rp 90.000.000</span> terkumpul dari{" "}
                      <span className='goal'>Rp 100.000.000</span>
                      <span className='percent-value'>90%</span>
                    </p>
                  </div>
                  <div className='cause-progress__bar'>
                    <div className='progress-bar-wrapper' data-percent='90%'>
                      <div className='progress-bar'>
                        <div
                          className='progress-bar-percent'
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='cause__cta'>
                  <Link
                    href='/donate-us'
                    aria-label='dukung sekarang'
                    title='Dukung sekarang'
                    className='btn--secondary'
                  >
                    Dukung Sekarang
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CauseTwo;
