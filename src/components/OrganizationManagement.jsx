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
    <section className='organization' aria-labelledby='organization-title'>
      <div className='organization__top'>
        <div className='container organization__top-inner'>
          <div className='organization__intro' data-aos='fade-up' data-aos-duration={900}>
            <span className='organization__badge'>
              <i className='icon-donation' aria-hidden='true' />
              Manajemen Organisasi &amp; Perguruan
            </span>
            <h1 className='organization__title' id='organization-title'>
              Menguatkan <span>Struktur</span> PPSI Digjaya
            </h1>
            <p className='organization__description'>
              Rekap data perguruan anggota, struktur kepengurusan, serta aktivitas koordinasi internal PPSI Digjaya.
              Seluruh pembaruan dilakukan secara berkala untuk memastikan kolaborasi berjalan efektif.
            </p>
          </div>

          <div className='organization__metrics-grid'>
            {highlightCards.map((card, index) => (
              <article
                key={card.label}
                className={`organization__metric organization__metric--${card.accent}`}
                data-aos='fade-up'
                data-aos-duration={900}
                data-aos-delay={index * 90}
              >
                <div className='organization__metric-icon'>
                  <i className={card.icon} aria-hidden='true' />
                </div>
                <div className='organization__metric-content'>
                  <span className='organization__metric-label'>{card.label}</span>
                  <strong className='organization__metric-value'>{card.value}</strong>
                  <p className='organization__metric-helper'>{card.helper}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='organization__layout'>
          <article
            className='organization__panel organization__panel--primary'
            data-aos='fade-up'
            data-aos-duration={900}
          >
            <header className='organization__panel-header'>
              <div>
                <h2>Data Perguruan Terdaftar</h2>
                <p className='organization__panel-subtitle'>
                  Rekap perguruan anggota DPW PPSI Digjaya berikut profil lokasi, jumlah anggota, dan kontak koordinasi
                  untuk agenda pembinaan ataupun event.
                </p>
              </div>
              {latestAnnouncementDate && (
                <span className='organization__chip'>Pembaruan {formatDate(latestAnnouncementDate)}</span>
              )}
            </header>

            <div className='organization__table' role='region' aria-live='polite'>
              <table>
                <thead>
                  <tr>
                    <th scope='col'>Perguruan</th>
                    <th scope='col'>Alamat</th>
                    <th scope='col'>Anggota</th>
                    <th scope='col'>Status</th>
                    <th scope='col'>Kontak</th>
                  </tr>
                </thead>
                <tbody>
                  {perguruanList.map((perguruan) => {
                    const normalizedStatus = (perguruan.status || "Tidak Ditentukan")
                      .toLowerCase()
                      .replace(/\s+/g, "-");
                    const sanitizedContact = perguruan.kontak.replace(/\D/g, "");
                    const contactHref = sanitizedContact ? `https://wa.me/${sanitizedContact}` : `tel:${perguruan.kontak}`;

                    return (
                      <tr key={perguruan.id}>
                        <td data-title='Perguruan'>
                          <span className='organization__entity-name'>{perguruan.nama}</span>
                        </td>
                        <td data-title='Alamat'>
                          <span className='organization__entity-text'>{perguruan.alamat}</span>
                        </td>
                        <td data-title='Anggota'>
                          <strong className='organization__entity-number'>
                            {perguruan.anggota.toLocaleString("id-ID")}
                          </strong>
                        </td>
                        <td data-title='Status'>
                          <span className={`organization__status organization__status--${normalizedStatus}`}>
                            {perguruan.status}
                          </span>
                        </td>
                        <td data-title='Kontak'>
                          <a className='organization__contact-link' href={contactHref} target='_blank' rel='noreferrer'>
                            {perguruan.kontak}
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <footer className='organization__panel-footer'>
              <p>
                {activePerguruan} dari {totalPerguruan} perguruan tercatat aktif dengan total{" "}
                {totalAnggota.toLocaleString("id-ID")} anggota. Data monitoring diperbarui setiap kali laporan triwulan
                diterima oleh sekretariat DPW.
              </p>
            </footer>
          </article>

          <aside className='organization__sidebar'>
            <section
              className='organization__panel organization__panel--stacked'
              data-aos='fade-up'
              data-aos-duration={900}
              data-aos-delay={120}
            >
              <header className='organization__panel-header organization__panel-header--compact'>
                <h3>Struktur Kepengurusan DPW</h3>
              </header>
              <ul className='organization__team'>
                {kepengurusanDPW.map((item) => {
                  const initial = item.nama?.trim().charAt(0)?.toUpperCase() ?? "?";

                  return (
                    <li key={item.jabatan}>
                      <div className='organization__team-avatar' aria-hidden='true'>
                        <span>{initial}</span>
                      </div>
                      <div className='organization__team-meta'>
                        <h4>{item.nama}</h4>
                        <span>{item.jabatan}</span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </section>

            <section
              className='organization__panel organization__panel--stacked'
              data-aos='fade-up'
              data-aos-duration={900}
              data-aos-delay={200}
            >
              <header className='organization__panel-header organization__panel-header--compact'>
                <h3>Pengumuman Terkini</h3>
              </header>
              <ul className='organization__timeline'>
                {announcements.map((item, index) => (
                  <li key={item.id} data-aos='fade-up' data-aos-delay={index * 40}>
                    <div className='organization__timeline-marker' aria-hidden='true' />
                    <span className='organization__timeline-date'>{formatDate(item.id)}</span>
                    <div className='organization__timeline-content'>
                      <h4>{item.judul}</h4>
                      <p>{item.isi}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <section
              className='organization__panel organization__panel--cta'
              data-aos='fade-up'
              data-aos-duration={900}
              data-aos-delay={260}
            >
              <header className='organization__panel-header organization__panel-header--compact'>
                <h3>Ringkasan Koordinasi</h3>
              </header>
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
                Koordinasikan pemutakhiran data dan distribusi surat keputusan melalui sekretariat sebelum batas waktu
                pelaporan berikutnya.
              </p>
            </section>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default OrganizationManagement;
