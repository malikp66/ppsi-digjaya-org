import Link from "next/link";
import OptimizedImage from "@/components/common/OptimizedImage";

const CtaSectionTwo = () => {
  return (
    <section className='cta-section-two'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-12 col-lg-7'>
            <div className='cta__section__content'>
              <div
                className='section__content text-center'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                <span className='sub-title'>
                  <i className='icon-donation' />
                  Sinergi Perguruan dan Atlet
                </span>
                <h2 className='title-animation_inner'>
                  Mari bergabung menjaga warisan pencak silat tradisional bersama PPSI Digjaya
                </h2>
                <div className='banner__content-cta cta'>
                  <Link
                    href='/our-causes'
                    aria-label='program ppsi'
                    title='Program PPSI'
                    className='btn--tertiary'
                  >
                    Program PPSI <i className='fa-solid fa-arrow-right' />
                  </Link>
                  <Link
                    href='/keanggotaan'
                    aria-label='keanggotaan ppsi'
                    title='Keanggotaan PPSI'
                    className='btn--primary'
                  >
                    Gabung Keanggotaan <i className='fa-solid fa-arrow-right' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='cta-bg'>
        <OptimizedImage
          src='assets/images/cta/cta-bg.png'
          alt='Image_inner'
          className='parallax-image'
        />
      </div> */}
      {/* <div
        className='shape-left'
        data-aos='fade-right'
        data-aos-duration={1000}
        data-aos-delay={300}
      >
        <OptimizedImage src='assets/images/cta/shape-left.png' alt='Image_inner' />
      </div> */}
      {/* <div className='shape'>
        <OptimizedImage src='assets/images/shape-two.png' alt='Image_inner' />
      </div> */}
    </section>
  );
};

export default CtaSectionTwo;


