"use client";

import Link from "next/link";
import { useState } from "react";
import { danaSosialPrograms } from "@/data/programs";
import { contactInfo } from "@/data/contact";

// Palet warna mengikuti main.css (cek variabel):
// --primary-color: #046a58 (teal)
// --secondary-color: #122f2a (hijau tua)
// Komponen ini memakai blok .community agar seluruh styling default donasi aktif

const donationPresets = [200_000, 500_000, 1_000_000, 2_000_000];

const contributionMethods = [
  { id: "transfer", label: "Transfer Bank PPSI", helper: "Konfirmasi melalui sekretariat setelah formulir terkirim." },
  { id: "iuran", label: "Iuran Perguruan / Kolektif", helper: "Koordinasi kolektif oleh pengurus perguruan anggota." },
  { id: "sponsor", label: "Sponsor & CSR", helper: "Tim PPSI akan membantu penyusunan proposal resmi." },
];

const currencyFormatter = new Intl.NumberFormat("id-ID");

const buildWhatsappLink = (phone) => {
  if (!phone) return "";
  const digits = phone.replace(/\D/g, "");
  if (!digits) return "";
  if (digits.startsWith("62")) return `https://wa.me/${digits}`;
  const trimmed = digits.startsWith("0") ? digits.slice(1) : digits;
  return `https://wa.me/62${trimmed}`;
};

export default function DonateInner() {
  const fallbackProgram = danaSosialPrograms?.[0] ?? null;
  const [programId, setProgramId] = useState(() => fallbackProgram?.id ?? "");
  const [nominal, setNominal] = useState(500_000);
  const [method, setMethod] = useState(() => contributionMethods[0]?.id ?? "transfer");

  const programAktif = danaSosialPrograms.find((p) => p.id === programId) ?? fallbackProgram;
  const progressValue = Number(programAktif?.progress ?? 0);
  const whatsappLink = buildWhatsappLink(contactInfo.whatsapp);

  const handleNominalChange = (e) => {
    const nextValue = Number(e.target.value);
    setNominal(Number.isNaN(nextValue) ? 0 : nextValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const programTitle = programAktif?.title ?? "program dana sosial PPSI Digjaya";
    const formattedNominal = nominal > 0 ? `Rp${currencyFormatter.format(nominal)}` : "nominal yang akan dikonfirmasi";
    const methodLabel = contributionMethods.find((m) => m.id === method)?.label ?? "metode kontribusi";
    window.alert(`Terima kasih atas dukungan Anda untuk ${programTitle} melalui ${methodLabel} sebesar ${formattedNominal}. Tim sekretariat akan menghubungi Anda untuk konfirmasi berikutnya.`);
  };

  const handlePresetKeyDown = (event, value) => {
    if (event.key === " " || event.key === "Enter") {
      event.preventDefault();
      setNominal(value);
    }
  };

  const transparencyItems = [
    {
      title: "Kontak Sekretariat",
      body: (
        <p>
          <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
        </p>
      ),
      action: (
        <a href={`mailto:${contactInfo.email}`} className="link">
          {contactInfo.email} <i className="fa-solid fa-arrow-right" />
        </a>
      ),
    },
    {
      title: "Alamat Kantor",
      body: <p>{contactInfo.address}</p>,
      action: contactInfo.mapUrl ? (
        <a href={contactInfo.mapUrl} className="link" target="_blank" rel="noreferrer">
          Lihat Peta <i className="fa-solid fa-arrow-right" />
        </a>
      ) : null,
    },
    ...(whatsappLink
      ? [
          {
            title: "WhatsApp Sekretariat",
            body: (
              <p>
                <a href={whatsappLink} target="_blank" rel="noreferrer">
                  {contactInfo.whatsapp}
                </a>
              </p>
            ),
            action: (
              <a href={whatsappLink} className="link" target="_blank" rel="noreferrer">
                Chat Sekarang <i className="fa-solid fa-arrow-right" />
              </a>
            ),
          },
        ]
      : []),
  ];

  const allocationPlans = [
    { title: "Beasiswa Pelatih", description: "Subsidi sertifikasi dan modul pembinaan." },
    { title: "Dukungan Atlet Pasanggiri", description: "Transportasi, akomodasi, dan peralatan tanding." },
    { title: "Santunan Kesehatan", description: "Bantuan anggota dan keluarga dalam kondisi kritis." },
  ];

  const reportingContacts = [
    { label: "Email Sekretariat", href: `mailto:${contactInfo.email}`, icon: "fa-solid fa-envelope", display: contactInfo.email },
    { label: "Telepon", href: `tel:${contactInfo.phone}`, icon: "fa-solid fa-phone", display: contactInfo.phone },
    ...(whatsappLink ? [{ label: "WhatsApp", href: whatsappLink, icon: "fa-brands fa-whatsapp", display: contactInfo.whatsapp }] : []),
  ];

  return (
    <section className="community" aria-label="Donasi Dana Sosial PPSI">
      {/* Background hijau gelap + foto hero (letakkan gambar di /public/images/ppsi-donation-hero.jpg) */}
      <div className="community-bg" aria-hidden="true">
        <img src="/images/ppsi-donation-hero.jpg" alt="" />
      </div>

      <div className="container">
        {/* Header */}
        <div className="section__header text-center" data-aos="fade-up" data-aos-duration={800}>
          <span className="sub-title">Dana Sosial & Dukungan Atlet PPSI Digjaya</span>
          <h2 style={{ textTransform: "none" }}>Salurkan energi untuk prestasi dan pelestarian silat</h2>
          <p style={{ color: "var(--white)", opacity: 0.9, maxWidth: 820, margin: "12px auto 0" }}>
            Kontribusi Anda digunakan untuk pembinaan atlet tradisi, beasiswa pelatih, dan santunan kesehatan anggota. Penyaluran dana dilakukan
            secara transparan dengan laporan berkala kepada perguruan.
          </p>
        </div>

        <div className="row gutter-60">
          {/* Konten utama */}
          <div className="col-12 col-xl-8">
            <div className="community-donation" data-aos="fade-up" data-aos-duration={900}>
              <div className="community-donation__inner">
                <div className="warning" role="note" aria-live="polite">
                  <div className="line" aria-hidden="true">
                    <i className="fa-solid fa-triangle-exclamation" />
                  </div>
                  <p>
                    <strong>Informasi:</strong> Form ini simulasi frontend. Untuk transfer resmi, sekretariat akan menghubungi Anda setelah formulir terkirim.
                  </p>
                </div>

                {/* Form Donasi */}
                <form className="donation-form" onSubmit={handleSubmit}>
                  {/* Program */}
                  <div className="donation-form__single">
                    <div className="donation-form__single-intro">
                      <h5 id="programLabel">Pilih Program Dana</h5>
                    </div>

                    <label htmlFor="programId" className="sr-only">Pilih program dana sosial yang ingin Anda dukung</label>
                    <select
                      id="programId"
                      name="programId"
                      aria-labelledby="programLabel"
                      value={programId}
                      onChange={(e) => setProgramId(e.target.value)}
                    >
                      {danaSosialPrograms.map((program) => (
                        <option key={program.id} value={program.id}>{program.title}</option>
                      ))}
                    </select>

                    <p className="info" id="programDescription">{programAktif?.description}</p>

                    <div className="progress-bar-wrapper">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={progressValue}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-describedby="programLabel"
                      >
                        <div className="progress-bar-percent" style={{ width: `${progressValue}%` }}>
                          <span className="percent-value">{progressValue}%</span>
                        </div>
                      </div>
                    </div>

                    <div className="cause-progress__goal">
                      <p>Target: <span className="goal">{programAktif?.target}</span></p>
                      {programAktif?.penanggungJawab && (
                        <p className="info">Penanggung jawab: <span>{programAktif.penanggungJawab}</span></p>
                      )}
                    </div>
                  </div>

                  {/* Nominal */}
                  <div className="donation-form__single">
                    <div className="donation-form__single-intro">
                      <h5 id="nominalLabel">Nominal Donasi (Rp)</h5>
                      <p className="info">Minimal Rp50.000. Anda dapat menyesuaikan angka sesuai kebutuhan program.</p>
                    </div>
                    <div className="input-group-icon">
                      <div className="thumb"><i className="fa-solid fa-rupiah-sign" /></div>
                      <input
                        type="number"
                        id="nominal"
                        name="nominal"
                        min={50_000}
                        value={nominal}
                        onChange={handleNominalChange}
                        aria-labelledby="nominalLabel"
                      />
                    </div>

                    <div className="made-amount" role="group" aria-label="Pilihan nominal cepat">
                      {donationPresets.map((preset) => {
                        const isActive = nominal === preset;
                        return (
                          <span
                            key={preset}
                            className={`donation-amount ${isActive ? "active" : ""}`}
                            role="button"
                            tabIndex={0}
                            aria-pressed={isActive}
                            onClick={() => setNominal(preset)}
                            onKeyDown={(e) => handlePresetKeyDown(e, preset)}
                          >
                            {currencyFormatter.format(preset)}
                          </span>
                        );
                      })}
                      <span
                        className={`donation-amount custom-amount ${nominal === 0 ? "active" : ""}`}
                        role="button"
                        tabIndex={0}
                        aria-pressed={nominal === 0}
                        onClick={() => setNominal(0)}
                        onKeyDown={(e) => handlePresetKeyDown(e, 0)}
                      >
                        Custom
                      </span>
                    </div>
                  </div>

                  {/* Metode */}
                  <div className="donation-form__single">
                    <h5>Metode Kontribusi</h5>
                    <div className="radio-wrapper" role="radiogroup" aria-label="Metode Kontribusi">
                      {contributionMethods.map(({ id, label, helper }) => {
                        const isChecked = method === id;
                        return (
                          <div className="radio-single" key={id}>
                            <input
                              type="radio"
                              id={id}
                              name="metode"
                              value={id}
                              checked={isChecked}
                              onChange={(e) => setMethod(e.target.value)}
                            />
                            <label htmlFor={id}>{label}</label>
                            {helper ? <p className="info">{helper}</p> : null}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Pesan */}
                  <div className="donation-form__single alter-input">
                    <label htmlFor="pesan" className="sr-only">Pesan atau catatan tambahan</label>
                    <textarea id="pesan" name="pesan" placeholder="Pesan atau catatan tambahan (opsional)" />
                    <i className="fa-solid fa-comments" />
                  </div>

                  <div className="form-cta">
                    <button type="submit" className="btn--primary">
                      Kirim Dukungan <i className="fa-solid fa-arrow-right" />
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Transparansi Dana (pakai style sidebar-widget biar konsisten card-nya) */}
            <div className="cm-sidebar-widget" data-aos="fade-up" data-aos-duration={900} data-aos-delay={100} style={{ borderRadius: 20, padding: 24 }}>
              <div className="intro"><h5>Transparansi Dana</h5></div>
              <p>
                Laporan dana sosial diterbitkan setiap triwulan. Perguruan penerima wajib melaporkan penggunaan dana dan perkembangan atlet. Hubungi sekretariat untuk informasi lebih lanjut.
              </p>
              <ul>
                {transparencyItems.map((item) => (
                  <li key={item.title} style={{ marginBottom: 14 }}>
                    <div style={{ fontWeight: 700, color: "var(--secondary-color)" }}>{item.title}</div>
                    <div>{item.body}</div>
                    {item.action}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-12 col-xl-4">
            <aside className="cm-sidebar">
              <div className="cm-sidebar-widget" data-aos="fade-up" data-aos-duration={900} data-aos-delay={100}>
                <div className="intro"><h5>Rencana Penyaluran Dana</h5></div>
                <ul>
                  {allocationPlans.map((plan) => (
                    <li key={plan.title} style={{ marginBottom: 12 }}>
                      <div style={{ fontWeight: 700, color: "var(--secondary-color)" }}>{plan.title}</div>
                      <p>{plan.description}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="cm-sidebar-widget" data-aos="fade-up" data-aos-duration={900} data-aos-delay={150}>
                <div className="intro"><h5>Saluran Pelaporan</h5></div>
                <p>Kirim bukti transfer dan laporan penggunaan dana ke sekretariat untuk verifikasi dan pembaruan dashboard perguruan.</p>
                <ul>
                  {reportingContacts.map((c) => {
                    const isExternal = c.href.startsWith("http");
                    return (
                      <li key={c.label} style={{ marginBottom: 10 }}>
                        <a href={c.href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noreferrer" : undefined} title={c.label}>
                          <i className={c.icon} /> {c.display}
                        </a>
                      </li>
                    );
                  })}
                </ul>
                <div style={{ marginTop: 16 }}>
                  <Link href="/contact-us" className="btn--primary" aria-label="hubungi ppsi">
                    Hubungi PPSI <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
