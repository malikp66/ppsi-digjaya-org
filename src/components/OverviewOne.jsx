import Link from "next/link";

const OverviewOne = () => {
  return (
    <section className='overview'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div
              className='overview__inner'
              data-aos='fade-up'
              data-aos-duration={1000}
              data-aos-delay={100}
            >
              <div className='overview__single overview__left'>
                <h4>Total Dana Terkumpul</h4>
                <div className='cause__progress progress-bar-single'>
                  <div className='cause-progress__bar'>
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
                <div className='cause-progress__goal'>
                  <div className='goal-single'>
                    <span>Terkumpul</span>
                    <h5>Rp408.020.000</h5>
                  </div>
                  <div className='goal-single'>
                    <span>Target</span>
                    <h5>Rp1.000.000.000</h5>
                  </div>
                </div>
              </div>
              <div className='overview__single overview__right'>
                <span>Pelestarian Budaya</span>
                <h4>
                  <Link href='/cause-details'>
                    Air bersih untuk padepokan PPSI
                  </Link>
                </h4>
                <p>
                  PPSI Digjaya menyiapkan akses air bersih bagi padepokan
                  latihan serta menggerakkan kepedulian sosial pesilat melalui
                  aksi nyata di lingkungan mereka.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewOne;
