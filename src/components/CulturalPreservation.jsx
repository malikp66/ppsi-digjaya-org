"use client";
import { useState } from "react";
import OptimizedImage from "@/components/common/OptimizedImage";
import {
  sejarahTimeline,
  tokohSilat,
  prestasiSilat,
  perpustakaanDigital,
  repositoryGerakan,
} from "@/data/culture";

const CulturalPreservation = () => {
  const [activeTab, setActiveTab] = useState("asal");

  return (
    <section className='difference-two culture'>
      <div className='container'>
        <div className='row gutter-40 align-items-center'>
          <div className='col-12 col-lg-5 col-xxl-4 d-none d-lg-block'>
            <div className='difference-two__thumb-wrapper'>
              <div className='difference-two__thumb'>
                <div
                  className='thumb-lg'
                  data-aos='fade-right'
                  data-aos-duration={1000}
                >
                  <OptimizedImage src='assets/images/gallery/thumb-one.png' alt='Image_inner' />
                </div>
                <div
                  className='thumb-sm'
                  data-aos='fade-up'
                  data-aos-duration={1000}
                  data-aos-delay={300}
                >
                  <OptimizedImage src='assets/images/gallery/thumb-two.png' alt='Image_inner' />
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-7 col-xxl-8'>
            <div className='difference-two__tab'>
              <div className='difference-two__content'>
                <span className='sub-title'>
                  <i className='icon-donation' />
                  Pelestarian Budaya Pencak Silat
                </span>
                <h2 className='title-animation_inner'>
                  Mengarsipkan <span>warisan</span> silat tradisi Sunda
                </h2>
                <p>
                  PPSI Digjaya mendokumentasikan perjalanan sejarah, tokoh, prestasi atlet, dan jurus
                  tradisional untuk memastikan regenerasi berlangsung secara utuh.
                </p>

                <div className='difference-two__inner cta'>
                  <div className='difference-two__inner-content'>
                    <div className='difference-two__tab'>
                      <div className='difference-two__tab-btns'>
                        <button
                          className={`difference-two__tab-btn ${activeTab === "asal" ? "active" : ""}`}
                          onClick={() => setActiveTab("asal")}
                        >
                          Asal Usul Silat
                        </button>
                        <button
                          className={`difference-two__tab-btn ${activeTab === "tokoh" ? "active" : ""}`}
                          onClick={() => setActiveTab("tokoh")}
                        >
                          Tokoh Silat
                        </button>
                        <button
                          className={`difference-two__tab-btn ${activeTab === "prestasi" ? "active" : ""}`}
                          onClick={() => setActiveTab("prestasi")}
                        >
                          Prestasi
                        </button>
                        <button
                          className={`difference-two__tab-btn ${activeTab === "perpustakaan" ? "active" : ""}`}
                          onClick={() => setActiveTab("perpustakaan")}
                        >
                          Perpustakaan
                        </button>
                        <button
                          className={`difference-two__tab-btn ${activeTab === "repository" ? "active" : ""}`}
                          onClick={() => setActiveTab("repository")}
                        >
                          Repository Jurus
                        </button>
                      </div>

                      <div className='difference-two__tab-content'>
                        {activeTab === "asal" && (
                          <div className='difference-two__content-single'>
                            <div className='culture-article'>
                              <p>
                                Pencak silat tradisional tumbuh sebagai seni bela diri, seni pertunjukan,
                                dan falsafah hidup masyarakat Sunda. PPSI Digjaya meneruskan amanah
                                pendiri untuk menjaga nilai luhur sekaligus merespons kebutuhan zaman.
                              </p>
                              <div className='video-responsive'>
                                <iframe
                                  src='https://www.youtube.com/embed/dummyvideo'
                                  title='Sejarah Pencak Silat'
                                  loading='lazy'
                                  allowFullScreen
                                />
                              </div>
                            </div>
                            <div className='timeline'>
                              {sejarahTimeline.map((item) => (
                                <div className='timeline-item' key={item.tahun}>
                                  <span className='timeline-year'>{item.tahun}</span>
                                  <p>{item.peristiwa}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {activeTab === "tokoh" && (
                          <div className='difference-two__content-single culture-grid'>
                            {tokohSilat.map((tokoh) => (
                              <div className='culture-card' key={tokoh.nama}>
                                <OptimizedImage src={tokoh.foto} alt={tokoh.nama} />
                                <div className='content'>
                                  <h6>{tokoh.nama}</h6>
                                  <p>{tokoh.peran}</p>
                                  <span>{tokoh.asal}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {activeTab === "prestasi" && (
                          <div className='difference-two__content-single'>
                            <table className='table'>
                              <thead>
                                <tr>
                                  <th>Nama Atlet</th>
                                  <th>Perguruan</th>
                                  <th>Kategori</th>
                                  <th>Tahun</th>
                                </tr>
                              </thead>
                              <tbody>
                                {prestasiSilat.map((item) => (
                                  <tr key={item.nama}>
                                    <td>{item.nama}</td>
                                    <td>{item.perguruan}</td>
                                    <td>{item.kategori}</td>
                                    <td>{item.tahun}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        )}

                        {activeTab === "perpustakaan" && (
                          <div className='difference-two__content-single culture-list'>
                            <div className='list-header'>
                              <span>Judul</span>
                              <span>Jenis</span>
                              <span>Tanggal Unggah</span>
                            </div>
                            {perpustakaanDigital.map((item) => (
                              <div className='list-row' key={item.judul}>
                                <span>{item.judul}</span>
                                <span>{item.jenis}</span>
                                <span>{item.unggah}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        {activeTab === "repository" && (
                          <div className='difference-two__content-single culture-grid'>
                            {repositoryGerakan.map((item) => (
                              <div className='culture-card' key={item.jurus}>
                                <div className='content'>
                                  <h6>{item.jurus}</h6>
                                  <p>{item.deskripsi}</p>
                                  <ul>
                                    <li>
                                      <strong>Aliran:</strong> {item.aliran}
                                    </li>
                                    <li>
                                      <strong>Guru:</strong> {item.guru}
                                    </li>
                                    <li>
                                      <strong>Daerah:</strong> {item.daerah}
                                    </li>
                                  </ul>
                                  <a href={item.video} aria-label='video jurus' className='link'>
                                    Video Latihan
                                  </a>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
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

export default CulturalPreservation;
