const CheckoutInner = () => {
  return (
    <section className='checkout'>
      <div className='container'>
        <div className='row gutter-60'>
          {/* FORM INFORMASI PEMBELI / PENGAMBIL */}
          <div className='col-12 col-lg-6'>
            <div
              className='checkout__form'
              data-aos='fade-up'
              data-aos-duration={1000}
              data-aos-delay={100}
            >
              <div className='intro'>
                <h5>Informasi Pengambilan / Pengiriman Atribut PPSI</h5>
                <p className='mb-0'>
                  Isi data sesuai anggota / perguruan yang melakukan pemesanan.
                </p>
              </div>
              <form action='#' method='post'>
                <div className='input-group'>
                  <div className='input-single'>
                    <input
                      type='text'
                      name='full-name'
                      id='fullName'
                      placeholder='Nama Lengkap'
                      required
                    />
                    <i className='fa-solid fa-user' />
                  </div>
                  <div className='input-single'>
                    <input
                      type='text'
                      name='organization'
                      id='organization'
                      placeholder='Perguruan / Instansi'
                      required
                    />
                    <i className='fa-solid fa-user' />
                  </div>
                </div>

                <div className='input-group'>
                  <div className='input-single'>
                    <input
                      type='text'
                      name='address'
                      id='address'
                      placeholder='Alamat Lengkap'
                      required
                    />
                    <i className='fa-solid fa-location-dot' />
                  </div>
                  <div className='input-single'>
                    <input
                      type='text'
                      name='city'
                      id='city'
                      placeholder='Kota / Kabupaten'
                      required
                    />
                    <i className='fa-solid fa-location-dot' />
                  </div>
                </div>

                <div className='input-single'>
                  <input
                    type='text'
                    name='address-note'
                    id='addressNote'
                    placeholder='Catatan lokasi / patokan (opsional)'
                  />
                  <i className='fa-solid fa-location-dot' />
                </div>

                <div className='input-single'>
                  <input
                    type='text'
                    name='emergency-contact'
                    id='emergencyContact'
                    placeholder='Kontak Darurat (nama & nomor)'
                  />
                  <i className='fa-solid fa-phone' />
                </div>

                <div className='input-group'>
                  <div className='input-single'>
                    <input
                      type='number'
                      name='zip'
                      id='zip'
                      placeholder='Kode Pos'
                      required
                    />
                    <i className='fa-solid fa-location-dot' />
                  </div>
                  <div className='input-single'>
                    <input
                      type='text'
                      name='whatsapp'
                      id='whatsapp'
                      placeholder='Nomor WhatsApp aktif'
                      required
                    />
                    <i className='fa-solid fa-user' />
                  </div>
                </div>

                <div className='input-single alter-input'>
                  <textarea
                    name='extra-needs'
                    id='extraNeeds'
                    placeholder='Kebutuhan tambahan (ukuran seragam, jadwal ambil, kirim via pengurus, dsb.)'
                    defaultValue={""}
                  />
                  <i className='fa-solid fa-envelope' />
                </div>

                <div className='form-cta'>
                  <button
                    type='submit'
                    aria-label='simpan data'
                    title='simpan data'
                    className='btn--primary'
                  >
                    Simpan Data <i className='fa-solid fa-arrow-right' />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* RINGKASAN PEMBAYARAN */}
          <div className='col-12 col-lg-6'>
            <div
              className='checkout__content'
              data-aos='fade-up'
              data-aos-duration={1000}
              data-aos-delay={100}
            >
              <div className='intro'>
                <h5>Ringkasan Pembayaran</h5>
                <p className='mb-0'>
                  Pembayaran ini untuk pemesanan atribut / merchandise resmi PPSI Digjaya.
                </p>
              </div>
              <form action='#' method='post'>
                <div className='content'>
                  <div className='content-single'>
                    <p>SubTotal</p>
                    <p>Rp345.000</p>
                  </div>
                  <div className='content-single'>
                    <p>Biaya Admin</p>
                    <p>Rp3.400</p>
                  </div>
                  <div className='content-single content-single-alt'>
                    <input
                      type='text'
                      name='promo-code'
                      id='promoCode'
                      placeholder='Masukkan Kode Promo (jika ada)'
                    />
                    <button
                      type='submit'
                      aria-label='gunakan kode'
                      title='gunakan kode'
                      className='btn--primary'
                    >
                      Gunakan Kode
                    </button>
                  </div>
                  <div className='content-inner'>
                    <div className='Total'>
                      <h6>Total</h6>
                      {/* 345.000 + 3.400 = 348.400 */}
                      <h6>Rp348.400</h6>
                    </div>

                    <div className='radio-wrapper inner'>
                      <div className='radio-single'>
                        <input
                          type='radio'
                          id='bankPPSI'
                          name='donation-payment'
                          defaultChecked
                        />
                        <label htmlFor='bankPPSI'>
                          Transfer ke Rekening PPSI
                        </label>
                      </div>
                      <div className='radio-single'>
                        <input
                          type='radio'
                          id='vaPPSI'
                          name='donation-payment'
                        />
                        <label htmlFor='vaPPSI'>
                          Virtual Account (simulasi)
                        </label>
                      </div>
                      <div className='radio-single'>
                        <input
                          type='radio'
                          id='officePay'
                          name='donation-payment'
                        />
                        <label htmlFor='officePay'>
                          Bayar di Sekretariat (Jl. Cijagra III No. 12, Bandung)
                        </label>
                      </div>
                    </div>

                    <div className='form-cta'>
                      <button
                        type='submit'
                        aria-label='konfirmasi pembayaran'
                        title='konfirmasi pembayaran'
                        className='btn--primary'
                      >
                        Konfirmasi Pembayaran{" "}
                        <i className='fa-solid fa-arrow-right' />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <p className='mt-20 mb-0 text-muted' style={{ fontSize: "0.85rem" }}>
                *Pembayaran bersifat simulasi (frontend saja). Silakan konfirmasi ke
                admin PPSI melalui WhatsApp 082129251959 setelah mengisi data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutInner;
