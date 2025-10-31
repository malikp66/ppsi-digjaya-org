"use client";
import { useState } from "react";
import { danaSosialPrograms } from "@/data/programs";
import { contactInfo } from "@/data/contact";

const DonateInner = () => {
  const [programId, setProgramId] = useState(danaSosialPrograms[0].id);
  const [nominal, setNominal] = useState(500000);

  const programAktif = danaSosialPrograms.find((program) => program.id === programId);

  const handleSubmit = (event) => {
    event.preventDefault();
    window.alert("Terima kasih atas dukungan Anda kepada program dana sosial PPSI Digjaya.");
  };

  return (
    <div className='cm-details donate-us'>
      <div className='container'>
        <div className='row gutter-60'>
          <div className='col-12 col-xl-8'>
            <div className='cm-details__content'>
              <div className='donate-inner'>
                <div className='cm-group'>
                  <span className='sub-title'>
                    <i className='icon-donation' />
                    Dana Sosial &amp; Dukungan Atlet PPSI Digjaya
                  </span>
                  <h3 className='title-animation_inner'>Salurkan energi untuk prestasi dan pelestarian silat</h3>
                  <p>
                    Kontribusi Anda digunakan untuk pembinaan atlet tradisi, beasiswa pelatih, dan santunan kesehatan
                    anggota. PPSI Digjaya memastikan penyaluran dana dilakukan secara transparan dengan laporan
                    berkala kepada perguruan.
                  </p>
                </div>

                <div className='community-donation'>
                  <div className='community-donation__inner'>
                    <div className='warning'>
                      <div className='line'>
                        <i className='fa-solid fa-triangle-exclamation' />
                      </div>
                      <p>
                        <strong>Informasi:</strong> Form ini simulasi frontend. Untuk transfer resmi, sekretariat akan
                        menghubungi Anda setelah formulir terkirim.
                      </p>
                    </div>
                    <form className='donation-form' onSubmit={handleSubmit}>
                      <div className='donation-form__single'>
                        <h5>Pilih Program Dana</h5>
                        <select value={programId} onChange={(event) => setProgramId(event.target.value)}>
                          {danaSosialPrograms.map((program) => (
                            <option key={program.id} value={program.id}>
                              {program.title}
                            </option>
                          ))}
                        </select>
                        <p className='info'>{programAktif?.description}</p>
                        <div className='progress-bar-wrapper'>
                          <div className='progress-bar'>
                            <div
                              className='progress-bar-percent'
                              style={{ width: `${programAktif?.progress ?? 0}%` }}
                            >
                              <span className='percent-value'>{programAktif?.progress}%</span>
                            </div>
                          </div>
                        </div>
                        <div className='cause-progress__goal'>
                          <p>
                            Target: <span className='goal'>{programAktif?.target}</span>
                          </p>
                        </div>
                      </div>

                      <div className='donation-form__single'>
                        <h5>Nominal Donasi (Rp)</h5>
                        <div className='input-group-icon'>
                          <div className='thumb'>
                            <i className='fa-solid fa-rupiah-sign' />
                          </div>
                          <input
                            type='number'
                            min={50000}
                            value={nominal}
                            onChange={(event) => setNominal(Number(event.target.value))}
                          />
                        </div>
                        <div className='made-amount'>
                          {[200000, 500000, 1000000, 2000000].map((preset) => (
                            <span
                              key={preset}
                              className={`donation-amount ${nominal === preset ? "active" : ""}`}
                              onClick={() => setNominal(preset)}
                            >
                              {preset.toLocaleString("id-ID")}
                            </span>
                          ))}
                          <span
                            className={`donation-amount custom-amount ${nominal === 0 ? "active" : ""}`}
                            onClick={() => setNominal(0)}
                          >
                            Custom
                          </span>
                        </div>
                      </div>

                      <div className='donation-form__single'>
                        <h5>Metode Kontribusi</h5>
                        <div className='radio-wrapper'>
                          <div className='radio-single'>
                            <input type='radio' id='transfer' name='metode' defaultChecked />
                            <label htmlFor='transfer'>Transfer Bank PPSI</label>
                          </div>
                          <div className='radio-single'>
                            <input type='radio' id='iuran' name='metode' />
                            <label htmlFor='iuran'>Iuran Perguruan / Kolektif</label>
                          </div>
                          <div className='radio-single'>
                            <input type='radio' id='sponsor' name='metode' />
                            <label htmlFor='sponsor'>Sponsor &amp; CSR</label>
                          </div>
                        </div>
                      </div>

                      <div className='donation-form__single alter-input'>
                        <textarea name='pesan' placeholder='Pesan atau catatan tambahan (opsional)' />
                        <i className='fa-solid fa-comments' />
                      </div>

                      <div className='form-cta'>
                        <button type='submit' className='btn--primary'>
                          Kirim Dukungan <i className='fa-solid fa-arrow-right' />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                <div className='volunteer__content membership-card'>
                  <h4>Transparansi Dana</h4>
                  <p>
                    Laporan dana sosial diterbitkan setiap triwulan. Perguruan penerima wajib melaporkan
                    penggunaan dana dan perkembangan atlet. Hubungi sekretariat untuk informasi lebih lanjut.
                  </p>
                  <ul className='training__list'>
                    <li>
                      <div>
                        <h6>Kontak Sekretariat</h6>
                        <p>{contactInfo.phone}</p>
                      </div>
                      <span>{contactInfo.email}</span>
                    </li>
                    <li>
                      <div>
                        <h6>Alamat Kantor</h6>
                        <p>{contactInfo.address}</p>
                      </div>
                      <a href={contactInfo.mapUrl} className='link'>
                        Lihat Peta <i className='fa-solid fa-arrow-right' />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className='col-12 col-xl-4'>
            <aside className='cm-sidebar'>
              <div className='cm-sidebar-widget'>
                <div className='intro'>
                  <h5>Rencana Penyaluran Dana</h5>
                </div>
                <ul className='training__list'>
                  <li>
                    <div>
                      <h6>Beasiswa Pelatih</h6>
                      <p>Subsidi sertifikasi dan modul pembinaan.</p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h6>Dukungan Atlet Pasanggiri</h6>
                      <p>Transportasi, akomodasi, dan peralatan tanding.</p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h6>Santunan Kesehatan</h6>
                      <p>Bantuan anggota dan keluarga dalam kondisi kritis.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className='cm-sidebar-widget'>
                <div className='intro'>
                  <h5>Saluran Pelaporan</h5>
                </div>
                <p>
                  Kirim bukti transfer dan laporan penggunaan dana ke email sekretariat. Tim kami akan memverifikasi
                  dan memperbarui dashboard perguruan.
                </p>
                <Link href='/contact-us' className='btn--primary' aria-label='hubungi ppsi'>
                  Hubungi PPSI <i className='fa-solid fa-arrow-right' />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateInner;
