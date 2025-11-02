"use client";
import { pelatihanOnline, jadwalLatihan, pelatihMentor, statistikPelatihan } from "@/data/training";

// Semua komponen disatukan dalam satu file, memakai class yang tersedia di main.css
// (container, gutter-xx, section__header, sub-title, title-animation, help-two__card, team__single, counter, dll.)

const SectionHeader = () => (
  <div className="section__header text-center gutter-12" data-aos="fade-up" data-aos-duration={800}>
    <span className="sub-title">Pelatihan & Pembinaan Atlet</span>
    <h2 className="title-animation" style={{ textTransform: "none" }}>
      Modul latihan <span>berjenjang</span> untuk atlet PPSI
    </h2>
  </div>
);

const OnlineTrainingList = () => (
  <section className="help-two" aria-labelledby="online-title">
    <div className="container">
      <h5 id="online-title" className="gutter-12" data-aos="fade-up" data-aos-duration={800}>Pelatihan Online</h5>
      <div className="help-two-card-wrapper gutter-30">
        {pelatihanOnline.map((item) => (
          <article key={item.id} className="help-two__card" data-aos="fade-up" data-aos-duration={800}>
            <div className="content">
              <h6>{item.judul}</h6>
              <p>{item.level}</p>
            </div>
            <div className="list">
              <p><strong>Durasi:</strong> {item.durasi}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const CentralScheduleList = () => (
  <section className="help-two" aria-labelledby="schedule-title">
    <div className="container">
      <h5 id="schedule-title" className="gutter-12" data-aos="fade-up" data-aos-duration={800}>Jadwal Latihan Terpusat</h5>
      <div className="help-two-card-wrapper gutter-30">
        {jadwalLatihan.map((item) => (
          <article key={item.id} className="help-two__card" data-aos="fade-up" data-aos-duration={800}>
            <div className="content">
              <h6>{item.hari}</h6>
              <p>{item.waktu}</p>
            </div>
            <div className="list">
              <p><strong>Lokasi:</strong> {item.lokasi}</p>
              <p><strong>Pelatih:</strong> {item.pelatih}</p>
              <p><strong>Kuota:</strong> {item.kuota}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const MentorGrid = () => (
  <section className="team" aria-labelledby="mentor-title">
    <div className="container">
      <h5 id="mentor-title" className="gutter-12" data-aos="fade-up" data-aos-duration={800}>Pelatih & Mentor</h5>
      <div className="gutter-30">
        {pelatihMentor.map((pelatih) => (
          <article key={pelatih.id} className="team__single" data-aos="fade-up" data-aos-duration={800}>
            <div className="team__single-content">
              <h6>{pelatih.nama}</h6>
              <p>{pelatih.perguruan}</p>
              <ul className="list">
                <li><strong>Spesialisasi:</strong> {pelatih.spesialisasi}</li>
                <li><strong>Sertifikasi:</strong> {pelatih.sertifikasi}</li>
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const StatsBoard = () => (
  <section className="counter" aria-labelledby="stats-title">
    <div className="container">
      <h5 id="stats-title" className="gutter-12" data-aos="fade-up" data-aos-duration={800}>Dashboard Kinerja</h5>
      <div className="counter__inner">
        {statistikPelatihan.map((item) => (
          <article key={item.label} className="counter__single" data-aos="fade-up" data-aos-duration={800}>
            <h2>{item.value}</h2>
            <h5>{item.label}</h5>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const TrainingDashboard = () => {
  return (
    <section className="volunteer" data-aos="fade-up" data-aos-duration={800}>
      <div className="container">
        <SectionHeader />
        {/* Susunan rapi per blok; menggunakan komponen kecil agar mudah dirawat */}
        <div className="gutter-40">
          <OnlineTrainingList />
          <CentralScheduleList />
          <MentorGrid />
          <StatsBoard />
        </div>
      </div>
    </section>
  );
};

export default TrainingDashboard;
