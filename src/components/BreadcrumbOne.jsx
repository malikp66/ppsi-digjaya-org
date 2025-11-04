import Link from "next/link";

const BreadcrumbOne = ({ title, ctaLabel, ctaHref }) => {
  return (
    <section className='common-banner'>
      <div className='container'>
        <div className='row'>
          <div className='common-banner__content text-center'>
            <span className='sub-title'>
              <i className='icon-donation' />
              Persatuan Pencak Silat Indonesia - PPSI Digjaya
            </span>
            <h2 className='title-animation_inner'>{title}</h2>
            {ctaLabel && ctaHref && (
              <div className='common-banner__cta'>
                <Link href={ctaHref} className='btn--primary btn--banner-cta'>
                  {ctaLabel}
                  <i className='fa-solid fa-arrow-down-long' />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* <div className='banner-bg'>
        <img src='assets/images/banner/banner-bg.png' alt='Image_inner' />
      </div> */}
      {/* <div className='sprade' data-aos='zoom-in' data-aos-duration={1000}>
        <img
          src='assets/images/sprade-base.png'
          alt='Image_inner'
          className='base-img'
        />
      </div> */}
    </section>
  );
};

export default BreadcrumbOne;
