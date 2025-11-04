"use client";

const TopBarThree = () => {
  
  return (
    <div className="topbar topbar--secondary d-none d-lg-block">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="topbar__inner">
              <div className="row align-items-center">
                <div className="col-12 col-lg-6 col-xxl-4">
                  <div className="topbar__list-wrapper">
                    <ul className="topbar__list">
                      <li>
                        <a href='mailto:dpdppsikotabandungofficial@gmail.com'>
                          <i className='fa-regular fa-envelope' />
                          dpdppsikotabandungofficial@gmail.com
                        </a>
                      </li>
                      <li>
                        <a href='tel:6282129251959'>
                          <i className='fa-solid fa-phone' />
                          082129251959
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-lg-6 col-xxl-4">
                  <div className="topbar__items justify-content-end">
                    <div className="social">
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noreferrer"
                        title="facebook"
                      >
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                      <a
                        href="https://x.com/"
                        target="_blank"
                        rel="noreferrer"
                        title="twitter"
                      >
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                      <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noreferrer"
                        title="linkedin"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
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
