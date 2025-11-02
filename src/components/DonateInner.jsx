"use client";

import Link from "next/link";
import { useState } from "react";
import { danaSosialPrograms } from "@/data/programs";
import { contactInfo } from "@/data/contact";

const donationPresets = [200_000, 500_000, 1_000_000, 2_000_000];

const contributionMethods = [
  {
    id: "transfer",
    label: "Transfer Bank PPSI",
    helper: "Konfirmasi melalui sekretariat setelah formulir terkirim.",
  },
  {
    id: "iuran",
    label: "Iuran Perguruan / Kolektif",
    helper: "Koordinasi kolektif oleh pengurus perguruan anggota.",
  },
  {
    id: "sponsor",
    label: "Sponsor & CSR",
    helper: "Tim PPSI akan membantu penyusunan proposal resmi.",
  },
];

const currencyFormatter = new Intl.NumberFormat("id-ID");

const buildWhatsappLink = (phone) => {
  if (!phone) return "";

  const digits = phone.replace(/\D/g, "");
  if (!digits) return "";

  if (digits.startsWith("62")) {
    return `https://wa.me/${digits}`;
  }

  const trimmed = digits.startsWith("0") ? digits.slice(1) : digits;
  return `https://wa.me/62${trimmed}`;
};

const DonateInner = () => {
  const fallbackProgram = danaSosialPrograms?.[0] ?? null;

  const [programId, setProgramId] = useState<string>(() => fallbackProgram?.id ?? "");
  const [nominal, setNominal] = useState<number>(500_000);
  const [method, setMethod] = useState<string>(() => contributionMethods[0]?.id ?? "transfer");

  const programAktif =
    danaSosialPrograms.find((program) => program.id === programId) ?? fallbackProgram;

  const progressValue = Number(programAktif?.progress ?? 0);
  const whatsappLink = buildWhatsappLink(contactInfo.whatsapp);

  const handleNominalChange = (event) => {
    const nextValue = Number(event.target.value);
    setNominal(Number.isNaN(nextValue) ? 0 : nextValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const programTitle = programAktif?.title ?? "program dana sosial PPSI Digjaya";
    const formattedNominal =
      nominal > 0 ? `Rp${currencyFormatter.format(nominal)}` : "nominal yang akan dikonfirmasi";
    const methodLabel =
      contributionMethods.find((item) => item.id === method)?.label ?? "metode kontribusi";

    window.alert(
      `Terima kasih atas dukungan Anda untuk ${programTitle} melalui ${methodLabel} sebesar ${formattedNominal}. Tim sekretariat akan menghubungi Anda untuk konfirmasi berikutnya.`,
    );
  };

  const handlePresetKeyDown = (
    event,
    value,
  ) => {
    if (event.key === " " || event.key === "Enter") {
      event.preventDefault();
      setNominal(value);
    }
  };

  // blok info transparansi
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
    {
      title: "Dukungan Atlet Pasanggiri",
      description: "Transportasi, akomodasi, dan peralatan tanding.",
    },
    {
      title: "Santunan Kesehatan",
      description: "Bantuan anggota dan keluarga dalam kondisi kritis.",
    },
  ];

  const reportingContacts = [
    {
      label: "Email Sekretariat",
      href: `mailto:${contactInfo.email}`,
      icon: "fa-solid fa-envelope",
      display: contactInfo.email,
    },
    {
      label: "Telepon",
      href: `tel:${contactInfo.phone}`,
      icon: "fa-solid fa-phone",
      display: contactInfo.phone,
    },
    ...(whatsappLink
      ? [
          {
            label: "WhatsApp",
            href: whatsappLink,
            icon: "fa-brands fa-whatsapp",
            display: contactInfo.whatsapp,
          },
        ]
      : []),
  ];

  return (
    <section className="cm-details donate-us">
      <div className="container">
        <div className="row gutter-60">
          {/* kolom konten utama */}
          <div className="col-12 col-xl-8">
            <div className="cm-details__content">
              <div className="donate-inner">
                <div className="cm-group" data-aos="fade-up" data-aos-duration={1000}>
                  <span className="sub-title">
                    <i className="icon-donation" />
                    Dana Sosial &amp; Dukungan Atlet PPSI Digjaya
                  </span>
                  <h3 className="title-animation_inner">
                    Salurkan energi untuk prestasi dan pelestarian silat
                  </h3>
                  <p>
                    Kontribusi Anda digunakan untuk pembinaan atlet tradisi, beasiswa pelatih, dan
                    santunan kesehatan anggota. PPSI Digjaya memastikan penyaluran dana dilakukan
                    secara transparan dengan laporan berkala kepada perguruan.
                  </p>
                </div>

                {/* form donasi */}
                <div
                  className="community-donation"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                  data-aos-delay={100}
                >
                  <div className="community-donation__inner">
                    <div className="warning">
                      <div className="line">
                        <i className="fa-solid fa-triangle-exclamation" />
                      </div>
                      <p>
                        <strong>Informasi:</strong> Form ini simulasi frontend. Untuk transfer resmi,
                        sekretariat akan menghubungi Anda setelah formulir terkirim.
                      </p>
                    </div>

                    <form className="donation-form" onSubmit={handleSubmit}>
                      {/* pilih program */}
                      <div className="donation-form__single">
                        <div className="donation-form__single-intro">
                          <h5 id="programLabel">Pilih Program Dana</h5>
                        </div>
                        <label htmlFor="programId" className="sr-only">
                          Pilih program dana sosial yang ingin Anda dukung
                        </label>
                        <select
                          id="programId"
                          name="programId"
                          aria-labelledby="programLabel"
                          value={programId}
                          onChange={(event) => setProgramId(event.target.value)}
                        >
                          {danaSosialPrograms.map((program) => (
                            <option key={program.id} value={program.id}>
                              {program.title}
                            </option>
                          ))}
                        </select>
                        <p className="info" id="programDescription">
                          {programAktif?.description}
                        </p>

                        <div className="progress-bar-wrapper">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={progressValue}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            aria-describedby="programLabel"
                          >
                            <div
                              className="progress-bar-percent"
                              style={{ width: `${progressValue}%` }}
                            >
                              <span className="percent-value">{progressValue}%</span>
                            </div>
                          </div>
                        </div>

                        <div className="cause-progress__goal">
                          <p>
                            Target: <span className="goal">{programAktif?.target}</span>
                          </p>
                          {programAktif?.penanggungJawab ? (
                            <p className="info">
                              Penanggung jawab: <span>{programAktif.penanggungJawab}</span>
                            </p>
                          ) : null}
                        </div>
                      </div>

                      {/* nominal */}
                      <div className="donation-form__single">
                        <div className="donation-form__single-intro">
                          <h5 id="nominalLabel">Nominal Donasi (Rp)</h5>
                          <p className="info">
                            Minimal Rp50.000. Anda dapat menyesuaikan angka sesuai kebutuhan
                            program.
                          </p>
                        </div>
                        <div className="input-group-icon">
                          <div className="thumb">
                            <i className="fa-solid fa-rupiah-sign" />
                          </div>
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
                                onKeyDown={(event) => handlePresetKeyDown(event, preset)}
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
                            onKeyDown={(event) => handlePresetKeyDown(event, 0)}
                          >
                            Custom
                          </span>
                        </div>
                      </div>

                      {/* metode */}
                      <div className="donation-form__single">
                        <h5>Metode Kontribusi</h5>
                        <div
                          className="radio-wrapper"
                          role="radiogroup"
                          aria-label="Metode Kontribusi"
                        >
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
                                  onChange={(event) => setMethod(event.target.value)}
                                />
                                <label htmlFor={id}>{label}</label>
                                {helper ? <p className="info">{helper}</p> : null}
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* pesan */}
                      <div className="donation-form__single alter-input">
                        <label htmlFor="pesan" className="sr-only">
                          Pesan atau catatan tambahan
                        </label>
                        <textarea
                          id="pesan"
                          name="pesan"
                          placeholder="Pesan atau catatan tambahan (opsional)"
                        />
                        <i className="fa-solid fa-comments" />
                      </div>

                      <div className="form-cta">
                        <button type="submit" className="btn--primary">
                          Kirim Dukungan <i className="fa-solid fa-arrow-right" />
                        </button>
                      </div>
                    </form>
                  </div>

                  {/* transparansi */}
                  <div
                    className="volunteer__content membership-card"
                    data-aos="fade-up"
                    data-aos-duration={1000}
                    data-aos-delay={200}
                  >
                    <h4>Transparansi Dana</h4>
                    <p>
                      Laporan dana sosial diterbitkan setiap triwulan. Perguruan penerima wajib
                      melaporkan penggunaan dana dan perkembangan atlet. Hubungi sekretariat untuk
                      informasi lebih lanjut.
                    </p>
                    <ul className="training__list">
                      {transparencyItems.map((item) => (
                        <li key={item.title}>
                          <div>
                            <h6>{item.title}</h6>
                            {item.body}
                          </div>
                          {item.action}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* sidebar */}
          <div className="col-12 col-xl-4">
            <aside className="cm-sidebar">
              <div
                className="cm-sidebar-widget"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <div className="intro">
                  <h5>Rencana Penyaluran Dana</h5>
                </div>
                <ul className="training__list">
                  {allocationPlans.map((plan) => (
                    <li key={plan.title}>
                      <div>
                        <h6>{plan.title}</h6>
                        <p>{plan.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="cm-sidebar-widget"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-delay={150}
              >
                <div className="intro">
                  <h5>Saluran Pelaporan</h5>
                </div>
                <p>
                  Kirim bukti transfer dan laporan penggunaan dana ke sekretariat untuk verifikasi
                  dan pembaruan dashboard perguruan.
                </p>
                <ul className="training__list">
                  {reportingContacts.map((contact) => {
                    const isExternal = contact.href.startsWith("http");
                    return (
                      <li key={contact.label}>
                        <div>
                          <h6>{contact.label}</h6>
                          <p>
                            <a
                              href={contact.href}
                              target={isExternal ? "_blank" : undefined}
                              rel={isExternal ? "noreferrer" : undefined}
                              title={contact.label}
                            >
                              <i className={contact.icon} /> {contact.display}
                            </a>
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <div className="cm-cta">
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
};

export default DonateInner;
