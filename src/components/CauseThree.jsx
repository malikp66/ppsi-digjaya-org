"use client";
import Link from "next/link";
import Slider from "@/components/ClientSlider";
import OptimizedImage from "@/components/common/OptimizedImage";

const CauseThree = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "10%",
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5,
          centerPadding: "10%",
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          centerPadding: "5%",
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          centerPadding: "7%",
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          centerPadding: "10%",
        },
      },
    ],
  };

  return (
    <section className='cause fc-cause ff-cause pt-120 pb-120'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-12 col-md-8 col-xl-7'>
            <div className='section__header text-center'>
              <span className='sub-title'>
                PPSI Digjaya – Jawa Barat
              </span>
              <h2 className='title-animation_inner mt-0 text-black'>
                Program & Kegiatan Terbaru
              </h2>
            </div>
          </div>
        </div>
        <div className='row gutter-30 mt-60'>
          <div className='col-12'></div>
        </div>
        <div className='row'>
          <div className='col-12'></div>
        </div>
      </div>

      <div className='ff-cause-slider swiper'>
        <Slider {...settings} className='swiper-wrapper'>
          {/* 1. Dana Sosial Anggota */}
          <div className='swiper-slide'>
            <div className='cause__slider-single'>
              <div className='thumb'>
                <Link href='/cause-details'>
                  <OptimizedImage src='assets/images/cause/eight.png' alt='dana sosial anggota ppsi' />
                </Link>
                <div className='tag'>
                  <Link href='/our-causes'>Dana Sosial</Link>
                </div>
              </div>
              <div className='content'>
                <h6 className='fw-7'>
                  <Link href='/cause-details'>
                    Dukungan Dana Sosial untuk Anggota & Pelatih
                  </Link>
                </h6>
                <p>
                  Bantuan untuk anggota PPSI yang membutuhkan, termasuk pelatih dan atlet
                  yang sedang melaksanakan tugas pelestarian.
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
                    aria-label='dukung kegiatan'
                    title='Dukung kegiatan'
                    className='btn--secondary'
                  >
                    Dukung Sekarang
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Pembinaan Atlet Daerah */}
          <div className='swiper-slide'>
            <div className='cause__slider-single'>
              <div className='thumb'>
                <Link href='/cause-details'>
                  <OptimizedImage src='assets/images/cause/nine.png' alt='pembinaan atlet ppsi' />
                </Link>
                <div className='tag'>
                  <Link href='/our-causes'>Pembinaan</Link>
                </div>
              </div>
              <div className='content'>
                <h6>
                  <Link href='/cause-details'>
                    Program Pembinaan Atlet & Pesilat Muda Jawa Barat
                  </Link>
                </h6>
                <p>
                  Meningkatkan kualitas latihan, jurus, dan etika pesilat agar siap
                  mengikuti pasanggiri tingkat provinsi.
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
                    aria-label='dukung program'
                    title='Dukung program'
                    className='btn--secondary'
                  >
                    Dukung Sekarang
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Digitalisasi Sertifikat & Arsip */}
          <div className='swiper-slide'>
            <div className='cause__slider-single'>
              <div className='thumb'>
                <Link href='/cause-details'>
                  <OptimizedImage src='assets/images/cause/ten.png' alt='digitalisasi sertifikat ppsi' />
                </Link>
                <div className='tag'>
                  <Link href='/our-causes'>Administrasi</Link>
                </div>
              </div>
              <div className='content'>
                <h6>
                  <Link href='/cause-details'>
                    Digitalisasi Sertifikat Kenaikan Sabuk & Wasit
                  </Link>
                </h6>
                <p>
                  Penyimpanan arsip pelatihan, sertifikat pelatih dan atlet, serta fitur
                  verifikasi online untuk kegiatan resmi PPSI.
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
                    aria-label='dukung digitalisasi'
                    title='Dukung digitalisasi'
                    className='btn--secondary'
                  >
                    Dukung Sekarang
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Pasanggiri Pencak Silat Jawa Barat */}
          <div className='swiper-slide'>
            <div className='cause__slider-single'>
              <div className='thumb'>
                <Link href='/cause-details'>
                  <OptimizedImage src='assets/images/cause/eight.png' alt='pasanggiri ppsijabar' />
                </Link>
                <div className='tag'>
                  <Link href='/our-causes'>Pasanggiri</Link>
                </div>
              </div>
              <div className='content'>
                <h6 className='fw-7'>
                  <Link href='/cause-details'>
                    Pasanggiri Pencak Silat Tradisi se-Jawa Barat
                  </Link>
                </h6>
                <p>
                  Ajang silaturahmi dan pelestarian aliran tradisi, mendukung kota/kabupaten
                  menjadi tuan rumah kegiatan PPSI.
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
                    aria-label='dukung pasanggiri'
                    title='Dukung pasanggiri'
                    className='btn--secondary'
                  >
                    Dukung Sekarang
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 5. Penguatan Perguruan & Sanggar */}
          <div className='swiper-slide'>
            <div className='cause__slider-single'>
              <div className='thumb'>
                <Link href='/cause-details'>
                  <OptimizedImage src='assets/images/cause/nine.png' alt='penguatan perguruan ppsi' />
                </Link>
                <div className='tag'>
                  <Link href='/our-causes'>Perguruan</Link>
                </div>
              </div>
              <div className='content'>
                <h6>
                  <Link href='/cause-details'>
                    Penguatan Perguruan & Sanggar Binaan PPSI
                  </Link>
                </h6>
                <p>
                  Pendataan perguruan, struktur kepengurusan, dan dukungan untuk kegiatan
                  seni-budaya di tiap kabupaten/kota.
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
                    aria-label='dukung perguruan'
                    title='Dukung perguruan'
                    className='btn--secondary'
                  >
                    Dukung Sekarang
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 6. Perpustakaan & Arsip Gerak Tradisi */}
          <div className='swiper-slide'>
            <div className='cause__slider-single'>
              <div className='thumb'>
                <Link href='/cause-details'>
                  <OptimizedImage src='assets/images/cause/ten.png' alt='arsip gerak tradisi ppsi' />
                </Link>
                <div className='tag'>
                  <Link href='/our-causes'>Pelestarian</Link>
                </div>
              </div>
              <div className='content'>
                <h6>
                  <Link href='/cause-details'>
                    Perpustakaan Digital & Arsip Gerakan Tradisi
                  </Link>
                </h6>
                <p>
                  Menghimpun dokumentasi jurus, aliran, dan tokoh pencak silat agar dapat
                  dipelajari generasi muda.
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
                    aria-label='dukung perpustakaan'
                    title='Dukung perpustakaan'
                    className='btn--secondary'
                  >
                    Dukung Sekarang
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 7. Toko Atribut PPSI */}
          <div className='swiper-slide'>
            <div className='cause__slider-single'>
              <div className='thumb'>
                <Link href='/cause-details'>
                  <OptimizedImage src='assets/images/cause/eight.png' alt='toko atribut ppsi' />
                </Link>
                <div className='tag'>
                  <Link href='/our-causes'>Atribut</Link>
                </div>
              </div>
              <div className='content'>
                <h6 className='fw-7'>
                  <Link href='/cause-details'>
                    Pengadaan Atribut Resmi PPSI Digjaya
                  </Link>
                </h6>
                <p>
                  Pengadaan seragam, sabuk, perlengkapan latihan, dan merchandise resmi
                  organisasi untuk anggota.
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
                    aria-label='dukung pengadaan atribut'
                    title='Dukung pengadaan atribut'
                    className='btn--secondary'
                  >
                    Dukung Sekarang
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 8. Kalender Budaya & Silaturahmi */}
          <div className='swiper-slide'>
            <div className='cause__slider-single'>
              <div className='thumb'>
                <Link href='/cause-details'>
                  <OptimizedImage src='assets/images/cause/nine.png' alt='kalender budaya ppsi' />
                </Link>
                <div className='tag'>
                  <Link href='/our-causes'>Kalender</Link>
                </div>
              </div>
              <div className='content'>
                <h6>
                  <Link href='/cause-details'>
                    Kalender Budaya & Silaturahmi PPSI se-Jawa Barat
                  </Link>
                </h6>
                <p>
                  Pengelolaan jadwal festival, latihan gabungan, dan pertemuan pengurus agar
                  seluruh perguruan tetap terhubung.
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
                    aria-label='dukung kalender budaya'
                    title='Dukung kalender budaya'
                    className='btn--secondary'
                  >
                    Dukung Sekarang
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 9. Komunikasi & Sistem Keanggotaan */}
          <div className='swiper-slide'>
            <div className='cause__slider-single'>
              <div className='thumb'>
                <Link href='/cause-details'>
                  <OptimizedImage src='assets/images/cause/ten.png' alt='sistem keanggotaan ppsi' />
                </Link>
                <div className='tag'>
                  <Link href='/our-causes'>Keanggotaan</Link>
                </div>
              </div>
              <div className='content'>
                <h6>
                  <Link href='/cause-details'>
                    Sistem Keanggotaan & Pelaporan DPW PPSI
                  </Link>
                </h6>
                <p>
                  Pendataan anggota berdasarkan wilayah untuk memetakan kekuatan perguruan,
                  sekaligus kanal komunikasi resmi organisasi.
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
                    aria-label='dukung sistem keanggotaan'
                    title='Dukung sistem keanggotaan'
                    className='btn--secondary'
                  >
                    Dukung Sekarang
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>

      <div className='cta text-center'>
        <Link
          href='/our-causes'
          aria-label='lihat semua program'
          title='Lihat semua program'
          className='btn--primary'
        >
          Lihat Semua Program <i className='icon-heart' />
        </Link>
      </div>
    </section>
  );
};

export default CauseThree;
