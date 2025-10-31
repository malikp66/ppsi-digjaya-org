"use client";
import { useState } from "react";
import { certificateArchive, expiringCertificates } from "@/data/certificates";

const CertificateCenter = () => {
  const [nomor, setNomor] = useState("");
  const [hasil, setHasil] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const found = certificateArchive.find(
      (item) =>
        item.nomor.toLowerCase() === nomor.toLowerCase() ||
        item.nama.toLowerCase().includes(nomor.toLowerCase())
    );
    setHasil(found ?? { notFound: true });
  };

  return (
    <section className='certificate'>
      <div className='container'>
        <div className='row gutter-40'>
          <div className='col-12 col-xl-5'>
            <div className='volunteer__content membership-card' data-aos='fade-up' data-aos-duration={1000}>
              <span className='sub-title'>
                <i className='icon-donation' />
                Verifikasi Sertifikat PPSI Digjaya
              </span>
              <h3 className='title-animation_inner'>Cek keaslian sertifikat</h3>
              <p>
                Masukkan nomor sertifikat atau nama pemegang sertifikat untuk mengecek status dan masa
                berlaku. Verifikasi menggunakan kode unik dan QR pada dokumen fisik.
              </p>
              <form className='certificate__form' onSubmit={handleSubmit}>
                <div className='input-single'>
                  <input
                    type='text'
                    value={nomor}
                    onChange={(event) => setNomor(event.target.value)}
                    placeholder='Nomor sertifikat / nama'
                    required
                  />
                  <i className='fa-solid fa-certificate' />
                </div>
                <button type='submit' className='btn--primary'>
                  Cek Sertifikat <i className='fa-solid fa-arrow-right' />
                </button>
              </form>
              {hasil && (
                <div className='certificate__result'>
                  {hasil.notFound ? (
                    <p className='status status-pending'>Sertifikat tidak ditemukan. Silakan hubungi sekretariat.</p>
                  ) : (
                    <div className='certificate__result-card'>
                      <h6>{hasil.nama}</h6>
                      <ul>
                        <li>
                          <strong>Nomor:</strong> {hasil.nomor}
                        </li>
                        <li>
                          <strong>Tipe:</strong> {hasil.jenis}
                        </li>
                        <li>
                          <strong>Terbit:</strong> {hasil.terbit}
                        </li>
                        <li>
                          <strong>Berlaku hingga:</strong> {hasil.berlaku}
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              )}
              <p className='info'>
                Konfirmasi detail sertifikat dapat dilakukan melalui{" "}
                <a href='mailto:dpdppsikotabandungofficial@gmail.com'>dpdppsikotabandungofficial@gmail.com</a>.
              </p>
            </div>
          </div>

          <div className='col-12 col-xl-7'>
            <div className='volunteer__content membership-card' data-aos='fade-up' data-aos-duration={1000} data-aos-delay={150}>
              <h4>Arsip Sertifikat</h4>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Nomor</th>
                    <th>Nama</th>
                    <th>Tipe</th>
                    <th>Terbit</th>
                    <th>Berlaku</th>
                  </tr>
                </thead>
                <tbody>
                  {certificateArchive.map((item) => (
                    <tr key={item.nomor}>
                      <td>{item.nomor}</td>
                      <td>{item.nama}</td>
                      <td>{item.jenis}</td>
                      <td>{item.terbit}</td>
                      <td>{item.berlaku}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div
              className='volunteer__content membership-card'
              data-aos='fade-up'
              data-aos-duration={1000}
              data-aos-delay={250}
            >
              <h4>Pengingat Kedaluwarsa</h4>
              <ul className='training__list'>
                {expiringCertificates.map((item) => (
                  <li key={item.nomor}>
                    <div>
                      <h6>{item.nama}</h6>
                      <p>{item.nomor}</p>
                    </div>
                    <div className='training__meta'>
                      <span>Berlaku hingga {item.berlaku}</span>
                      <span>{item.catatan}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <p className='info'>
                Pastikan sertifikat diperbarui sebelum masa berlaku berakhir dan ganti QR code jika terjadi
                kerusakan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificateCenter;
