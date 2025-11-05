"use client";

import { useMemo, useState } from "react";
import OptimizedImage from "@/components/common/OptimizedImage";
import {
  sejarahTimeline,
  tokohSilat,
  prestasiSilat,
  perpustakaanDigital,
  repositoryGerakan,
} from "@/data/culture";

const tabs = [
  { id: "timeline", label: "Jejak Sejarah", description: "Mengulas perjalanan PPSI Digjaya dari masa ke masa." },
  { id: "figures", label: "Tokoh Pelestari", description: "Mengenal para pendekar yang menjaga api tradisi." },
  { id: "achievements", label: "Prestasi Atlet", description: "Rangkuman pencapaian di berbagai ajang tradisional." },
  { id: "library", label: "Perpustakaan Digital", description: "Arsip naskah, foto, dan media pembelajaran." },
  { id: "repository", label: "Repository Jurus", description: "Koleksi jurus dan catatan teknis dari berbagai aliran." },
];

const CulturalPreservation = () => {
  const [activeTab, setActiveTab] = useState("timeline");

  const stats = useMemo(
    () => [
      { value: sejarahTimeline.length, label: "Arsip Sejarah" },
      { value: tokohSilat.length, label: "Tokoh Pendekar" },
      { value: prestasiSilat.length, label: "Prestasi Besar" },
      { value: repositoryGerakan.length, label: "Jurus Terdokumentasi" },
    ],
    [],
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case "timeline":
        return (
          <div className='culture__timeline'>
            {sejarahTimeline.map((item) => (
              <article className='culture__timeline-item' key={item.tahun}>
                <span className='culture__timeline-year'>{item.tahun}</span>
                <p>{item.peristiwa}</p>
              </article>
            ))}
          </div>
        );
      case "figures":
        return (
          <div className='culture__figures-grid'>
            {tokohSilat.map((tokoh) => (
              <article className='culture__figure-card' key={tokoh.nama}>
                <div className='culture__figure-media'>
                  <OptimizedImage src={tokoh.foto} alt={tokoh.nama} fill sizes='(min-width: 768px) 220px, 45vw' />
                </div>
                <div className='culture__figure-content'>
                  <h3>{tokoh.nama}</h3>
                  <p>{tokoh.peran}</p>
                  <span>{tokoh.asal}</span>
                </div>
              </article>
            ))}
          </div>
        );
      case "achievements":
        return (
          <div className='culture__achievement-grid'>
            {prestasiSilat.map((item) => (
              <article className='culture__achievement-card' key={item.nama}>
                <header>
                  <h4>{item.nama}</h4>
                  <span className='culture__achievement-year'>{item.tahun}</span>
                </header>
                <p className='culture__achievement-school'>{item.perguruan}</p>
                <p className='culture__achievement-category'>{item.kategori}</p>
              </article>
            ))}
          </div>
        );
      case "library":
        return (
          <div className='culture__library'>
            {perpustakaanDigital.map((item) => (
              <article className='culture__library-item' key={item.judul}>
                <div>
                  <h4>{item.judul}</h4>
                  <p>{item.jenis}</p>
                </div>
                <span>{item.unggah}</span>
              </article>
            ))}
          </div>
        );
      case "repository":
        return (
          <div className='culture__repository-grid'>
            {repositoryGerakan.map((item) => (
              <article className='culture__repository-card' key={item.jurus}>
                <header>
                  <h4>{item.jurus}</h4>
                  <span>{item.aliran}</span>
                </header>
                <p>{item.deskripsi}</p>
                <ul>
                  <li>
                    <strong>Guru:</strong> {item.guru}
                  </li>
                  <li>
                    <strong>Daerah:</strong> {item.daerah}
                  </li>
                </ul>
                <a className='culture__repository-link' href={item.video} target='_blank' rel='noreferrer'>
                  Lihat Video
                </a>
              </article>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className='culture'>
      <div className='container'>
        <div className='culture__hero'>
          <div className='culture__hero-content' data-aos='fade-right' data-aos-duration='800'>
            <span className='culture__badge'>Pelestarian Budaya</span>
            <h1>Merawat Warisan Pencak Silat Sunda</h1>
            <p>
              PPSI Digjaya mengarsipkan sejarah, tokoh, prestasi, dan jurus tradisi agar generasi muda dapat
              terus belajar dan menjaga nilai luhur pencak silat.
            </p>
            <div className='culture__actions'>
              <a className='btn--primary' href='#repository'>
                Eksplor Repository
              </a>
              <a className='btn--ghost' href='/contact-us'>
                Kolaborasi Pelestarian
              </a>
            </div>
            <div className='culture__stats'>
              {stats.map((item) => (
                <div className='culture__stat' key={item.label}>
                  <strong>{item.value.toString().padStart(2, "0")}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className='culture__hero-media' data-aos='fade-left' data-aos-duration='900'>
            <div className='culture__hero-main'>
              <OptimizedImage
                src='/assets/images/difference/thumb-lg.png'
                alt='Dokumentasi pelatihan pencak silat'
                fill
                sizes='(min-width: 1200px) 420px, (min-width: 768px) 360px, 80vw'
                priority
              />
            </div>
            <div className='culture__hero-secondary'>
              <OptimizedImage
                src='/assets/images/difference/thumb-sm.png'
                alt='Sesi latihan jurus tradisional'
                fill
                sizes='120px'
              />
            </div>
            <div className='culture__hero-shape'>
              <OptimizedImage src='/assets/images/difference/shape-hand.png' alt='ornamen silat' fill sizes='180px' />
            </div>
          </div>
        </div>

        <div className='culture__content' id='repository'>
          <div className='culture__tab-header'>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type='button'
                className={`culture__tab-btn ${activeTab === tab.id ? "is-active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
          <div className='culture__tab-description'>
            {tabs.find((tab) => tab.id === activeTab)?.description}
          </div>
          <div className='culture__tab-panel'>{renderTabContent()}</div>
        </div>
      </div>
    </section>
  );
};

export default CulturalPreservation;
