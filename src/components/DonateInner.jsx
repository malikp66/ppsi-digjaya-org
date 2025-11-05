"use client";

import Link from "next/link";
import { useMemo, useRef, useState } from "react";

import styles from "./DonateInner.module.css";
import { contactInfo } from "@/data/contact";
import { danaSosialPrograms } from "@/data/programs";
import OptimizedImage from "@/components/common/OptimizedImage";

const donationPresets = [200_000, 500_000, 1_000_000, 2_000_000];

const contributionMethods = [
  { id: "transfer", label: "Transfer Bank PPSI", helper: "Serahkan bukti transfer ke sekretariat setelah formulir terkirim." },
  { id: "iuran", label: "Iuran Perguruan / Kolektif", helper: "Koordinasi bersama pengurus perguruan anggota." },
  { id: "sponsor", label: "Sponsor & CSR", helper: "Tim PPSI siap membantu penyusunan proposal resmi." },
];

const defaultImpactStats = [
  { id: "clubs", value: "42", label: "Perguruan aktif" },
  { id: "athletes", value: "180+", label: "Atlet terbina" },
  { id: "funds", value: "Rp125jt", label: "Dana tersalurkan 2024" },
];

const testimonialsFallback = [
  {
    id: "quote-1",
    quote: "Bantuan donatur membantu kami mengirim dua atlet ke Kejurnas. Transparansi dana PPSI membuat kami percaya.",
    name: "Pelatih Siti Nurhaliza",
    role: "Perguruan Cendekia Silat",
  },
  {
    id: "quote-2",
    quote: "Program kesehatan darurat menyelamatkan pengobatan atlet junior kami. Terima kasih para donatur.",
    name: "Iqbal Prasetyo",
    role: "Koordinator Kesehatan PPSI",
  },
];

const buildWhatsappLink = (phone) => {
  if (!phone) return "";
  const digits = phone.replace(/\D/g, "");
  if (!digits) return "";
  if (digits.startsWith("62")) return `https://wa.me/${digits}`;
  const trimmed = digits.startsWith("0") ? digits.slice(1) : digits;
  return `https://wa.me/62${trimmed}`;
};

function DonateHero({ stats, formAnchorId }) {
  return (
    <div className={styles.hero} data-aos="fade-up" data-aos-duration={800}>
      <div className={styles.heroMedia} aria-hidden="true">
        <OptimizedImage src="/images/ppsi-donation-hero.jpg" alt="" />
      </div>

      <div className={styles.heroContent}>
        <span className={styles.heroKicker}>Dana Sosial &amp; Dukungan Atlet PPSI Digjaya</span>
        <h2 className={styles.heroTitle}>Salurkan energi untuk prestasi dan pelestarian silat</h2>
        <p className={styles.heroLead}>
          Kontribusi Anda mendukung pelatihan tradisi, beasiswa pelatih, serta santunan kesehatan anggota. Dana dikelola transparan dengan laporan berkala kepada perguruan.
        </p>
        <div className={styles.heroCtaGroup}>
          <a href={`#${formAnchorId}`} className={styles.primaryButton}>
            Mulai Donasi <i className="fa-solid fa-arrow-right" aria-hidden="true" />
          </a>
          <Link href="/contact-us" className={styles.secondaryLink}>
            Konsultasi Program <i className="fa-solid fa-comments" aria-hidden="true" />
          </Link>
        </div>
        <div className={styles.heroStats} role="list">
          {stats.map((stat) => (
            <div key={stat.id} className={styles.statPill} role="listitem">
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DonationHighlights({ items }) {
  return (
    <section className={styles.highlights} data-aos="fade-up" data-aos-duration={800} data-aos-delay={150} aria-label="Sorotan program donasi">
      {items.map((item) => (
        <article key={item.title} className={styles.highlightCard}>
          <div className={styles.highlightIcon} aria-hidden="true">
            <i className={item.icon} />
          </div>
          <div>
            <h3 className={styles.highlightTitle}>{item.title}</h3>
            <p className={styles.highlightBody}>{item.description}</p>
          </div>
        </article>
      ))}
    </section>
  );
}

function StepTabs({ steps, activeStep, onSelect }) {
  return (
    <div className={styles.stepTabs} role="tablist" aria-label="Alur donasi">
      {steps.map((step) => {
        const isActive = step.id === activeStep;
        return (
          <button
            key={step.id}
            type="button"
            className={isActive ? styles.stepTabActive : styles.stepTab}
            aria-current={isActive ? "step" : undefined}
            aria-controls={step.controls}
            onClick={() => onSelect(step)}
          >
            <span className={styles.stepIndex}>{step.index}</span>
            <span>{step.label}</span>
          </button>
        );
      })}
    </div>
  );
}

function PresetChips({ values, activeValue, onSelect, onCustomRequest, groupLabelId }) {
  const isCustomSelected = !values.includes(activeValue);

  return (
    <div
      className={styles.presetList}
      role="radiogroup"
      aria-labelledby={groupLabelId}
      aria-describedby={`${groupLabelId}-helper`}
    >
      {values.map((value) => {
        const isActive = activeValue === value;
        const label = `Rp${new Intl.NumberFormat("id-ID").format(value)}`;
        return (
          <div
            key={value}
            className={isActive ? styles.presetChipActive : styles.presetChip}
            tabIndex={0}
            role="radio"
            aria-checked={isActive}
            onClick={() => onSelect(value)}
            onKeyDown={(event) => {
              if (event.key === " " || event.key === "Enter") {
                event.preventDefault();
                onSelect(value);
              }
            }}
          >
            {label}
          </div>
        );
      })}
      <div
        className={isCustomSelected ? styles.presetChipActive : styles.presetChip}
        tabIndex={0}
        role="radio"
        aria-checked={isCustomSelected}
        onClick={onCustomRequest}
        onKeyDown={(event) => {
          if (event.key === " " || event.key === "Enter") {
            event.preventDefault();
            onCustomRequest();
          }
        }}
      >
        Nominal lain
      </div>
    </div>
  );
}

function DonationFormCard({
  formId,
  programId,
  setProgramId,
  programAktif,
  progressValue,
  nominal,
  setNominal,
  method,
  setMethod,
  onSubmit,
  activeStep,
  setActiveStep,
  nominalInputRef,
  contributionOptions,
}) {
  const steps = useMemo(
    () => [
      { id: "program", index: "1", label: "Program", controls: "programStep" },
      { id: "nominal", index: "2", label: "Nominal", controls: "nominalStep" },
      { id: "method", index: "3", label: "Metode & Pesan", controls: "methodStep" },
    ],
    []
  );

  const cappedProgress = Number.isFinite(progressValue) ? Math.min(Math.max(progressValue, 0), 100) : 0;
  const remainingProgress = Math.max(0, Math.round(100 - cappedProgress));
  const progressSummary =
    cappedProgress >= 100
      ? "Target program telah terpenuhi. Dukungan baru akan dialokasikan ke kegiatan lanjutan."
      : `Sudah tercapai ${Math.round(cappedProgress)}% target; kekurangan ${remainingProgress}% lagi untuk kebutuhan penuh.`;

  return (
    <section className={styles.formSection} id={formId} data-aos="fade-up" data-aos-duration={900}>
      <div className={styles.formCard}>
        <header className={styles.formHeader}>
          <div>
            <h3 className={styles.formTitle}>Formulir Dukungan Dana Sosial</h3>
            <p id="donationFormHelper" className={styles.formSubtitle}>
              Isi data sesuai kebutuhan program. Tim sekretariat akan menghubungi Anda untuk konfirmasi lanjutan.
            </p>
          </div>
          <StepTabs
            steps={steps}
            activeStep={activeStep}
            onSelect={(step) => {
              setActiveStep(step.id);
              const target = document.getElementById(step.controls);
              if (target) {
                target.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
          />
        </header>

        <form className={styles.form} onSubmit={onSubmit} aria-describedby="donationFormHelper">
          <div className={styles.formHelperStrip} role="note">
            <div className={styles.helperItem}>
              <i className="fa-solid fa-bullseye" aria-hidden="true" />
              <span>Target: <strong>{programAktif?.target ?? "-"}</strong></span>
            </div>
            {programAktif?.penanggungJawab ? (
              <div className={styles.helperItem}>
                <i className="fa-solid fa-user-shield" aria-hidden="true" />
                <span>Penanggung jawab: <strong>{programAktif.penanggungJawab}</strong></span>
              </div>
            ) : null}
          </div>

          <fieldset
            id="programStep"
            className={styles.formFieldset}
            onFocusCapture={() => setActiveStep("program")}
          >
            <legend className={styles.fieldsetLegend}>Pilih Program Dana</legend>
            <p className={styles.fieldsetHelper}>{programAktif?.description}</p>
            <label htmlFor="programId" className="sr-only">
              Pilih program dana sosial yang ingin didukung
            </label>
            <select
              className={styles.select}
              id="programId"
              name="programId"
              value={programId}
              onChange={(event) => setProgramId(event.target.value)}
            >
              {danaSosialPrograms.map((program) => (
                <option key={program.id} value={program.id}>
                  {program.title}
                </option>
              ))}
            </select>

            <div className={styles.progressBarWrapper} aria-hidden="true">
              <div
                className={styles.progressBar}
                role="progressbar"
                aria-valuenow={Math.round(cappedProgress)}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <span className={styles.progressIndicator} style={{ width: `${cappedProgress}%` }}>
                  <span className={styles.progressValue}>{Math.round(cappedProgress)}%</span>
                </span>
              </div>
            </div>
            <p className={styles.progressCaption}>
              <i className="fa-solid fa-circle-info" aria-hidden="true" />
              <span>{progressSummary}</span>
            </p>
          </fieldset>

          <fieldset
            id="nominalStep"
            className={styles.formFieldset}
            onFocusCapture={() => setActiveStep("nominal")}
          >
            <legend className={styles.fieldsetLegend} id="presetNominalLabel">
              Nominal Donasi (Rp)
            </legend>
            <p className={styles.fieldsetHelper} id="presetNominalLabel-helper">
              Minimal Rp50.000. Pilih cepat atau masukkan angka sendiri.
            </p>
            <div className={styles.inputGroupIcon}>
              <div className={styles.inputIcon} aria-hidden="true">
                <i className="fa-solid fa-rupiah-sign" />
              </div>
              <input
                ref={nominalInputRef}
                className={styles.numberInput}
                type="number"
                id="nominal"
                name="nominal"
                min={50_000}
                step={50_000}
                value={Number.isFinite(nominal) ? nominal : ""}
                onChange={(event) => setNominal(Number(event.target.value))}
                placeholder="Masukkan nominal lain"
                onFocus={() => setActiveStep("nominal")}
              />
            </div>
            <PresetChips
              values={donationPresets}
              activeValue={nominal}
              groupLabelId="presetNominalLabel"
              onSelect={(value) => setNominal(value)}
              onCustomRequest={() => {
                setActiveStep("nominal");
                setNominal(0);
                nominalInputRef.current?.focus();
              }}
            />
          </fieldset>

          <fieldset
            id="methodStep"
            className={styles.formFieldset}
            onFocusCapture={() => setActiveStep("method")}
          >
            <legend className={styles.fieldsetLegend}>Metode Kontribusi &amp; Pesan</legend>
            <div className={styles.radioWrapper} role="radiogroup" aria-label="Metode Kontribusi">
              {contributionOptions.map(({ id, label, helper }) => {
                const isChecked = method === id;
                return (
                  <label key={id} className={isChecked ? styles.radioOptionActive : styles.radioOption}>
                    <input
                      type="radio"
                      name="metode"
                      value={id}
                      checked={isChecked}
                      onChange={(event) => setMethod(event.target.value)}
                    />
                    <span className={styles.radioLabel}>{label}</span>
                    {helper ? <span className={styles.radioHelper}>{helper}</span> : null}
                  </label>
                );
              })}
            </div>
            <label htmlFor="pesan" className={styles.fieldsetLegendSecondary}>
              Pesan atau catatan tambahan (opsional)
            </label>
            <div className={styles.textareaWrapper}>
              <textarea
                id="pesan"
                name="pesan"
                className={styles.textarea}
                placeholder="Tuliskan kebutuhan khusus atau informasi tambahan"
              />
              <i className="fa-solid fa-comments" aria-hidden="true" />
            </div>
          </fieldset>

          <div className={styles.formActions}>
            <button type="submit" className={styles.primaryButton}>
              Kirim Dukungan <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            </button>
          </div>
          <p className={styles.formDisclaimer}>
            <i className="fa-solid fa-shield-halved" aria-hidden="true" />
            <span>Data donatur tersimpan aman dan hanya digunakan untuk konfirmasi resmi PPSI.</span>
          </p>
        </form>
      </div>
    </section>
  );
}

function TransparencyAside({ allocationPlans, reportingContacts, whatsappLink }) {
  return (
    <aside className={styles.aside} aria-label="Transparansi dan kontak donasi">
      <div className={styles.asideCard} data-aos="fade-up" data-aos-duration={900} data-aos-delay={100}>
        <div className={styles.asideHeader}>
          <i className="fa-solid fa-diagram-project" aria-hidden="true" />
          <h3>Rencana Penyaluran Dana</h3>
        </div>
        <ul className={styles.asideList}>
          {allocationPlans.map((plan) => (
            <li key={plan.title}>
              <strong>{plan.title}</strong>
              <p>{plan.description}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.asideCard} data-aos="fade-up" data-aos-duration={900} data-aos-delay={140}>
        <div className={styles.asideHeader}>
          <i className="fa-solid fa-file-shield" aria-hidden="true" />
          <h3>Transparansi &amp; Pelaporan</h3>
        </div>
        <p>
          Laporan triwulan dikirim ke perguruan penerima. Sertakan bukti transfer dan penggunaan dana untuk verifikasi sekretariat.
        </p>
        <ul className={styles.contactList}>
          {reportingContacts.map((contact) => {
            const isExternal = contact.href.startsWith("http");
            return (
              <li key={contact.label}>
                <a href={contact.href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noreferrer" : undefined}>
                  <i className={contact.icon} aria-hidden="true" />
                  {contact.display}
                </a>
              </li>
            );
          })}
        </ul>
        <Link href="/contact-us" className={styles.secondaryButton}>
          Hubungi PPSI <i className="fa-solid fa-arrow-right" aria-hidden="true" />
        </Link>
        {whatsappLink ? (
          <a href={whatsappLink} className={styles.mutedLink} target="_blank" rel="noreferrer">
            <i className="fa-brands fa-whatsapp" aria-hidden="true" /> Chat Sekretariat
          </a>
        ) : null}
      </div>
    </aside>
  );
}

function ImpactTestimonials({ testimonials }) {
  if (!testimonials.length) return null;
  return (
    <section className={styles.testimonials} data-aos="fade-up" data-aos-duration={800} data-aos-delay={180} aria-label="Suara penerima manfaat">
      <header className={styles.testimonialHeader}>
        <i className="fa-solid fa-quote-left" aria-hidden="true" />
        <div>
          <h3>Dampak Donasi Anda</h3>
          <p>Testimoni singkat dari penggerak dan atlet yang menerima manfaat langsung.</p>
        </div>
      </header>
      <div className={styles.testimonialList}>
        {testimonials.map((item) => (
          <article key={item.id} className={styles.testimonialCard}>
            <p className={styles.testimonialQuote}>&ldquo;{item.quote}&rdquo;</p>
            <div className={styles.testimonialMeta}>
              <span className={styles.testimonialName}>{item.name}</span>
              <span className={styles.testimonialRole}>{item.role}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function DonateInner() {
  const fallbackProgram = danaSosialPrograms?.[0] ?? null;
  const [programId, setProgramId] = useState(() => fallbackProgram?.id ?? "");
  const [nominal, setNominal] = useState(500_000);
  const [method, setMethod] = useState(() => contributionMethods[0]?.id ?? "transfer");
  const [activeStep, setActiveStep] = useState("program");

  const nominalInputRef = useRef(null);

  const programAktif = danaSosialPrograms.find((program) => program.id === programId) ?? fallbackProgram;
  const progressValue = Number(programAktif?.progress ?? 0);
  const whatsappLink = buildWhatsappLink(contactInfo.whatsapp);
  const formId = "donation-form";

  const highlightItems = useMemo(
    () => [
      {
        title: "Prioritas Penyaluran 2025",
        description: "Fokus utama: beasiswa pelatih, dukungan atlet pasanggiri, dan santunan kesehatan darurat anggota.",
        icon: "fa-solid fa-diagram-project",
      },
      {
        title: "Monitoring & Transparansi",
        description: "Perkembangan target selalu diperbarui melalui progress bar, laporan triwulan, dan dashboard perguruan.",
        icon: "fa-solid fa-chart-line",
      },
      {
        title: "Pendampingan Donatur",
        description: "Tim sekretariat siap membantu proposal CSR, kolektif perguruan, hingga konfirmasi bukti transfer.",
        icon: "fa-solid fa-bolt",
      },
      {
        title: "Update Dampak Langsung",
        description: "Statistik perguruan aktif dan testimoni penerima manfaat dibagikan berkala melalui kanal resmi PPSI.",
        icon: "fa-solid fa-people-group",
      },
    ],
    []
  );

  const allocationPlans = useMemo(
    () => [
      { title: "Beasiswa Pelatih", description: "Subsidi sertifikasi, modul pembinaan, dan peningkatan kompetensi." },
      { title: "Dukungan Atlet Pasanggiri", description: "Transportasi, akomodasi, dan perlengkapan tanding kejuaraan." },
      { title: "Santunan Kesehatan", description: "Bantuan darurat anggota dan keluarga saat kondisi kritis." },
    ],
    []
  );

  const reportingContacts = useMemo(() => {
    const contacts = [
      { label: "Email Sekretariat", href: `mailto:${contactInfo.email}`, icon: "fa-solid fa-envelope", display: contactInfo.email },
      { label: "Telepon", href: `tel:${contactInfo.phone}`, icon: "fa-solid fa-phone", display: contactInfo.phone },
    ];
    if (whatsappLink) {
      contacts.push({ label: "WhatsApp", href: whatsappLink, icon: "fa-brands fa-whatsapp", display: contactInfo.whatsapp });
    }
    return contacts;
  }, [whatsappLink]);

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      const programTitle = programAktif?.title ?? "program dana sosial PPSI Digjaya";
      const formattedNominal = nominal > 0 ? `Rp${new Intl.NumberFormat("id-ID").format(nominal)}` : "nominal yang akan dikonfirmasi";
      const methodLabel = contributionMethods.find((option) => option.id === method)?.label ?? "metode kontribusi";
      window.alert(
        `Terima kasih atas dukungan Anda untuk ${programTitle} melalui ${methodLabel} sebesar ${formattedNominal}. Tim sekretariat akan menghubungi Anda untuk konfirmasi berikutnya.`
      );
    } catch (error) {
      window.alert("Terjadi kendala saat mengirim data. Silakan coba lagi atau hubungi sekretariat.");
      // Placeholder untuk integrasi API mendatang
      console.error(error);
    }
  };

  return (
    <section className={styles.wrapper} aria-label="Donasi Dana Sosial PPSI Digjaya">
      <DonateHero stats={defaultImpactStats} formAnchorId={formId} />

      <div className={styles.contentGrid}>
        <div className={styles.mainColumn}>
          <DonationHighlights items={highlightItems} />
          <DonationFormCard
            formId={formId}
            programId={programId}
            setProgramId={setProgramId}
            programAktif={programAktif}
            progressValue={progressValue}
            nominal={nominal}
            setNominal={setNominal}
            method={method}
            setMethod={setMethod}
            onSubmit={handleSubmit}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            nominalInputRef={nominalInputRef}
            contributionOptions={contributionMethods}
          />
          <ImpactTestimonials testimonials={testimonialsFallback} />
        </div>

        <TransparencyAside
          allocationPlans={allocationPlans}
          reportingContacts={reportingContacts}
          whatsappLink={whatsappLink}
        />
      </div>
    </section>
  );
}
