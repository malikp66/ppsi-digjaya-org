import Link from "next/link";
import OptimizedImage from "@/components/common/OptimizedImage";

const BannerFour = () => {
  return (
    <section className='banner-four banner-two'>
      <div className='container'>
        <div className='row justify-content-end'>
          <div className='col-12 col-md-8 col-lg-7 col-xl-6'>
            <div className='banner-four__content'>
              <span className='sub-title'>Kami selalu terbuka untuk generasi muda</span>
              <h2 className='title-animation_inner mt-0'>
                Give support <br />
                to poverties &amp; Old non profit Care
              </h2>
              <p>
                ppsi is the world's driving worldwide coordinations
                supplier — we uphold industry and exchange the worldwide trade
                of mercha
              </p>
              <div className='banner__content-cta cta'>
                <Link
                  href='/our-causes'
                  aria-label='contact us'
                  title='contact us'
                  className='btn--primary'
                >
                  Check your causes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='thumb d-none d-md-block'>
        <OptimizedImage
          src='assets/images/banner/banner-four-thumb.png'
          alt='Image_inner'
        />
      </div>
      <div className='fc-one'>
        <OptimizedImage src='assets/images/fc-seven.png' alt='Image_inner' />
      </div>
      <div className='fc-two'>
        <OptimizedImage src='assets/images/fc-eight.png' alt='Image_inner' />
      </div>
      <div className='fc-three'>
        <OptimizedImage src='assets/images/fc-one.png' alt='Image_inner' />
      </div>
      <div className='fc-four'>
        <OptimizedImage src='assets/images/fc-thirteen.png' alt='Image_inner' />
      </div>
    </section>
  );
};

export default BannerFour;
