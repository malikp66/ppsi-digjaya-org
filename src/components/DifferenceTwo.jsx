"use client";
import { useState } from "react";
import ModalVideo from "react-modal-video";
const DifferenceTwo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("visi");
  return (
    <>
      <section className='difference-two'>
        <div className='container'>
          <div className='row gutter-40 align-items-center'>
            <div className='col-12 col-lg-4 col-xxl-5 d-none d-lg-block'>
              <div className='difference-two__thumb-wrapper'>
                <div className='difference-two__thumb'>
                  <div
                    className='thumb-lg'
                    data-aos='fade-right'
                    data-aos-duration={1000}
                  >
                    <img
                      src='assets/images/difference/thumb-sm.png'
                      alt='Image_inner'
                    />
                    {/* <div className='grid-line'>
                      <img
                        src='assets/images/help/grid.png'
                        alt='Image_inner'
                        className='base-img'
                      />
                    </div> */}
                    <div className='video-btn-wrapper'>
                      <button
                        onClick={() => setIsOpen(true)}
                        className='open-video-popup'
                      >
                        <i className='icon-play' />
                      </button>
                    </div>
                  </div>
                  <div
                    className='thumb-sm'
                    data-aos='fade-up'
                    data-aos-duration={1000}
                    data-aos-delay={300}
                  >
                    <img
                      src='assets/images/difference/thumb-lg.png'
                      alt='Image_inner'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-lg-8 col-xxl-7'>
              <div className='difference-two__tab'>
                <div className='difference-two__content'>
                  <span className='sub-title'>
                    <i className='icon-donation' />
                    Visi, Misi, dan Nilai PPSI Digjaya
                  </span>
                  <h2 className='title-animation_inner'>
                    Menjaga <span>warisan</span> dan membina generasi penerus
                  </h2>
                  <p>
                    Sejak dibentuk 17 Agustus 1957 oleh Kol. R.A. Kosasi, PPSI Digjaya menjadi
                    wadah resmi pendekar Jawa Barat untuk mempersatukan perguruan, menjaga keamanan,
                    dan mengembangkan pencak silat tradisional melalui pendidikan, kejuaraan, dan
                    dukungan sosial bagi anggota.
                  </p>

                  <div className='difference-two__inner cta'>
                    <div className='difference-two__inner-content'>
                      {/* TABS */}
                      <div className='difference-two__tab'>
                        <div className='difference-two__tab-btns'>
                          <button
                            className={`difference-two__tab-btn ${
                              activeTab === "visi" ? "active" : ""
                            }`}
                            onClick={() => setActiveTab("visi")}
                            aria-label='visi'
                            title='visi'
                          >
                            Visi
                          </button>
                          <button
                            className={`difference-two__tab-btn ${
                              activeTab === "misi" ? "active" : ""
                            }`}
                            onClick={() => setActiveTab("misi")}
                            aria-label='misi'
                            title='misi'
                          >
                            Misi
                          </button>
                          <button
                            className={`difference-two__tab-btn ${
                              activeTab === "nilai" ? "active" : ""
                            }`}
                            onClick={() => setActiveTab("nilai")}
                            aria-label='nilai'
                            title='nilai'
                          >
                            Nilai Utama
                          </button>
                        </div>

                        <div className='difference-two__tab-content'>
                          {activeTab === "visi" && (
                            <div
                              className='difference-two__content-single'
                              id='visi'
                            >
                              <p>
                                Menjadi organisasi pencak silat tradisional yang profesional dalam
                                melestarikan, mengembangkan, dan mempromosikan nilai-nilai budaya
                                bangsa serta membentuk generasi berkarakter, budi bakti, sakti.
                              </p>
                            </div>
                          )}
                          {activeTab === "misi" && (
                            <div
                              className='difference-two__content-single'
                              id='misi'
                            >
                              <ul>
                                <li>
                                  <i className='fa-solid fa-check' /> Membangun struktur organisasi
                                  yang profesional dan akuntabel.
                                </li>
                                <li>
                                  <i className='fa-solid fa-check' /> Meningkatkan kualitas
                                  pembinaan dan pelatihan pencak silat.
                                </li>
                                <li>
                                  <i className='fa-solid fa-check' /> Memperkenalkan pencak silat di
                                  tingkat nasional dan internasional.
                                </li>
                                <li>
                                  <i className='fa-solid fa-check' /> Menjalin kerja sama dengan
                                  lembaga dan komunitas strategis.
                                </li>
                                <li>
                                  <i className='fa-solid fa-check' /> Mencetak generasi berkarakter
                                  dan berdedikasi bagi bangsa.
                                </li>
                                <li>
                                  <i className='fa-solid fa-check' /> Memberikan penghargaan serta
                                  dukungan bagi atlet berprestasi.
                                </li>
                              </ul>
                            </div>
                          )}
                          {activeTab === "nilai" && (
                            <div
                              className='difference-two__content-single'
                              id='nilai'
                            >
                              <ul>
                                <li>
                                  <i className='fa-solid fa-check' /> Pelestarian budaya dan
                                  kearifan lokal Sunda.
                                </li>
                                <li>
                                  <i className='fa-solid fa-check' /> Kebersamaan, persaudaraan, dan
                                  sportifitas antar perguruan.
                                </li>
                                <li>
                                  <i className='fa-solid fa-check' /> Profesionalisme dan integritas
                                  dalam pengabdian.
                                </li>
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* PROGRESS */}
                      <div className='difference-two__progress'>
                        <div className='difference-progress-single'>
                          <div
                            className='progress-bar-single'
                            data-percent='68%'
                          >
                            <div className='circular-progress'>
                              <div className='percent-value'>68%</div>
                              <svg
                                className='progress-circle'
                                viewBox='0 0 36 36'
                              >
                                <path
                                  className='circle-bg'
                                  d='M18 2.0845
                         a 15.9155 15.9155 0 0 1 0 31.831
                         a 15.9155 15.9155 0 0 1 0 -31.831'
                                />
                                <path
                                  style={{ strokeDasharray: 68 }}
                                  className='circle-progress'
                                  d='M18 2.0845
                         a 15.9155 15.9155 0 0 1 0 31.831
                         a 15.9155 15.9155 0 0 1 0 -31.831'
                                />
                              </svg>
                            </div>
                          </div>
                          <div className='content'>
                            <p>
                              Perguruan <br />
                              Terdaftar
                            </p>
                          </div>
                        </div>
                        <div className='difference-progress-single'>
                          <div
                            className='progress-bar-single'
                            data-percent='85%'
                          >
                            <div className='circular-progress'>
                              <div className='percent-value'>85%</div>
                              <svg
                                className='progress-circle'
                                viewBox='0 0 36 36'
                              >
                                <path
                                  className='circle-bg'
                                  d='M18 2.0845
                         a 15.9155 15.9155 0 0 1 0 31.831
                         a 15.9155 15.9155 0 0 1 0 -31.831'
                                />
                                <path
                                  style={{ strokeDasharray: 85 }}
                                  className='circle-progress'
                                  d='M18 2.0845
                         a 15.9155 15.9155 0 0 1 0 31.831
                         a 15.9155 15.9155 0 0 1 0 -31.831'
                                />
                              </svg>
                            </div>
                          </div>
                          <div className='content'>
                            <p>
                              Atlet <br />
                              Terfasilitasi
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CARD */}
                    <div className='difference-two__card'>
                      <div className='card-group'>
                        <div className='thumb'>
                          <i className='icon-donation-card' />
                        </div>
                        <div className='content'>
                          <h6>Program Aktif</h6>
                          <p>$40,456</p>
                        </div>
                      </div>
                      <hr />
                      <div className='card-group card-group-alt'>
                        <div className='thumb'>
                          <i className='icon-fund' />
                        </div>
                        <div className='content'>
                          <h6>Dana Sosial Tersalur</h6>
                          <p>$1,540,456</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='spade'>
          <img src='assets/images/spade-green-two.png' alt='Image_inner' />
        </div> */}
      </section>
      <ModalVideo
        channel='youtube'
        autoplay
        isOpen={isOpen}
        videoId='XxVg_s8xAms'
        onClose={() => setIsOpen(false)}
        allowFullScreen
      />
    </>
  );
};

export default DifferenceTwo;
