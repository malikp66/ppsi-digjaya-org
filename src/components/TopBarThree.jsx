const TopBarThree = () => {
  return (
    <div className='topbar topbar--tertiary d-none d-lg-block'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='topbar__inner'>
              <div className='row align-items-center'>
                <div className='col-12 col-lg-7'>
                  <div className='topbar__list-wrapper'>
                    <ul className='topbar__list'>
                      {/* <li>
                        <a
                          href='https://maps.app.goo.gl/Gr9pTNqz5FRNrjQw8'
                          target='_blank'
                          rel='noreferrer'
                        >
                          <i className='fa-solid fa-location-dot' />
                          Jl. Cijagra III No. 12, Kel. Turangga, Kec. Lengkong, Kota Bandung, 40264
                        </a>
                      </li> */}
                      <li>
                        <a href='mailto:dpdppsikotabandungofficial@gmail.com'>
                          <i className='fa-regular fa-envelope' />
                          dpdppsikotabandungofficial@gmail.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='col-12 col-lg-5'>
                  <div className='topbar__items justify-content-end'>
                    <p>
                      <a href='tel:6282129251959'>
                        <i className='fa-solid fa-phone' />
                        082129251959
                      </a>
                    </p>
                    <div className='social'>
                      <a
                        href='https://www.facebook.com/'
                        target='_blank'
                        aria-label='share us on facebook'
                        title='facebook'
                        rel='noreferrer'
                      >
                        <i className='fa-brands fa-facebook-f' />
                      </a>
                      <a
                        href='https://x.com/'
                        target='_blank'
                        aria-label='share us on twitter'
                        title='twitter'
                        rel='noreferrer'
                      >
                        <i className='fa-brands fa-twitter' />
                      </a>
                      <a
                        href='https://www.linkedin.com/'
                        target='_blank'
                        aria-label='share us on linkedin'
                        title='linkedin'
                        rel='noreferrer'
                      >
                        <i className='fa-brands fa-linkedin-in' />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBarThree;
