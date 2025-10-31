"use client";
import { perguruanList, kepengurusanDPW, announcements, laporanRingkas } from "@/data/organization";

const OrganizationManagement = () => {
  return (
    <section className='organization'>
      <div className='container'>
        <div className='row gutter-40'>
          <div className='col-12'>
            <div className='section__header text-center'>
              <span className='sub-title'>
                <i className='icon-donation' />
                Manajemen Organisasi &amp; Perguruan
              </span>
              <h2 className='title-animation_inner'>
                Menguatkan <span>struktur</span> PPSI Digjaya
              </h2>
            </div>
          </div>
        </div>

        <div className='row gutter-30'>
          <div className='col-12 col-lg-7'>
            <div className='volunteer__content membership-card' data-aos='fade-up' data-aos-duration={1000}>
              <h5>Data Perguruan Terdaftar</h5>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Nama</th>
                    <th>Alamat</th>
                    <th>Anggota</th>
                    <th>Status</th>
                    <th>Kontak</th>
                  </tr>
                </thead>
                <tbody>
                  {perguruanList.map((perguruan) => (
                    <tr key={perguruan.id}>
                      <td>{perguruan.nama}</td>
                      <td>{perguruan.alamat}</td>
                      <td>{perguruan.anggota}</td>
                      <td>{perguruan.status}</td>
                      <td>{perguruan.kontak}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className='col-12 col-lg-5'>
            <div className='volunteer__content membership-card' data-aos='fade-up' data-aos-duration={1000} data-aos-delay={150}>
              <h5>Struktur Kepengurusan DPW</h5>
              <ul className='training__list'>
                {kepengurusanDPW.map((item) => (
                  <li key={item.jabatan}>
                    <div>
                      <h6>{item.nama}</h6>
                      <p>{item.jabatan}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className='row gutter-30'>
          <div className='col-12 col-lg-6'>
            <div className='volunteer__content membership-card' data-aos='fade-up' data-aos-duration={1000}>
              <h5>Pengumuman Terbaru</h5>
              <ul className='training__list'>
                {announcements.map((item) => (
                  <li key={item.id}>
                    <div>
                      <h6>{item.judul}</h6>
                      <p>{item.isi}</p>
                    </div>
                    <span>{item.id}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='col-12 col-lg-6'>
            <div className='volunteer__content membership-card' data-aos='fade-up' data-aos-duration={1000} data-aos-delay={150}>
              <h5>Laporan &amp; Analitik</h5>
              <ul className='training__list'>
                {laporanRingkas.map((item) => (
                  <li key={item.label}>
                    <div>
                      <h6>{item.label}</h6>
                    </div>
                    <span>{item.value}</span>
                  </li>
                ))}
              </ul>
              <p className='info'>
                Laporan detail tersedia di panel administrasi PPSI Digjaya. Hubungi sekretariat untuk akses
                dashboard perguruan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizationManagement;
