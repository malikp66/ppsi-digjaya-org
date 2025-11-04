import Link from "next/link";
import { kepengurusanDPW } from "@/data/organization";
import OptimizedImage from "@/components/common/OptimizedImage";

const TeamTwo = () => {
  const pengurusImages = [
    "assets/images/team/Ketua_Umum.jpg",
    "assets/images/team/two.png",
    "assets/images/team/three.png",
    "assets/images/team/four.png",
  ];

  const cards = kepengurusanDPW.slice(0, 4);

  return (
    <section
      className='team'
      style={{
        backgroundImage: "url(/assets/images/bg-one.png)",
      }}
    >
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-12 col-lg-10 col-xl-6'>
            <div
              className='section__header text-center'
              data-aos='fade-up'
              data-aos-duration={1000}
            >
              <span className='sub-title'>
                <i className='icon-donation' />
                Pengurus PPSI Digjaya
              </span>
              <h2 className='title-animation_inner'>
                Pengurus <span>DPW Jawa Barat</span>
              </h2>
            </div>
          </div>
        </div>
        <div className='row gutter-40'>
          {cards.map((pengurus, index) => (
            <div className='col-12 col-sm-6 col-xl-3' key={pengurus.nama}>
              <div
                className='team__single-wrapper'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={index ? index * 300 : undefined}
              >
                <div className='team__single van-tilt'>
                  <div className='team__single-thumb'>
                    <Link href='/team-details'>
                      <OptimizedImage src={pengurusImages[index % pengurusImages.length]} alt='Image_inner' />
                    </Link>
                    <div className='team__icons'>
                      <div className='team__single-content__icon'>
                        <i className='fa-solid fa-plus' />
                      </div>
                      <div className='team__single__thumb-social'>
                        <ul>
                          <li>
                            <Link href='/'>
                              <i className='fa-brands fa-facebook-f' />
                            </Link>
                          </li>
                          <li>
                            <Link href='/'>
                              <i className='fa-brands fa-twitter' />
                            </Link>
                          </li>
                          <li>
                            <Link href='/'>
                              <i className='fa-brands fa-instagram' />
                            </Link>
                          </li>
                          <li>
                            <Link href='/'>
                              <i className='fa-brands fa-behance' />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className='team__single-content'>
                    <h6>
                      <Link href='/team-details'>{pengurus.nama}</Link>
                    </h6>
                    <p>{pengurus.jabatan}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='row'>
          <div className='col-12'>
            <div className='section__cta cta text-center'>
              <Link
                href='/manajemen-organisasi'
                aria-label='struktur ppsi'
                title='Struktur PPSI'
                className='btn--primary'
              >
                Lihat Struktur Lengkap
                <i className='fa-solid fa-arrow-right' />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='spade'>
        <OptimizedImage src='assets/images/sprade-green.png' alt='Image_inner' />
      </div> */}
    </section>
  );
};

export default TeamTwo;



