import Link from "next/link";

const agendaPosts = [
  {
    id: "pasanggiri",
    image: "assets/images/blog/one.png",
    tag: "Pasanggiri",
    author: "Sekretariat PPSI",
    statLabel: "Pendaftar",
    statValue: "32",
    title: "Pasanggiri Pencak Silat Tradisi Jawa Barat 2025",
    href: "/blog-details",
  },
  {
    id: "pelatihan",
    image: "assets/images/blog/two.png",
    tag: "Pelatihan",
    author: "Divisi Pembinaan",
    statLabel: "Slot",
    statValue: "45",
    title: "Workshop Sertifikasi Pelatih Angkatan IV",
    href: "/blog-details",
  },
  {
    id: "festival",
    image: "assets/images/blog/three.png",
    tag: "Budaya",
    author: "Bidang Budaya",
    statLabel: "Peserta",
    statValue: "120",
    title: "Festival Seni Pencak & Pameran Arsip Sunda",
    href: "/blog-details",
  },
];

const BlogOne = () => {
  return (
    <section className='blog'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-12 col-md-8 col-xl-7'>
            <div
              className='section__header text-center'
              data-aos='fade-up'
              data-aos-duration={1000}
            >
              <span className='sub-title'>
                <i className='icon-donation' />
                Agenda &amp; Kalender Budaya
              </span>
              <h2 className='title-animation_inner'>
                Agenda &amp; <span>Pasanggiri</span> Terbaru
              </h2>
            </div>
          </div>
        </div>
        <div className='row gutter-40'>
          {agendaPosts.map((post, index) => (
            <div className='col-12 col-lg-6 col-xl-4' key={post.id}>
              <div
                className='blog__single-wrapper'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={index * 300}
              >
                <div className='blog__single van-tilt'>
                  <div className='blog__single-thumb'>
                    <Link href={post.href}>
                      <img src={post.image} alt='Image_inner' />
                    </Link>
                    <div className='tag'>
                      <Link href='/blog-list'>
                        <i className='fa-solid fa-tags' />
                        {post.tag}
                      </Link>
                    </div>
                  </div>
                  <div className='blog__single-inner'>
                    <div className='blog__single-meta'>
                      <p>
                        <i className='icon-user' />
                        {post.author}
                      </p>
                      <p>
                        <i className='icon-message' />
                        {post.statLabel} ({post.statValue})
                      </p>
                    </div>
                    <div className='blog__single-content'>
                      <h5>
                        <Link href={post.href}>{post.title}</Link>
                      </h5>
                    </div>
                    <div className='blog__single-cta'>
                      <Link
                        href={post.href}
                        aria-label='detail agenda'
                        title={post.title}
                      >
                        Detail Agenda
                        <i className='fa-solid fa-circle-arrow-right' />
                      </Link>
                    </div>
                  </div>
                  <img
                    src='assets/images/blog/spade.png'
                    alt='Image_inner'
                    className='spade-two'
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='row'>
          <div className='col-12'>
            <div className='section__cta cta text-center'>
              <Link
                href='/blog-list'
                aria-label='agenda lengkap'
                title='Agenda PPSI Digjaya'
                className='btn--primary'
              >
                Lihat Semua Agenda <i className='fa-solid fa-arrow-right' />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='blog-bg'>
        <img src='assets/images/blog/blog-bg.png' alt='Image_inner' />
      </div> */}
      {/* <div className='spade'>
        <img
          src='assets/images/blog/spade-base.png'
          alt='Image_inner'
          className='base-img'
        />
      </div> */}
    </section>
  );
};

export default BlogOne;
