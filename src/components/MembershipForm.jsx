"use client";
import {
  sabukOptions,
  jenisKeanggotaan,
  statusKeaktifan,
  membershipPlans,
  riwayatIuranDummy,
  provinsiOptions,
  kotaOptions,
  kecamatanOptions,
  paymentMethodOptions,
  billingFrequencyOptions,
} from "@/data/membership";
import { contactInfo } from "@/data/contact";

const MembershipForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    window.alert("Formulir keanggotaan tersimpan. Tim PPSI Digjaya akan menghubungi Anda.");
  };

  return (
    <section className='volunteer membership'>
      <div className='container'>
        <div className='row gutter-40'>
          <div className='col-12 col-xl-7'>
            <div
              className='volunteer__form checkout__form'
              data-aos='fade-up'
              data-aos-duration={1000}
            >
              <div className='volunteer__form-content'>
                <span className='sub-title'>
                  <i className='icon-donation' />
                  Formulir Keanggotaan PPSI Digjaya
                </span>
                <h4 className='title-animation_inner'>Lengkapi data anggota</h4>
                <p>
                  Data digunakan untuk verifikasi perguruan, penerbitan sertifikat, dan akses program
                  pembinaan. Seluruh isian bersifat rahasia dan dikelola oleh Sekretariat PPSI Digjaya.
                </p>
              </div>

              <form className='cta membership-form' onSubmit={handleSubmit}>
                <div className='form-section'>
                  <h5>1. Data Identitas</h5>
                  <div className='input-group'>
                    <div className='input-single'>
                      <input type='text' name='nama-lengkap' placeholder='Nama Lengkap' required />
                      <i className='fa-solid fa-user' />
                    </div>
                    <div className='input-single'>
                      <input type='text' name='nomor-identitas' placeholder='NIK / Nomor Keanggotaan' required />
                      <i className='fa-solid fa-id-card' />
                    </div>
                  </div>
                  <div className='input-group'>
                    <div className='input-single'>
                      <input type='date' name='tanggal-lahir' placeholder='Tanggal Lahir' required />
                    </div>
                    <div className='input-single'>
                      <select name='jenis-kelamin' required defaultValue=''>
                        <option value='' disabled>
                          Jenis Kelamin
                        </option>
                        <option value='laki-laki'>Laki-laki</option>
                        <option value='perempuan'>Perempuan</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className='form-section'>
                  <h5>2. Kontak &amp; Domisili</h5>
                  <div className='input-group'>
                    <div className='input-single'>
                      <input type='email' name='email' placeholder='Email Aktif' required />
                      <i className='fa-solid fa-envelope' />
                    </div>
                    <div className='input-single'>
                      <input type='tel' name='telepon' placeholder='Nomor Telepon / WhatsApp' required />
                      <i className='fa-solid fa-phone' />
                    </div>
                  </div>
                  <div className='input-single alter-input'>
                    <textarea name='alamat-lengkap' placeholder='Alamat Lengkap' required />
                    <i className='fa-solid fa-map-location-dot' />
                  </div>
                  <div className='input-group'>
                    <div className='input-single'>
                      <select name='provinsi' required defaultValue=''>
                        <option value='' disabled>
                          Provinsi
                        </option>
                        {provinsiOptions.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className='input-single'>
                      <select name='kota' required defaultValue=''>
                        <option value='' disabled>
                          Kota / Kabupaten
                        </option>
                        {kotaOptions.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className='input-single'>
                      <select name='kecamatan' required defaultValue=''>
                        <option value='' disabled>
                          Kecamatan
                        </option>
                        {kecamatanOptions.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className='form-section'>
                  <h5>3. Keahlian &amp; Peran</h5>
                  <div className='input-group'>
                    <div className='input-single'>
                      <input type='text' name='perguruan' placeholder='Perguruan Asal' required />
                      <i className='fa-solid fa-building-columns' />
                    </div>
                    <div className='input-single'>
                      <select name='sabuk' required defaultValue=''>
                        <option value='' disabled>
                          Sabuk Saat Ini
                        </option>
                        {sabukOptions.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className='input-group'>
                    <div className='input-single'>
                      <select name='jenis-keanggotaan' required defaultValue=''>
                        <option value='' disabled>
                          Jenis Keanggotaan
                        </option>
                        {jenisKeanggotaan.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className='input-single'>
                      <input type='date' name='tanggal-gabung' placeholder='Tanggal Bergabung' required />
                    </div>
                    <div className='input-single'>
                      <select name='status-keaktifan' required defaultValue=''>
                        <option value='' disabled>
                          Status Keaktifan
                        </option>
                        {statusKeaktifan.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className='input-single'>
                    <input type='text' name='pekerjaan' placeholder='Pekerjaan / Latar Profesi' />
                    <i className='fa-solid fa-user-tie' />
                  </div>
                  <div className='input-single'>
                    <input type='text' name='referensi' placeholder='Referensi Perguruan / Pelatih' />
                    <i className='fa-solid fa-people-group' />
                  </div>
                  <div className='input-single alter-input'>
                    <textarea name='riwayat-prestasi' placeholder='Riwayat Prestasi / Keikutsertaan Program PPSI' />
                    <i className='fa-solid fa-trophy' />
                  </div>
                </div>

                <div className='form-section'>
                  <h5>4. Pembayaran Iuran</h5>
                  <div className='input-group'>
                    <div className='input-single'>
                      <select name='paket-keanggotaan' required defaultValue=''>
                        <option value='' disabled>
                          Pilihan Paket Keanggotaan
                        </option>
                        {membershipPlans.map((plan) => (
                          <option key={plan.id} value={plan.id}>
                            {plan.name} • {plan.fee}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className='input-single'>
                      <input type='number' name='biaya-iuran' placeholder='Nominal Iuran (Rp)' min='0' step='1000' required />
                      <i className='fa-solid fa-coins' />
                    </div>
                  </div>
                  <div className='input-group'>
                    <div className='input-single'>
                      <select name='metode-pembayaran' required defaultValue=''>
                        <option value='' disabled>
                          Metode Pembayaran
                        </option>
                        {paymentMethodOptions.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className='input-single'>
                      <select name='frekuensi-penagihan' required defaultValue=''>
                        <option value='' disabled>
                          Frekuensi Penagihan
                        </option>
                        {billingFrequencyOptions.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className='input-group'>
                    <div className='input-single upload-input'>
                      <input type='file' name='bukti-pembayaran' accept='.jpg,.jpeg,.png,.pdf' />
                      <i className='fa-solid fa-file-invoice-dollar' />
                      <span>Unggah Bukti Pembayaran (opsional)</span>
                    </div>
                    <div className='input-single alter-input'>
                      <textarea name='catatan-iuran' placeholder='Catatan tambahan (misal rekening tujuan, instruksi khusus)' />
                      <i className='fa-solid fa-clipboard-list' />
                    </div>
                  </div>
                  <div className='checkbox-single'>
                    <input type='checkbox' id='penagihan-otomatis' name='penagihan-otomatis' />
                    <label htmlFor='penagihan-otomatis'>
                      Saya menyetujui pengingat penagihan iuran otomatis melalui email atau WhatsApp.
                    </label>
                  </div>
                </div>

                <div className='form-section'>
                  <h5>5. Data Pendukung (Opsional)</h5>
                  <div className='input-group'>
                    <div className='input-single upload-input'>
                      <input type='file' name='foto-diri' accept='image/*' />
                      <i className='fa-solid fa-image' />
                      <span>Unggah Foto Diri (jpg/png)</span>
                    </div>
                    <div className='input-single'>
                      <input type='text' name='kontak-darurat' placeholder='Kontak Darurat' />
                      <i className='fa-solid fa-phone-volume' />
                    </div>
                  </div>
                  <div className='input-single alter-input'>
                    <textarea name='riwayat-kesehatan' placeholder='Riwayat Kesehatan (jika ada)' />
                    <i className='fa-solid fa-notes-medical' />
                  </div>
                </div>

                <div className='form-section'>
                  <h5>6. Persetujuan</h5>
                  <div className='checkbox-single'>
                    <input type='checkbox' id='persetujuan' required />
                    <label htmlFor='persetujuan'>
                      Saya menyatakan data yang diberikan benar serta bersedia mematuhi kode etik PPSI Digjaya.
                    </label>
                  </div>
                  <div className='checkbox-single'>
                    <input type='checkbox' id='syarat' required />
                    <label htmlFor='syarat'>
                      Saya telah membaca dan menyetujui syarat, ketentuan, serta kebijakan perlindungan data PPSI Digjaya.
                    </label>
                  </div>
                </div>

                <div className='form-cta'>
                  <button type='submit' className='btn--primary'>
                    Simpan Data Anggota <i className='fa-solid fa-arrow-right' />
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className='col-12 col-xl-5'>
            <aside className='membership-sidebar' data-aos='fade-up' data-aos-duration={1000} data-aos-delay={150}>
              <div className='membership-card membership-guide'>
                <h5>Panduan Keanggotaan</h5>
                <ul>
                  <li>
                    <i className='icon-circle-check' /> Pastikan data identitas sesuai dengan KTP atau kartu anggota perguruan.
                  </li>
                  <li>
                    <i className='icon-circle-check' /> Siapkan kontak darurat dan riwayat kesehatan untuk kebutuhan monitoring latihan.
                  </li>
                  <li>
                    <i className='icon-circle-check' /> Pilih paket iuran yang sesuai peran Anda dan unggah bukti pembayaran jika sudah transfer.
                  </li>
                </ul>
                <p>
                  Info lengkap persyaratan dan fasilitas tiap kategori keanggotaan tersedia di bawah ini atau hubungi tim kami melalui{" "}
                  <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>.
                </p>
              </div>

              <div className='volunteer__content membership-card'>
                <div className='section__content'>
                  <h5>Informasi Biaya Keanggotaan</h5>
                  <p>
                    Pilih paket iuran sesuai peran Anda. Pembayaran dapat dilakukan melalui transfer atau setoran ke
                    sekretariat PPSI Digjaya.
                  </p>
                </div>
                <div className='membership-plans'>
                  {membershipPlans.map((plan) => (
                    <div className='membership-plan' key={plan.id}>
                      <h6>{plan.name}</h6>
                      <span className='fee'>{plan.fee}</span>
                      <ul>
                        {plan.benefits.map((benefit) => (
                          <li key={benefit}>
                            <i className='icon-circle-check' /> {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className='membership-card membership-history'>
                <h5>Riwayat Iuran Anggota</h5>
                <table className='table'>
                  <thead>
                    <tr>
                      <th>Tanggal</th>
                      <th>Jenis</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {riwayatIuranDummy.map((item) => (
                      <tr key={item.tanggal}>
                        <td>{item.tanggal}</td>
                        <td>{item.jenis}</td>
                        <td>
                          <span className={`status status-${item.status.toLowerCase()}`}>{item.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className='info'>
                  Untuk konfirmasi pembayaran dan pengambilan kartu anggota, hubungi sekretariat PPSI Digjaya di{" "}
                  <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipForm;
