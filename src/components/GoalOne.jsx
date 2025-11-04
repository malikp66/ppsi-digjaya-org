import Link from "next/link";
import OptimizedImage from "@/components/common/OptimizedImage";

const GoalOne = () => {
  return (
    <section className='fc-goal pt-120'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-12 col-lg-6 col-xl-5'>
            <div className='goal__content text-center mb-60'>
              <h5 className='title-animation_inner fw-7'>
                Apa pun minat pengabdianmu, PPSI menyediakan wadah untuk
                berkarya.
              </h5>
            </div>
          </div>
        </div>
        <div className='row gutter-30'>
          <div className='col-12 col-md-6 col-xl-4'>
            <div className='goal__single'>
              <div className='thumb'>
                <h2 className='fw-8'>42</h2>
              </div>
              <div className='content'>
                <h6 className='fw-8'>Perguruan</h6>
                <p>Pembinaan perguruan anggota</p>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6 col-xl-4'>
            <div className='goal__single goal__single-active'>
              <div className='thumb'>
                <h2 className='fw-8'>73</h2>
              </div>
              <div className='content'>
                <h6 className='fw-8'>Komunitas</h6>
                <p>Kegiatan budaya &amp; pasanggiri</p>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6 col-xl-4'>
            <div className='goal__single'>
              <div className='thumb'>
                <h2 className='fw-8'>09</h2>
              </div>
              <div className='content'>
                <h6 className='fw-8'>Program</h6>
                <p>Dukungan riset &amp; pendidikan</p>
              </div>
            </div>
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-12 col-xl-10'>
            <div className='goal__inner mt-120'>
              <div className='goal__left'>
                <h4 className='fw-7 hb'>
                  Tujuan kami merawat warisan pencak silat nusantara
                </h4>
                <Link href='/become-volunteer'>
                  Jadi penggerak PPSI
                  <i className='fa-solid fa-arrow-right' />
                </Link>
              </div>
              <div className='goal__right'>
                <Link
                  href='/become-volunteer'
                  aria-label='Daftar Program PPSI'
                  title='Daftar Program PPSI'
                  className='btn--primary'
                >
                  Daftar Program <i className='icon-heart' />
                </Link>
              </div>
              <OptimizedImage src='assets/images/fc-three.png' alt='Image_inner' />
            </div>
          </div>
        </div>
      </div>
      <div className='fc-one'>
        <OptimizedImage src='assets/images/fc-four.png' alt='Image_inner' />
      </div>
    </section>
  );
};

export default GoalOne;
