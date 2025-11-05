"use client";
import { useMemo, useState } from "react";
import { certificateArchive, certificatePricing, expiringCertificates } from "@/data/certificates";
import "./certificate-center.module.css";

const MONTH_MAP = {
  Januari: 0,
  January: 0,
  Februari: 1,
  February: 1,
  Maret: 2,
  March: 2,
  April: 3,
  Mei: 4,
  May: 4,
  Juni: 5,
  June: 5,
  Juli: 6,
  July: 6,
  Agustus: 7,
  August: 7,
  September: 8,
  Oktober: 9,
  October: 9,
  November: 10,
  Desember: 11,
  December: 11,
};

const parseDateIndonesian = (value) => {
  if (!value) return null;
  const parts = value.split(" ");
  if (parts.length < 3) {
    const fallback = new Date(value);
    return Number.isNaN(fallback.valueOf()) ? null : fallback;
  }

  const [dayPart, monthPart, yearPart] = parts;
  const day = parseInt(dayPart, 10);
  const year = parseInt(yearPart, 10);
  const month = MONTH_MAP[monthPart];

  if (Number.isNaN(day) || Number.isNaN(year) || typeof month === "undefined") {
    const fallback = new Date(value);
    return Number.isNaN(fallback.valueOf()) ? null : fallback;
  }

  return new Date(year, month, day);
};

const formatDateIndonesian = (value) => {
  if (!value) return "-";
  const parsed = value instanceof Date ? value : parseDateIndonesian(value);
  if (!parsed) return value;
  return parsed.toLocaleDateString("id-ID", { day: "2-digit", month: "long", year: "numeric" });
};

const certificateStatus = (expiryValue) => {
  const expiryDate = parseDateIndonesian(expiryValue);
  if (!expiryDate) {
    return {
      label: "Status tidak tersedia",
      intent: "neutral",
      helper: "Hubungi sekretariat untuk memastikan masa berlaku.",
      diffDays: null,
    };
  }

  const today = new Date();
  const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const diffMs = expiryDate.getTime() - startOfToday.getTime();
  const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays < 0) {
    return {
      label: "Kedaluwarsa",
      intent: "danger",
      helper: `Berakhir pada ${formatDateIndonesian(expiryDate)}`,
      diffDays,
    };
  }

  if (diffDays === 0) {
    return {
      label: "Berakhir hari ini",
      intent: "warning",
      helper: "Segera perbarui agar status tetap aktif.",
      diffDays,
    };
  }

  if (diffDays <= 90) {
    return {
      label: "Segera diperbarui",
      intent: "warning",
      helper: `Sisa ${diffDays} hari sebelum kedaluwarsa.`,
      diffDays,
    };
  }

  return {
    label: "Aktif",
    intent: "success",
    helper: `Masih berlaku hingga ${formatDateIndonesian(expiryDate)}.`,
    diffDays,
  };
};

const CertificateCenter = () => {
  const [nomor, setNomor] = useState("");
  const [hasil, setHasil] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const keyword = nomor.trim().toLowerCase();
    if (!keyword) return;

    const found = certificateArchive.find((item) => {
      const nomorLower = item.nomor.toLowerCase();
      const namaLower = item.nama.toLowerCase();
      return nomorLower === keyword || nomorLower.includes(keyword) || namaLower.includes(keyword);
    });

    setHasil(found ?? { notFound: true });
  };

  const activeCertificate = useMemo(() => {
    if (hasil && !hasil.notFound) {
      return hasil;
    }
    return certificateArchive[0];
  }, [hasil]);

  const ownerCertificates = useMemo(() => {
    if (!activeCertificate) return [];
    return certificateArchive.filter((item) => item.nama === activeCertificate.nama);
  }, [activeCertificate]);

  const archiveToRender = hasil && !hasil.notFound ? ownerCertificates : certificateArchive;

  const activeStatus = activeCertificate ? certificateStatus(activeCertificate.berlaku) : null;

  const archiveStats = useMemo(() => {
    const total = certificateArchive.length;
    const active = certificateArchive.filter(
      (item) => certificateStatus(item.berlaku).intent !== "danger"
    ).length;

    return {
      total,
      active,
      ownerTotal: ownerCertificates.length,
    };
  }, [ownerCertificates]);

  return (
    <section className='certificate'>
      <div className='container'>
        <div className='row gutter-40'>
          <div className='col-12 col-xl-4'>
            <div className='certificate__panel membership-card' data-aos='fade-up' data-aos-duration={1000}>
              <span className='sub-title'>
                <i className='icon-donation' />
                Pusat Sertifikat PPSI Digjaya
              </span>
              <h3 className='title-animation_inner'>Verifikasi milik siswa</h3>
              <p>
                Temukan dan pastikan keaslian sertifikat siswa, pelatih, atau atlet dengan memasukkan nomor
                sertifikat atau nama pemegang.
              </p>
              <form className='certificate__form checkout__form' onSubmit={handleSubmit}>
                <div className='input-single'>
                  <input
                    type='text'
                    value={nomor}
                    onChange={(event) => setNomor(event.target.value)}
                    placeholder='Cari nomor atau nama pemegang'
                    required
                  />
                  <i className='fa-solid fa-magnifying-glass' />
                </div>
                <button type='submit' className='btn--primary'>
                  Cek Sertifikat <i className='fa-solid fa-arrow-right' />
                </button>
              </form>

              {hasil && (
                <div
                  className={`certificate__result ${
                    hasil.notFound ? "certificate__result--empty" : "certificate__result--success"
                  }`}
                >
                  {hasil.notFound ? (
                    <>
                      <i className='fa-solid fa-circle-exclamation' />
                      <div>
                        <p className='result-title'>Sertifikat tidak ditemukan</p>
                        <p className='result-text'>
                          Pastikan nomor sudah benar atau hubungi sekretariat untuk verifikasi manual.
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <i className='fa-solid fa-circle-check' />
                      <div>
                        <p className='result-title'>Data terverifikasi</p>
                        <p className='result-text'>
                          {hasil.nama} tercatat dengan sertifikat {hasil.jenis.toLowerCase()} bernomor{" "}
                          <strong>{hasil.nomor}</strong>.
                        </p>
                      </div>
                    </>
                  )}
                </div>
              )}

              <div className='certificate__legend'>
                <span className='status-badge status-badge--success'>
                  <i className='fa-solid fa-circle' />
                  Aktif
                </span>
                <span className='status-badge status-badge--warning'>
                  <i className='fa-solid fa-circle' />
                  Segera diperbarui
                </span>
                <span className='status-badge status-badge--danger'>
                  <i className='fa-solid fa-circle' />
                  Kedaluwarsa
                </span>
              </div>

              <div className='certificate__pricing'>
                <div className='certificate__pricing-header'>
                  <div>
                    <p className='certificate__pricing-eyebrow'>Biaya Sertifikat Digital</p>
                    <h4>{certificatePricing.range} / sertifikat</h4>
                  </div>
                  <span className='certificate__pricing-badge'>Termasuk hosting & dukungan</span>
                </div>
                <p className='certificate__pricing-description'>{certificatePricing.description}</p>
                <ul className='certificate__pricing-list'>
                  {certificatePricing.features.map((feature) => (
                    <li key={feature.id}>
                      <i className='fa-solid fa-circle-check' />
                      <div>
                        <p className='certificate__pricing-title'>{feature.title}</p>
                        <p>{feature.detail}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className='certificate__pricing-notes'>
                  {certificatePricing.notes.map((note, index) => (
                    <p key={index}>
                      <i className='fa-solid fa-circle-dot' />
                      {note}
                    </p>
                  ))}
                </div>
              </div>

              <p className='info'>
                Perlu bantuan administrasi atau penawaran paket? Kirimkan permintaan ke{" "}
                <a href='mailto:dpdppsikotabandungofficial@gmail.com'>dpdppsikotabandungofficial@gmail.com</a>{" "}
                untuk validasi cepat.
              </p>
            </div>
          </div>

          <div className='col-12 col-xl-8'>
            {activeCertificate && (
              <div
                className='certificate__highlight membership-card'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={150}
              >
                <div className='certificate__highlight-header'>
                  <span className={`status-badge status-badge--${activeStatus.intent}`}>
                    <i className='fa-solid fa-shield-halved' />
                    {activeStatus.label}
                  </span>
                  <span className='certificate__number'>
                    <i className='fa-solid fa-hashtag' />
                    {activeCertificate.nomor}
                  </span>
                </div>
                <h4>{activeCertificate.nama}</h4>
                <p className='certificate__subtitle'>{activeCertificate.jenis}</p>

                <div className='certificate__meta-grid'>
                  <div className='certificate__meta-item'>
                    <span>Terbit</span>
                    <strong>{formatDateIndonesian(activeCertificate.terbit)}</strong>
                  </div>
                  <div className='certificate__meta-item'>
                    <span>Berlaku hingga</span>
                    <strong>{formatDateIndonesian(activeCertificate.berlaku)}</strong>
                  </div>
                  {activeCertificate.sabuk && (
                    <div className='certificate__meta-item'>
                      <span>Pencapaian</span>
                      <strong>Sabuk {activeCertificate.sabuk}</strong>
                    </div>
                  )}
                  <div className='certificate__meta-item certificate__meta-item--status'>
                    <span>Status digital</span>
                    <strong>{activeStatus.label}</strong>
                    <small>{activeStatus.helper}</small>
                  </div>
                </div>

                <div className='certificate__actions'>
                  <button
                    type='button'
                    className='certificate__action'
                    onClick={() => {
                      if (!activeCertificate) return;
                      setNomor(activeCertificate.nomor);
                      setHasil(activeCertificate);
                    }}
                  >
                    Lihat sertifikat siswa
                    <i className='fa-solid fa-arrow-up-right-from-square' />
                  </button>
                  <div className='certificate__qr'>
                    <i className='fa-solid fa-qrcode' />
                    <div>
                      <p>Scan QR fisik</p>
                      <span>Kode unik tercetak pada pojok kanan dokumen.</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div
              className='certificate__archive membership-card'
              data-aos='fade-up'
              data-aos-duration={1000}
              data-aos-delay={220}
            >
              <div className='certificate__archive-header'>
                <div>
                  <h4>
                    {hasil && !hasil.notFound
                      ? `Sertifikat milik ${activeCertificate.nama}`
                      : "Arsip Sertifikat Resmi"}
                  </h4>
                  <p>
                    {hasil && !hasil.notFound
                      ? "Riwayat pencapaian siswa yang berhasil diverifikasi."
                      : "Daftar sertifikat terbit dan status keaktifannya dalam arsip PPSI Digjaya."}
                  </p>
                </div>
                <div className='certificate__stats'>
                  <div className='certificate__stat'>
                    <span>Total arsip</span>
                    <strong>{archiveStats.total}</strong>
                  </div>
                  <div className='certificate__stat'>
                    <span>Masih aktif</span>
                    <strong>{archiveStats.active}</strong>
                  </div>
                  {hasil && !hasil.notFound && (
                    <div className='certificate__stat'>
                      <span>Miliki siswa ini</span>
                      <strong>{archiveStats.ownerTotal}</strong>
                    </div>
                  )}
                </div>
              </div>

              <div className='certificate__cards'>
                {archiveToRender.map((item) => {
                  const status = certificateStatus(item.berlaku);
                  return (
                    <article key={item.nomor} className='certificate-card'>
                      <header>
                        <span className={`status-badge status-badge--${status.intent}`}>
                          <i className='fa-solid fa-circle-check' />
                          {status.label}
                        </span>
                        <span className='certificate-card__number'>{item.nomor}</span>
                      </header>
                      <div className='certificate-card__body'>
                        <h6>{item.nama}</h6>
                        <p>{item.jenis}</p>
                        <ul>
                          <li>
                            <i className='fa-solid fa-calendar-days' />
                            Terbit {formatDateIndonesian(item.terbit)}
                          </li>
                          <li>
                            <i className='fa-solid fa-hourglass-half' />
                            Berlaku hingga {formatDateIndonesian(item.berlaku)}
                          </li>
                          {item.sabuk && (
                            <li>
                              <i className='fa-solid fa-medal' />
                              Sabuk {item.sabuk}
                            </li>
                          )}
                        </ul>
                      </div>
                      <footer>
                        <button
                          type='button'
                          onClick={() => {
                            setNomor(item.nomor);
                            setHasil(item);
                          }}
                        >
                          Lihat detail <i className='fa-solid fa-arrow-right' />
                        </button>
                      </footer>
                    </article>
                  );
                })}
              </div>
            </div>

            <div
              className='certificate__reminder membership-card'
              data-aos='fade-up'
              data-aos-duration={1000}
              data-aos-delay={260}
            >
              <div className='certificate__reminder-header'>
                <h4>Pengingat Kedaluwarsa</h4>
                <span className='badge-count'>{expiringCertificates.length} sertifikat</span>
              </div>
              <ul className='certificate__reminder-list'>
                {expiringCertificates.map((item) => {
                  const status = certificateStatus(item.berlaku);
                  return (
                    <li key={item.nomor}>
                      <div className='reminder__identity'>
                        <h6>{item.nama}</h6>
                        <span>{item.nomor}</span>
                      </div>
                      <div className='reminder__details'>
                        <span className='reminder__date'>
                          <i className='fa-solid fa-calendar-check' />
                          {formatDateIndonesian(item.berlaku)}
                        </span>
                        <p>{item.catatan}</p>
                      </div>
                      <span className={`status-badge status-badge--${status.intent}`}>{status.label}</span>
                    </li>
                  );
                })}
              </ul>
              <p className='info'>
                Ingatkan siswa untuk memperbarui dokumen sebelum kedaluwarsa dan perbarui QR code apabila
                terjadi kerusakan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificateCenter;
