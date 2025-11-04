import Link from "next/link";
import OptimizedImage from "@/components/common/OptimizedImage";

const gridPosts = [
  {
    image: "assets/images/blog/one.png",
    alt: "Dokumentasi festival pencak silat tradisional di Bandung",
    category: "Festival",
    author: "Tim Media PPSI Digjaya",
    comments: 5,
    title:
      "Festival Pencak Silat Tradisional Priangan 2024 Sukses Digelar di Bandung",
    href: "/blog-details",
  },
  {
    image: "assets/images/blog/two.png",
    alt: "Sesepuh mengajarkan jurus Cimande kepada pesilat muda",
    category: "Pelatihan",
    author: "Galuh Priatna",
    comments: 8,
    title:
      "Pelatih Muda Garut Dalami Jurus Pusaka dari Sesepuh Cimande",
    href: "/blog-details",
  },
  {
    image: "assets/images/blog/three.png",
    alt: "Atlet pencak silat mengangkat piala kejuaraan daerah",
    category: "Kejuaraan",
    author: "Nining Setyawati",
    comments: 12,
    title:
      "Atlet Junior PPSI Boyong Tiga Emas pada Kejurda Jawa Barat 2024",
    href: "/blog-details",
  },
  {
    image: "assets/images/blog/four.png",
    alt: "Rampak gendang mengiringi pertunjukan pencak silat tradisional",
    category: "Budaya",
    author: "Arief Rahman",
    comments: 7,
    title:
      "Rampak Gendang dan Jurus Galura Meriahkan Hari Jadi Kabupaten Sukabumi",
    href: "/blog-details",
  },
  {
    image: "assets/images/blog/five.png",
    alt: "Pesilat perempuan berdiskusi di padepokan tradisional",
    category: "Komunitas",
    author: "Siti Maesaroh",
    comments: 3,
    title:
      "Pesilat Perempuan Gelar Sarasehan Beladiri Beradat di Sumedang",
    href: "/blog-details",
  },
  {
    image: "assets/images/blog/six.png",
    alt: "Siswa sekolah adat mempraktekkan jurus dasar pencak silat",
    category: "Pendidikan",
    author: "Raka Suryadinata",
    comments: 6,
    title:
      "Muatan Lokal Pencak Silat Resmi Masuk Kurikulum Sekolah Adat",
    href: "/blog-details",
  },
  {
    image: "assets/images/blog/three.png",
    alt: "Sesepuh Cimande menunjukkan manuskrip jurus kuno",
    category: "Heritage",
    author: "Neng Kurniasih",
    comments: 11,
    title:
      "Menjaga Jurus Cimande sebagai Warisan Takbenda Dunia",
    href: "/blog-details",
  },
  {
    image: "assets/images/blog/two.png",
    alt: "Guru besar muda pencak silat di depan padepokan keluarga",
    category: "Inspirasi",
    author: "Dimas Prakasa",
    comments: 4,
    title:
      "Perjalanan Guru Besar Muda Menata Padepokan Keluarga di Tasikmalaya",
    href: "/blog-details",
  },
];

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
  "cimande",
  "jurus pamacan",
  "tradisi sunda",
  "kejuaraan",
  "wargi pesilat",
  "warisan budaya",
];

const author = {
  name: "Galih Suryana",
  role: "Koordinator Media PPSI Digjaya",
  bio: "Galih mendokumentasikan perkembangan pencak silat tradisional Jawa Barat dan menghubungkan padepokan dari Sabang sampai Merauke.",
  photo: "assets/images/author-two.png",
  alt: "Potret Galih Suryana",
};

const BlogGridInner = () => {
  return (
    <section className='blog-main blog cm-details'>
      <div className='container'>
        <div className='row gutter-60'>
          <div className='col-12 col-xl-8'>
            <div className='row gutter-30'>
              {gridPosts.map((post, index) => {
                const delay = (index % 3) * 300;
                return (
                  <div className='col-12 col-lg-6' key={post.title}>
                    <div
                      className='blog__single-wrapper'
                      data-aos='fade-up'
                      data-aos-duration={1000}
                      data-aos-delay={delay || undefined}
                    >
                      <div className='blog__single van-tilt'>
                        <div className='blog__single-thumb'>
                          <Link href={post.href}>
                            <OptimizedImage src={post.image} alt={post.alt} />
                          </Link>
                          <div className='tag'>
                            <Link href='/blog-grid'>
                              <i className='fa-solid fa-tags' />
                              {post.category}
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
                              {`Komentar (${String(post.comments).padStart(
                                2,
                                "0"
                              )})`}
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
                              aria-label='Baca detail berita pencak silat'
                              title='Baca detail berita pencak silat'
                            >
                              Baca Selengkapnya
                              <i className='fa-solid fa-circle-arrow-right' />
                            </Link>
                          </div>
                        </div>
                        <OptimizedImage
                          src='assets/images/blog/spade.png'
                          alt='Ornamen batik pencak silat'
                          className='spade-two'
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div
              className='pagination-wrapper'
              data-aos='fade-up'
              data-aos-duration={1000}
              data-aos-delay={100}
            >
              <ul className='pagination main-pagination'>
                <li>
                  <button aria-label='Halaman sebelumnya'>
                    <i className='fa-solid fa-angles-left' />
                  </button>
                </li>
                <li>
                  <Link href='/blog-grid'>1</Link>
                </li>
                <li>
                  <Link href='/blog-grid' className='active'>
                    2
                  </Link>
                </li>
                <li>
                  <Link href='/blog-grid'>3</Link>
                </li>
                <li>
                  <button aria-label='Halaman berikutnya'>
                    <i className='fa-solid fa-angles-right' />
                  </button>
                </li>
              </ul>
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
                  <OptimizedImage src={author.photo} alt={author.alt} />
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
                            <OptimizedImage src={post.image} alt={post.alt} />
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

export default BlogGridInner;
