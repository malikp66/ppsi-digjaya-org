const FaqOne = () => {
  return (
    <section className='faq'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-12 col-lg-8 col-xl-6'>
            <div className='faq__content'>
              <div
                className='section__content'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                <span className='sub-title'>
                  <i className='icon-donation' />
                  Pertanyaan Umum PPSI Digjaya
                </span>
                <h2 className='title-animation_inner'>
                  Tanya <span>Jawab</span> Organisasi
                </h2>
              </div>
              <div
                className='faq__content-inner cta'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <div className='accordion' id='accordion'>
                  <div className='accordion-item'>
                    <h6 className='accordion-header' id='headingOne'>
                      <button
                        className='accordion-button'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseOne'
                        aria-expanded='true'
                        aria-controls='collapseOne'
                      >
                        Bagaimana proses registrasi keanggotaan PPSI Digjaya?
                      </button>
                    </h6>
                    <div
                      id='collapseOne'
                      className='accordion-collapse collapse show'
                      aria-labelledby='headingOne'
                      data-bs-parent='#accordion'
                    >
                      <div className='accordion-body'>
                        <p>
                          Calon anggota mengisi formulir keanggotaan daring PPSI Digjaya. Setelah verifikasi data dan pembayaran iuran, kartu anggota akan diterbitkan serta akun akses materi siap digunakan.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h6 className='accordion-header' id='headingTwo'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseTwo'
                        aria-expanded='false'
                        aria-controls='collapseTwo'
                      >
                        Apa syarat perguruan bergabung dengan PPSI?
                      </button>
                    </h6>
                    <div
                      id='collapseTwo'
                      className='accordion-collapse collapse'
                      aria-labelledby='headingTwo'
                      data-bs-parent='#accordion'
                    >
                      <div className='accordion-body'>
                        <p>
                          Calon anggota mengisi formulir keanggotaan daring PPSI Digjaya. Setelah verifikasi data dan pembayaran iuran, kartu anggota akan diterbitkan serta akun akses materi siap digunakan.
                        </p>
                        <p>Perguruan mengajukan surat rekomendasi dari pengurus daerah, melampirkan data anggota, dan mengikuti orientasi kode etik PPSI Digjaya.</p>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h6 className='accordion-header' id='headingThree'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseThree'
                        aria-expanded='false'
                        aria-controls='collapseThree'
                      >
                        Bagaimana mekanisme penyaluran dana sosial PPSI?
                      </button>
                    </h6>
                    <div
                      id='collapseThree'
                      className='accordion-collapse collapse'
                      aria-labelledby='headingThree'
                      data-bs-parent='#accordion'
                    >
                      <div className='accordion-body'>
                        <p>Dana disalurkan melalui rekening resmi PPSI Digjaya dengan pengesahan pengurus. Setiap penyaluran disertai berita acara dan laporan penggunaan dari perguruan penerima.</p>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h6 className='accordion-header' id='headingFour'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseFour'
                        aria-expanded='false'
                        aria-controls='collapseFour'
                      >
                        Bagaimana pelaporan kegiatan dan program ke sekretariat?
                      </button>
                    </h6>
                    <div
                      id='collapseFour'
                      className='accordion-collapse collapse'
                      aria-labelledby='headingFour'
                      data-bs-parent='#accordion'
                    >
                      <div className='accordion-body'>
                        <p>Setiap perguruan menyampaikan laporan kegiatan dan keuangan melalui email sekretariat dan dashboard organisasi setiap triwulan.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-4 col-xl-5 offset-xl-1'>
            <div className='faq__thumb d-none d-lg-block'>
              <div className='faq__thumb-inner'>
                <div
                  className='thumb-lg'
                  data-aos='fade-up'
                  data-aos-duration={1000}
                  data-aos-delay={100}
                >
                  <img src='assets/images/faq/thumb-lg.png' alt='Image_inner' />
                </div>
                <div
                  className='thumb-sm'
                  data-aos='fade-left'
                  data-aos-duration={1000}
                  data-aos-delay={300}
                >
                  <img src='assets/images/faq/thumb-sm.png' alt='Image_inner' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='shape d-none d-lg-block'>
        <img src='assets/images/faq/shape.png' alt='Image_inner' />
      </div>
    </section>
  );
};

export default FaqOne;


