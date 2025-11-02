"use client";
import { perguruanList, kepengurusanDPW, announcements, laporanRingkas } from "@/data/organization";

const highlightIcons = ["icon-donation", "icon-user", "icon-heart", "icon-award"];
const highlightHelpers = [
  "Perguruan aktif yang melaporkan kegiatan dan anggota secara berkala.",
  "Anggota terverifikasi melalui sistem keanggotaan digital PPSI.",
  "Akumulasi dana sosial yang tersalurkan sepanjang tahun berjalan.",
  "Total agenda budaya dan program pembinaan yang dijalankan bersama.",
];
const highlightAccents = ["emerald", "teal", "amber", "indigo"];

const formatDate = (value) => {
  if (!value) return "";
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
};

const OrganizationManagement = () => {
  const highlightCards = laporanRingkas.map((item, index) => ({
    ...item,
    icon: highlightIcons[index % highlightIcons.length],
    helper: highlightHelpers[index % highlightHelpers.length],
    accent: highlightAccents[index % highlightAccents.length],
  }));

  const statusSnapshot = Object.entries(
    perguruanList.reduce((acc, perguruan) => {
      const key = perguruan.status || "Tidak Ditentukan";
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {})
  );

  const totalPerguruan = perguruanList.length;
  const activePerguruan = statusSnapshot.find(([status]) => status === "Aktif")?.[1] ?? 0;
  const otherStatuses = statusSnapshot.filter(([status]) => status !== "Aktif");
  const totalAnggota = perguruanList.reduce((sum, perguruan) => sum + perguruan.anggota, 0);
  const defaultContact = perguruanList[0]?.kontak || "";
  const formattedContactLink = defaultContact.replace(/\D/g, "");
  const latestAnnouncementDate = announcements[0]?.id ?? "";

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
              <p className='organization__lead'>
                Rekap data perguruan anggota, struktur kepengurusan, serta aktivitas koordinasi internal PPSI Digjaya.
                Seluruh pembaruan dilakukan secara berkala untuk memastikan kolaborasi berjalan efektif.
              </p>
            </div>
          </div>
        </div>

        <div className='row gutter-30 organization__highlights'>
          {highlightCards.map((card, index) => (
            <div className='col-12 col-sm-6 col-lg-3' key={card.label}>
              <div
                className={`organization__highlight organization__highlight--${card.accent}`}
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={index * 80}
              >
                <span className='organization__highlight-icon'>
                  <i className={card.icon} />
                </span>
                <div className='organization__highlight-copy'>
                  <span className='organization__highlight-label'>{card.label}</span>
                  <strong className='organization__highlight-value'>{card.value}</strong>
                  <p className='organization__highlight-helper'>{card.helper}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='row gutter-30 organization__main'>
          <div className='col-12 col-xl-8'>
            <div className='organization__card organization__card--table' data-aos='fade-up' data-aos-duration={1000}>
              <div className='organization__card-header'>
                <div>
                  <h5>Data Perguruan Terdaftar</h5>
                  <p className='organization__card-subtitle'>
                    Rekap perguruan anggota DPW PPSI Digjaya berikut profil lokasi, jumlah anggota, dan kontak
                    koordinasi untuk agenda pembinaan ataupun event.
                  </p>
                </div>
                {latestAnnouncementDate && (
                  <span className='organization__meta organization__meta--soft'>
                    Pembaruan {formatDate(latestAnnouncementDate)}
                  </span>
                )}
              </div>

              <div className='organization__table'>
                <table>
                  <thead>
                    <tr>
                      <th>Perguruan</th>
                      <th>Alamat</th>
                      <th>Anggota</th>
                      <th>Status</th>
                      <th>Kontak</th>
                    </tr>
                  </thead>
                  <tbody>
                    {perguruanList.map((perguruan) => {
                      const normalizedStatus = (perguruan.status || "").toLowerCase().replace(/\s+/g, "-");
                      const sanitizedContact = perguruan.kontak.replace(/\D/g, "");
                      const contactHref = sanitizedContact ? `https://wa.me/${sanitizedContact}` : `tel:${perguruan.kontak}`;

                      return (
                        <tr key={perguruan.id}>
                          <td>
                            <span className='organization__entity-name'>{perguruan.nama}</span>
                          </td>
                          <td>
                            <span className='organization__entity-text'>{perguruan.alamat}</span>
                          </td>
                          <td>
                            <strong className='organization__entity-number'>
                              {perguruan.anggota.toLocaleString("id-ID")}
                            </strong>
                          </td>
                          <td>
                            <span className={`organization__status organization__status--${normalizedStatus}`}>
                              {perguruan.status}
                            </span>
                          </td>
                          <td>
                            <a
                              className='organization__contact-link'
                              href={contactHref}
                              target='_blank'
                              rel='noreferrer'
                            >
                              {perguruan.kontak}
                            </a>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div className='organization__table-footer'>
                <p>
                  {activePerguruan} dari {totalPerguruan} perguruan tercatat aktif dengan total{" "}
                  {totalAnggota.toLocaleString("id-ID")} anggota. Data monitoring diperbarui setiap kali laporan Triwulan
                  diterima oleh sekretariat DPW.
                </p>
              </div>
            </div>
          </div>

          <div className='col-12 col-xl-4'>
            <div className='organization__sidebar'>
              <div
                className='organization__card organization__card--stack'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={120}
              >
                <h5>Struktur Kepengurusan DPW</h5>
                <ul className='organization__team'>
                  {kepengurusanDPW.map((item) => (
                    <li key={item.jabatan}>
                      <div className='organization__team-meta'>
                        <h6>{item.nama}</h6>
                        <span>{item.jabatan}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className='organization__card organization__card--stack'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={180}
              >
                <h5>Pengumuman Terkini</h5>
                <ul className='organization__timeline'>
                  {announcements.map((item) => (
                    <li key={item.id}>
                      <span className='organization__timeline-date'>{formatDate(item.id)}</span>
                      <div className='organization__timeline-content'>
                        <h6>{item.judul}</h6>
                        <p>{item.isi}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className='organization__card organization__card--cta'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={240}
              >
                <h5>Ringkasan Koordinasi</h5>
                <ul className='organization__summary'>
                  <li>
                    <span>Perguruan aktif</span>
                    <strong>{activePerguruan}</strong>
                  </li>
                  <li>
                    <span>Total anggota terlapor</span>
                    <strong>{totalAnggota.toLocaleString("id-ID")}</strong>
                  </li>
                  {otherStatuses.map(([status, value]) => (
                    <li key={status}>
                      <span>Status {status.toLowerCase()}</span>
                      <strong>{value}</strong>
                    </li>
                  ))}
                </ul>

                {defaultContact && formattedContactLink && (
                  <div className='organization__cta-contact'>
                    <span>Kontak Sekretariat</span>
                    <a href={`https://wa.me/${formattedContactLink}`} target='_blank' rel='noreferrer'>
                      {defaultContact}
                    </a>
                  </div>
                )}

                <p className='organization__cta-note'>
                  Koordinasikan pemutakhiran data dan distribusi surat keputusan melalui sekretariat sebelum batas
                  waktu pelaporan berikutnya.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizationManagement;
