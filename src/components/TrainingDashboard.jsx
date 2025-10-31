"use client";
import { pelatihanOnline, jadwalLatihan, pelatihMentor, statistikPelatihan } from "@/data/training";

const TrainingDashboard = () => {
  return (
    <section className='training'>
      <div className='container'>
        <div className='row gutter-40'>
          <div className='col-12'>
            <div className='section__header text-center'>
              <span className='sub-title'>
                <i className='icon-donation' />
                Pelatihan &amp; Pembinaan Atlet
              </span>
              <h2 className='title-animation_inner'>
                Modul latihan <span>berjenjang</span> untuk atlet PPSI
              </h2>
            </div>
          </div>
        </div>

        <div className='row gutter-30'>
          <div className='col-12 col-lg-6'>
            <div className='volunteer__content membership-card training-card' data-aos='fade-up' data-aos-duration={1000}>
              <h5>Pelatihan Online</h5>
              <ul className='training__list'>
                {pelatihanOnline.map((item) => (
                  <li key={item.id}>
                    <div>
                      <h6>{item.judul}</h6>
                      <p>{item.level}</p>
                    </div>
                    <span>{item.durasi}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='col-12 col-lg-6'>
            <div className='volunteer__content membership-card training-card' data-aos='fade-up' data-aos-duration={1000} data-aos-delay={150}>
              <h5>Jadwal Latihan Terpusat</h5>
              <ul className='training__list'>
                {jadwalLatihan.map((item) => (
                  <li key={item.id}>
                    <div>
                      <h6>{item.hari}</h6>
                      <p>{item.waktu}</p>
                    </div>
                    <div className='training__meta'>
                      <span>{item.lokasi}</span>
                      <span>Pelatih: {item.pelatih}</span>
                      <span>{item.kuota}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className='row gutter-30'>
          <div className='col-12 col-lg-7'>
            <div className='volunteer__content membership-card training-card' data-aos='fade-up' data-aos-duration={1000}>
              <h5>Pelatih &amp; Mentor</h5>
              <div className='row gutter-20'>
                {pelatihMentor.map((pelatih) => (
                  <div className='col-12 col-md-6' key={pelatih.id}>
                    <div className='training__mentor'>
                      <h6>{pelatih.nama}</h6>
                      <p>{pelatih.perguruan}</p>
                      <ul>
                        <li>
                          <strong>Spesialisasi:</strong> {pelatih.spesialisasi}
                        </li>
                        <li>
                          <strong>Sertifikasi:</strong> {pelatih.sertifikasi}
                        </li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-5'>
            <div className='volunteer__content membership-card training-card stats' data-aos='fade-up' data-aos-duration={1000} data-aos-delay={150}>
              <h5>Dashboard Kinerja</h5>
              <ul>
                {statistikPelatihan.map((item) => (
                  <li key={item.label}>
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingDashboard;


