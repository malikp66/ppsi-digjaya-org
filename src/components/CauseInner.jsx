"use client";
import Link from "next/link";
import ProgressBar from "../helper/ProgressBar";
import { programBudaya, danaSosialPrograms } from "@/data/programs";

const CauseInner = () => {
  return (
    <section className='cause cause-three-alt'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-12 col-md-8 col-xl-6'>
            <div className='section__header mb-60 text-center'>
              <span className='sub-title'>
                <i className='icon-donation' />
                Program &amp; Kegiatan PPSI Digjaya
              </span>
              <h2 className='title-animation_inner'>
                Pelestarian <span>budaya</span> dan pembinaan prestasi
              </h2>
            </div>
          </div>
        </div>

        <div className='row gutter-30'>
          {programBudaya.map((program, index) => (
            <div className='col-12 col-md-6 col-xl-4' key={program.id}>
              <div
                className='cause__slider-inner'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={index * 150}
              >
                <div className='cause__slider-single van-tilt'>
                  <div className='thumb'>
                    <Link href='/cause-details'>
                      <img src={`/assets/images/cause/${index + 1}.png`} alt='Image_inner' />
                    </Link>
                    <div className='tag'>
                      <Link href='/our-causes'>{program.kategori[0]}</Link>
                    </div>
                  </div>
                  <div className='content'>
                    <h6>
                      <Link href='/cause-details'>{program.title}</Link>
                    </h6>
                    <p>{program.description}</p>
                    <p className='event-meta'>
                      <i className='fa-solid fa-location-dot' /> {program.lokasi}
                    </p>
                    <p className='event-meta'>
                      <i className='fa-solid fa-calendar-days' /> {program.jadwal}
                    </p>
                  </div>
                  <div className='cause__slider-cta'>
                    <div className='cause__cta'>
                      <Link href='/events' className='btn--secondary'>
                        Lihat Agenda
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='row justify-content-center mt-60'>
          <div className='col-12 col-md-8 col-xl-6'>
            <div className='section__header text-center'>
              <span className='sub-title'>
                <i className='icon-donation' />
                Dana Sosial &amp; Dukungan Atlet
              </span>
              <h2 className='title-animation_inner'>
                Wujudkan <span>kemandirian</span> atlet dan pelatih
              </h2>
            </div>
          </div>
        </div>

        <div className='row gutter-30'>
          {danaSosialPrograms.map((program, index) => (
            <div className='col-12 col-lg-4' key={program.id}>
              <div
                className='cause__slider-inner'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={index * 150}
              >
                <div className='cause__slider-single van-tilt'>
                  <div className='thumb'>
                    <Link href='/donate-us'>
                      <img src={`/assets/images/cause/${index + 1}.png`} alt='Image_inner' />
                    </Link>
                    <div className='tag'>
                      <Link href='/donate-us'>Dana Sosial</Link>
                    </div>
                  </div>
                  <div className='content'>
                    <h6>
                      <Link href='/donate-us'>{program.title}</Link>
                    </h6>
                    <p>{program.description}</p>
                    <p className='event-meta'>
                      <i className='fa-solid fa-user' /> Penanggung jawab: {program.penanggungJawab}
                    </p>
                  </div>
                  <div className='cause__slider-cta'>
                    <div className='cause__progress progress-bar-single'>
                      <ProgressBar percent={program.progress} />
                      <div className='cause-progress__goal'>
                        <p>
                          Target: <span className='goal'>{program.target}</span>
                        </p>
                      </div>
                    </div>
                    <div className='cause__cta'>
                      <Link href='/donate-us' className='btn--secondary'>
                        Dukung Program
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CauseInner;
