const VolunteerInner = () => {
  return (
    <section className='volunteer'>
      <div className='container'>
        <div className='row gutter-40'>
          <div className='col-12 col-xl-6'>
            <div className='volunteer__content'>
              <div className='section__content'>
                <span className='sub-title'>
                  <i className='icon-donation' /> Forum Kolaborasi PPSI
                </span>
                <h2 className='title-animation_inner'>
                  Kolaborasi Program
                </h2>
                <p>
                  Kolaborasi ini ditujukan bagi perguruan, komunitas budaya, dan mitra yang ingin mengintegrasikan program bersama PPSI Digjaya.
                </p>
              </div>
              <div className='warning'>
                <div className='line'>
                  <i className='fa-solid fa-triangle-exclamation' />
                </div>
                <p>
                  <strong>Informasi:</strong> Form ini simulasi frontend. Tim PPSI akan menghubungi Anda untuk penjadwalan pertemuan tindak lanjut.
                </p>
              </div>
              <div className='progress-wrapper'>
                <div className='cause__progress progress-bar-single'>
                  <div className='cause-progress__bar'>
                    <p>Agenda Terlaksana</p>
                    <div className='progress-bar-wrapper' data-percent='70%'>
                      <div className='progress-bar'>
                        <div
                          className='progress-bar-percent'
                          style={{ width: "70%" }}
                        >
                          <span className='percent-value'>70%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='cause__progress progress-bar-single'>
                  <div className='cause-progress__bar'>
                    <p>Kolaborasi Aktif</p>
                    <div className='progress-bar-wrapper' data-percent='85%'>
                      <div className='progress-bar'>
                        <div
                          className='progress-bar-percent'
                          style={{ width: "85%" }}
                        >
                          <span className='percent-value'>85%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='team-details__list'>
                <ul>
                  <li>
                    <i className='icon-circle-check' />
                    Pendampingan desain program
                  </li>
                  <li>
                    <i className='icon-circle-check' />
                    Sumber daya pelatih dan narasumber
                  </li>
                  <li>
                    <i className='icon-circle-check' />
                    Sinergi promosi bersama
                  </li>
                  <li>
                    <i className='icon-circle-check' />
                    Monitoring & evaluasi berkala
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-12 col-xl-6'>
            <div
              className='volunteer__form checkout__form'
              data-aos='fade-up'
              data-aos-duration={1000}
              data-aos-delay={100}
            >
              <div className='volunteer__form-content'>
                <h4 className='title-animation_inner'>Ajukan Kolaborasi</h4>
                <p>
                  Lengkapi data berikut agar kami dapat menghubungi Anda dan merancang kolaborasi.
                </p>
              </div>
              <form action='#' method='post' className='cta'>
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
                      placeholder='Nama Perguruan / Instansi'
                      required=''
                    />
                    <i className='fa-solid fa-user' />
                  </div>
                </div>
                <div className='input-single'>
                  <input
                    type='email'
                    name='c-email'
                    id='cEmail'
                    placeholder='Enter Email'
                    required=''
                  />
                  <i className='fa-solid fa-envelope' />
                </div>
                <div className='input-group'>
                  <div className='input-single'>
                    <input
                      type='text'
                      name='phone-number'
                      id='phoneNumber'
                      placeholder='Phone Number'
                      required=''
                    />
                    <i className='fa-solid fa-phone' />
                  </div>
                  <div className='input-single'>
                    <input
                      type='text'
                      name='profession'
                      id='profession'
                      placeholder='Bidang Kolaborasi'
                      required=''
                    />
                    <i className='fa-solid fa-user-tie' />
                  </div>
                </div>
                <div className='input-single alter-input'>
                  <textarea
                    name='contact-message'
                    id='contactMessage'
                    placeholder='Deskripsi singkat kolaborasi yang diusulkan'
                    defaultValue={""}
                  />
                  <i className='fa-solid fa-comments' />
                </div>
                <div className='form-cta'>
                  <button
                    type='submit'
                    aria-label='submit message'
                    title='submit message'
                    className='btn--primary'
                  >
                    Kirim Pengajuan <i className='fa-solid fa-arrow-right' />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerInner;

