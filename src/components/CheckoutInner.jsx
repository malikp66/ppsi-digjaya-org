const CheckoutInner = () => {
  return (
    <section className='checkout'>
      <div className='container'>
        <div className='row gutter-60'>
          <div className='col-12 col-lg-6'>
            <div
              className='checkout__form'
              data-aos='fade-up'
              data-aos-duration={1000}
              data-aos-delay={100}
            >
              <div className='intro'>
                <h5>Informasi Pengambilan</h5>
              </div>
              <form action='#' method='post'>
                <div className='input-group'>
                  <div className='input-single'>
                    <input
                      type='text'
                      name='c-name'
                      id='cName'
                      placeholder='Nama Lengkap'
                      required=''
                    />
                    <i className='fa-solid fa-user' />
                  </div>
                  <div className='input-single'>
                    <input
                      type='text'
                      name='c-lastname'
                      id='clastName'
                      placeholder='Perguruan / Instansi'
                      required=''
                    />
                    <i className='fa-solid fa-user' />
                  </div>
                </div>
                <div className='input-group'>
                  <div className='input-single'>
                    <input
                      type='text'
                      name='c-address'
                      id='cAddress'
                      placeholder='Alamat Lengkap'
                      required=''
                    />
                    <i className='fa-solid fa-location-dot' />
                  </div>
                  <div className='input-single'>
                    <input
                      type='text'
                      name='c-Kota / Kabupaten'
                      id='cKota / Kabupaten'
                      placeholder='Kota / Kabupaten'
                      required=''
                    />
                    <i className='fa-solid fa-location-dot' />
                  </div>
                </div>
                <div className='input-single'>
                  <input
                    type='text'
                    name='c-address-two'
                    id='cAddressTwo'
                    placeholder='Catatan Lokasi (opsional)'
                    required=''
                  />
                  <i className='fa-solid fa-location-dot' />
                </div>
                <div className='input-single'>
                  <input
                    type='text'
                    name='c-address-three'
                    id='cAddressThree'
                    placeholder='Kontak Darurat'
                    required=''
                  />
                  <i className='fa-solid fa-location-dot' />
                </div>
                <div className='input-group'>
                  <div className='input-single'>
                    <input
                      type='number'
                      name='c-zip'
                      id='cZip'
                      placeholder='Kode Pos'
                      required=''
                    />
                    <i className='fa-solid fa-location-dot' />
                  </div>
                  <div className='input-single'>
                    <input
                      type='text'
                      name='contact-number'
                      id='contactNumber'
                      placeholder='Nomor WhatsApp'
                      required=''
                    />
                    <i className='fa-solid fa-user' />
                  </div>
                </div>
                <div className='input-single alter-input'>
                  <textarea
                    name='contact-message'
                    id='contactMessage'
                    placeholder='Kebutuhan tambahan (opsional)'
                    defaultValue={""}
                  />
                  <i className='fa-solid fa-envelope' />
                </div>
                <div className='form-cta'>
                  <button
                    type='submit'
                    aria-label='submit message'
                    title='submit message'
                    className='btn--primary'
                  >
                    Simpan Data <i className='fa-solid fa-arrow-right' />
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className='col-12 col-lg-6'>
            <div
              className='checkout__content'
              data-aos='fade-up'
              data-aos-duration={1000}
              data-aos-delay={100}
            >
              <div className='intro'>
                <h5>Ringkasan Pembayaran</h5>
              </div>
              <form action='#' method='post'>
                <div className='content'>
                  <div className='content-single'>
                    <p>SubTotal</p>
                    <p>$345Rp750Rp25Rp775.00000</p>
                  </div>
                  <div className='content-single'>
                    <p>Biaya Admin</p>
                    <p>$34Rp750Rp25Rp775.00000</p>
                  </div>
                  <div className='content-single content-single-alt'>
                    <input
                      type='text'
                      required=''
                      name='promo-code'
                      id='promoCode'
                      placeholder='Masukkan Kode Promo'
                    />
                    <button
                      type='submit'
                      aria-label='promo code'
                      title='promo code'
                      className='btn--primary'
                    >
                      Gunakan Kode
                    </button>
                  </div>
                  <div className='content-inner'>
                    <div className='Total'>
                      <h6>Total</h6>
                      <h6>$379Rp750Rp25Rp775.00000</h6>
                    </div>
                    <div className='radio-wrapper inner'>
                      <div className='radio-single'>
                        <input
                          type='radio'
                          id='testDonation'
                          name='donation-payment'
                          defaultChecked=''
                        />
                        <label htmlFor='testDonation'>Transfer Bank PPSI</label>
                      </div>
                      <div className='radio-single'>
                        <input
                          type='radio'
                          id='cardDonation'
                          name='donation-payment'
                          defaultChecked=''
                        />
                        <label htmlFor='cardDonation'>Virtual Account</label>
                      </div>
                      <div className='radio-single'>
                        <input
                          type='radio'
                          id='offlineDonation'
                          name='donation-payment'
                          defaultChecked=''
                        />
                        <label htmlFor='offlineDonation'>
                          Pembayaran di Sekretariat
                        </label>
                      </div>
                    </div>
                    <div className='form-cta'>
                      <button
                        type='submit'
                        aria-label='submit message'
                        title='submit message'
                        className='btn--primary'
                      >
                        Konfirmasi Pembayaran <i className='fa-solid fa-arrow-right' />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutInner;

