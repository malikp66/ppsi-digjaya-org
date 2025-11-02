import Link from "next/link";

const author = {
  name: "Galih Suryana",
  role: "Koordinator Media PPSI Digjaya",
  bio: "Galih mendokumentasikan perkembangan pencak silat tradisional Jawa Barat dan menghubungkan padepokan dari Sabang sampai Merauke.",
  photo: "assets/images/author-two.png",
  alt: "Potret Galih Suryana",
};

const recentPosts = [
  {
    image: "assets/images/blog/ph-one.png",
    alt: "Latihan gabungan pesilat remaja PPSI Digjaya",
    date: "12 Januari 2025",
    title: "Latihan Gabungan Pesilat Remaja di Padepokan Digjaya",
    href: "/blog-details",
  },
  {
    image: "assets/images/blog/ph-two.png",
    alt: "Pesilat tradisional melakukan jurus di Cirebon",
    date: "28 Desember 2024",
    title: "Ekspedisi Jurus Pusaka ke Padepokan Cirebon Girang",
    href: "/blog-details",
  },
  {
    image: "assets/images/blog/three.png",
    alt: "Delegasi PPSI Digjaya menerima piagam warisan budaya",
    date: "20 November 2024",
    title: "PPSI Digjaya Dukung Pencak Silat Masuk Agenda UNESCO",
    href: "/blog-details",
  },
];

const categories = [
  { label: "Festival & Kejuaraan", total: 12 },
  { label: "Pelatihan", total: 8 },
  { label: "Budaya", total: 6 },
  { label: "Komunitas", total: 9 },
  { label: "Heritage", total: 4 },
];

const tags = [
  "festival",
  "pencak silat",
  "cimande",
  "tradisi sunda",
  "warisan budaya",
  "ppsi digjaya",
];

const BlogDetailsInner = () => {
  return (
    <section className='blog-main cm-details'>
      <div className='container'>
        <div className='row gutter-60'>
          <div className='col-12 col-xl-8'>
            <div className='cm-details__content'>
              <div
                className='cm-details__poster'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <img
                  src='assets/images/event/poster.png'
                  alt='Poster Festival Pencak Silat Tradisional Priangan 2024'
                />
              </div>
              <div className='cm-details-meta'>
                <p>
                  <i className='fa-solid fa-calendar-days' />
                  12 Januari 2025
                </p>
                <p>
                  <i className='fa-solid fa-location-dot' />
                  Padepokan PPSI Digjaya, Bandung, Jawa Barat
                </p>
              </div>
              <div className='cm-group cta'>
                <h3 className='title-animation_inner'>
                  Festival Pencak Silat Tradisional Priangan 2024: Merawat
                  Warisan dari Tanah Sunda
                </h3>
                <p>
                  Lebih dari 5.000 penonton memenuhi Padepokan PPSI Digjaya
                  ketika gong pembuka festival dipukul oleh para sesepuh
                  Cimande. Festival ini menghadirkan 32 padepokan dari seluruh
                  Jawa Barat dengan ragam aliran seperti Cimande, Cikalong,
                  Sera, dan Syahbandar yang menampilkan jurus khas disertai
                  iringan musik tradisional.
                </p>
                <p>
                  Agenda utama festival meliputi gelaran jurus tunggal tradisi,
                  rampak gendang, hingga workshop pembuatan iket tilu. Peserta
                  termuda berasal dari Kabupaten Tasikmalaya berusia 9 tahun,
                  sementara peserta tertua adalah Abah Anom Sukarja, maestro
                  berusia 78 tahun yang masih aktif mengajar jurus pamacan.
                </p>
                <p>
                  Selain pertunjukan, festival juga menjadi ruang diskusi
                  lintas padepokan untuk menyepakati standar dokumentasi jurus
                  tradisi yang akan diajukan ke Direktorat Warisan Budaya. PPSI
                  Digjaya memfasilitasi pendataan naskah jurus dan arsip audio
                  untuk memastikan warisan ini tetap lestari di tengah arus
                  modernisasi.
                </p>
              </div>
              <div className='cm-group cta'>
                <div className='blockquote-wrapper'>
                  <blockquote>
                    "Pencak silat bukan sekadar bela diri, melainkan bahasa jiwa
                    urang Sunda yang menuntun kita untuk silih asah, silih asih,
                    jeung silih asuh."
                  </blockquote>
                  <p>
                    <span className='line' />
                    <span className='quote-owner'>Maestro Iyan Sutyana</span>
                  </p>
                </div>
              </div>
              <div className='cm-group cta'>
                <h3 className='title-animation_inner'>Sorotan Penting</h3>
                <p>
                  Festival tahun ini menandai babak baru upaya pelestarian
                  pencak silat tradisional di Jawa Barat dengan kolaborasi
                  lintas pemangku kepentingan.
                </p>
                <div className='cm-details__list'>
                  <ul>
                    <li>
                      <i className='icon-circle-check' />
                      Penandatanganan pakta bersama 32 padepokan untuk berbagi
                      arsip jurus klasik.
                    </li>
                    <li>
                      <i className='icon-circle-check' />
                      Peluncuran pusat data digital PPSI Digjaya mengenai
                      silsilah guru-guru besar pencak silat.
                    </li>
                    <li>
                      <i className='icon-circle-check' />
                      Workshop dokumentasi gerak menggunakan teknologi motion
                      capture sederhana.
                    </li>
                    <li>
                      <i className='icon-circle-check' />
                      Penyerahan piagam penghargaan kepada empat maestro atas
                      dedikasi lebih dari 40 tahun.
                    </li>
                    <li>
                      <i className='icon-circle-check' />
                      Deklarasi regenerasi pesilat perempuan melalui program
                      "Srikandi Lagar".
                    </li>
                    <li>
                      <i className='icon-circle-check' />
                      Penggalangan dana untuk renovasi padepokan tua di
                      Sumedang.
                    </li>
                  </ul>
                </div>
              </div>
              <div className='cm-img-group cta'>
                <div className='cm-img-single'>
                  <img
                    src='assets/images/event/pp-one.png'
                    alt='Pesilat menampilkan jurus Cimande di panggung utama'
                  />
                </div>
                <div className='cm-img-single'>
                  <img
                    src='assets/images/event/pp-two.png'
                    alt='Sesepuh dan pesilat muda berfoto bersama usai festival'
                  />
                </div>
              </div>
              <div className='details-footer cta'>
                <div className='details-tag'>
                  <div className='tag-header'>
                    <h6>Tag:</h6>
                  </div>
                  <div className='tag-wrapper'>
                    <Link href='/blog-grid'>Festival</Link>
                    <Link href='/blog-grid'>Budaya</Link>
                  </div>
                </div>
                <div className='details-tag'>
                  <div className='tag-header'>
                    <h6>Bagikan:</h6>
                  </div>
                  <div className='social'>
                    <a
                      href='https://www.facebook.com/'
                      target='_blank'
                      aria-label='Bagikan ke Facebook'
                      title='facebook'
                      rel='noreferrer'
                    >
                      <i className='fa-brands fa-facebook-f' />
                    </a>
                    <a
                      href='https://vimeo.com/'
                      target='_blank'
                      aria-label='Bagikan ke Vimeo'
                      title='vimeo'
                      rel='noreferrer'
                    >
                      <i className='fa-brands fa-vimeo-v' />
                    </a>
                    <a
                      href='https://x.com/'
                      target='_blank'
                      aria-label='Bagikan ke X'
                      title='twitter'
                      rel='noreferrer'
                    >
                      <i className='fa-brands fa-twitter' />
                    </a>
                    <a
                      href='https://www.linkedin.com/'
                      target='_blank'
                      aria-label='Bagikan ke LinkedIn'
                      title='linkedin'
                      rel='noreferrer'
                    >
                      <i className='fa-brands fa-linkedin-in' />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className='blog-comment'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <div className='comment-header mb-40'>
                  <h4 className='mt-8 title-animation_inner'>03 Komentar</h4>
                </div>
                <div className='comment-single'>
                  <div className='thumb'>
                    <img
                      src='assets/images/author-four.png'
                      alt='Potret Rina Mulyani'
                    />
                  </div>
                  <div className='comment-single__content'>
                    <h5>Rina Mulyani</h5>
                    <p>
                      Salut untuk PPSI Digjaya yang konsisten mengangkat
                      padepokan kecil. Anak-anak di Majalengka jadi punya ruang
                      tampil dan percaya diri melestarian jurus keluarga.
                    </p>
                    <div className='comment-single__meta'>
                      <button title='suka' className='single'>
                        <i className='icon-heart' /> Suka
                      </button>
                      <div className='reply-button'>
                        <button aria-label='Balas komentar'>
                          <i className='fa-solid fa-reply' />
                          Balas
                        </button>
                      </div>
                      <p>2 jam lalu</p>
                    </div>
                    <div className='reply-comment'>
                      <form action='#' method='post'>
                        <div className='input-group'>
                          <div className='input-single'>
                            <textarea
                              placeholder='Tulis balasan Anda...'
                              required=''
                              defaultValue=''
                            />
                          </div>
                          <div className='btn-wrapper'>
                            <button type='submit' className='btn--secondary'>
                              Balas
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className='comment-single'>
                  <div className='thumb'>
                    <img
                      src='assets/images/author-two.png'
                      alt='Potret Wahyu Sasmita'
                    />
                  </div>
                  <div className='comment-single__content'>
                    <h5>Wahyu Sasmita</h5>
                    <p>
                      Dokumentasi gerak dengan motion capture itu ide brilian.
                      Semoga bisa jadi bahan ajar digital supaya generasi Z
                      semakin dekat dengan pencak silat tradisi.
                    </p>
                    <div className='comment-single__meta'>
                      <button title='suka' className='single'>
                        <i className='icon-heart' /> Suka
                      </button>
                      <div className='reply-button'>
                        <button aria-label='Balas komentar'>
                          <i className='fa-solid fa-reply' />
                          Balas
                        </button>
                      </div>
                      <p>5 jam lalu</p>
                    </div>
                    <div className='reply-comment'>
                      <form action='#' method='post'>
                        <div className='input-group'>
                          <div className='input-single'>
                            <textarea
                              placeholder='Tulis balasan Anda...'
                              required=''
                              defaultValue=''
                            />
                          </div>
                          <div className='btn-wrapper'>
                            <button type='submit' className='btn--secondary'>
                              Balas
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className='comment-single'>
                  <div className='thumb'>
                    <img
                      src='assets/images/author-three.png'
                      alt='Potret Adi Prakoso'
                    />
                  </div>
                  <div className='comment-single__content'>
                    <h5>Adi Prakoso</h5>
                    <p>
                      Mohon teruskan program regenerasi pesilat perempuan.
                      Banyak siswi di sekolah saya yang tertarik, kami siap jadi
                      tuan rumah klinik singkat.
                    </p>
                    <div className='comment-single__meta'>
                      <button title='suka' className='single'>
                        <i className='icon-heart' /> Suka
                      </button>
                      <div className='reply-button'>
                        <button aria-label='Balas komentar'>
                          <i className='fa-solid fa-reply' />
                          Balas
                        </button>
                      </div>
                      <p>1 hari lalu</p>
                    </div>
                    <div className='reply-comment'>
                      <form action='#' method='post'>
                        <div className='input-group'>
                          <div className='input-single'>
                            <textarea
                              placeholder='Tulis balasan Anda...'
                              required=''
                              defaultValue=''
                            />
                          </div>
                          <div className='btn-wrapper'>
                            <button type='submit' className='btn--secondary'>
                              Balas
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div
                  className='comment__form mt-120'
                  data-aos='fade-up'
                  data-aos-duration={1000}
                  data-aos-delay={100}
                >
                  <div className='comment-header mb-40'>
                    <h4 className='mt-8 fw-6 title-animation_inner'>
                      Tinggalkan Komentar
                    </h4>
                  </div>
                  <form action='#' method='post'>
                    <div className='form-group'>
                      <div className='input-icon'>
                        <input
                          type='text'
                          required=''
                          name='comment-name'
                          id='commentName'
                          placeholder='Nama Anda'
                        />
                        <i className='fa-solid fa-user' />
                      </div>
                      <div className='input-icon'>
                        <input
                          type='email'
                          required=''
                          name='comment-email'
                          id='commentEmail'
                          placeholder='Alamat Email'
                        />
                        <i className='fa-regular fa-envelope' />
                      </div>
                    </div>
                    <div className='input-icon input-icon-alt'>
                      <textarea
                        name='comment-message'
                        id='commentMessage'
                        cols={30}
                        rows={10}
                        placeholder='Tulis komentar Anda...'
                        defaultValue=''
                      />
                      <i className='fa-regular fa-comments' />
                    </div>
                    <div className='cta mt-40'>
                      <div className='btn-wrapper'>
                        <button type='submit' className='btn--secondary'>
                          Kirim Komentar
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 col-xl-4'>
            <div className='blog-main__sidebar'>
              <div
                className='cm-details-author cm-sidebar-widget'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <div className='author-thumb'>
                  <img src={author.photo} alt={author.alt} />
                </div>
                <div className='author-meta'>
                  <h6>{author.name}</h6>
                  <p>{author.role}</p>
                  <p>{author.bio}</p>
                </div>
                <div className='social'>
                  <a
                    href='https://www.facebook.com/'
                    target='_blank'
                    aria-label='Bagikan ke Facebook'
                    title='facebook'
                    rel='noreferrer'
                  >
                    <i className='fa-brands fa-facebook-f' />
                  </a>
                  <a
                    href='https://vimeo.com/'
                    target='_blank'
                    aria-label='Bagikan ke Vimeo'
                    title='vimeo'
                    rel='noreferrer'
                  >
                    <i className='fa-brands fa-vimeo-v' />
                  </a>
                  <a
                    href='https://x.com/'
                    target='_blank'
                    aria-label='Bagikan ke X'
                    title='twitter'
                    rel='noreferrer'
                  >
                    <i className='fa-brands fa-twitter' />
                  </a>
                  <a
                    href='https://www.linkedin.com/'
                    target='_blank'
                    aria-label='Bagikan ke LinkedIn'
                    title='linkedin'
                    rel='noreferrer'
                  >
                    <i className='fa-brands fa-linkedin-in' />
                  </a>
                </div>
              </div>
              <div className='cm-details__sidebar'>
                <div
                  className='cm-sidebar-widget'
                  data-aos='fade-up'
                  data-aos-duration={1000}
                  data-aos-delay={100}
                >
                  <div className='intro'>
                    <h5>Cari Berita</h5>
                  </div>
                  <form action='#' method='post'>
                    <input
                      type='text'
                      name='search-product'
                      id='searchProduct'
                      placeholder='Cari berita pencak silat...'
                      required=''
                    />
                    <button type='submit' aria-label='Cari berita'>
                      <i className='fa-solid fa-magnifying-glass' />
                    </button>
                  </form>
                </div>
                <div
                  className='cm-sidebar-widget'
                  data-aos='fade-up'
                  data-aos-duration={1000}
                  data-aos-delay={100}
                >
                  <div className='intro'>
                    <h5>Berita Terkini</h5>
                  </div>
                  <div className='cm-sidebar-post'>
                    {recentPosts.map((post) => (
                      <div className='single-item' key={post.title}>
                        <div className='thumb'>
                          <Link href={post.href}>
                            <img src={post.image} alt={post.alt} />
                          </Link>
                        </div>
                        <div className='content'>
                          <p>
                            <i className='fa-solid fa-calendar-days' />{" "}
                            <span>{post.date}</span>
                          </p>
                          <p>
                            <Link href={post.href}>{post.title}</Link>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  className='cm-sidebar-widget'
                  data-aos='fade-up'
                  data-aos-duration={1000}
                  data-aos-delay={100}
                >
                  <div className='intro'>
                    <h5>Kategori</h5>
                  </div>
                  <div className='cm-categories'>
                    {categories.map((item) => (
                      <Link href='/blog-grid' key={item.label}>
                        <span>{item.label}</span>
                        <span>{String(item.total).padStart(2, "0")}</span>
                      </Link>
                    ))}
                  </div>
                </div>
                <div
                  className='cm-sidebar-widget'
                  data-aos='fade-up'
                  data-aos-duration={1000}
                  data-aos-delay={100}
                >
                  <div className='intro'>
                    <h5>Tag Populer</h5>
                  </div>
                  <div className='tag-wrapper'>
                    {tags.map((tag) => (
                      <Link href='/blog-grid' key={tag}>
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsInner;

