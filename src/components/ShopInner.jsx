"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { products, marketplaceServices } from "@/data/marketplace";
import { danaSosialPrograms } from "@/data/programs";

const getCategories = () => {
  const set = new Set(products.map((product) => product.category));
  return ["Semua", ...Array.from(set)];
};

const ShopInner = () => {
  const [kategori, setKategori] = useState("Semua");
  const [pencarian, setPencarian] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchCategory = kategori === "Semua" || product.category === kategori;
      const matchSearch = product.name.toLowerCase().includes(pencarian.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [kategori, pencarian]);

  return (
    <section className='shop'>
      <div className='container'>
        <div className='row gutter-40'>
          <div className='col-12 col-xl-3'>
            <aside className='shop__sidebar'>
              <div className='shop-sidebar-widget'>
                <div className='intro'>
                  <h5>Cari produk</h5>
                </div>
                <form className='search-form' onSubmit={(event) => event.preventDefault()}>
                  <input
                    type='text'
                    placeholder='Cari atribut...'
                    value={pencarian}
                    onChange={(event) => setPencarian(event.target.value)}
                  />
                  <button type='submit'>
                    <i className='fa-solid fa-magnifying-glass' />
                  </button>
                </form>
              </div>
              <div className='shop-sidebar-widget'>
                <div className='intro'>
                  <h5>Kategori Atribut</h5>
                </div>
                <ul className='sidebar-list'>
                  {getCategories().map((category) => (
                    <li key={category}>
                      <button
                        type='button'
                        className={category === kategori ? "active" : ""}
                        onClick={() => setKategori(category)}
                      >
                        <i className='fa-solid fa-angle-right' />
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='shop-sidebar-widget'>
                <div className='intro'>
                  <h5>Dana Sosial &amp; Dukungan Atlet</h5>
                </div>
                <ul className='sidebar-list'>
                  {danaSosialPrograms.map((program) => (
                    <li key={program.id}>
                      <Link href='/donate-us'>
                        <i className='fa-solid fa-hand-holding-heart' />
                        {program.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
          <div className='col-12 col-xl-9'>
            <div className='shop__content'>
              <div className='row gutter-30'>
                {filteredProducts.map((product, index) => (
                  <div className='col-12 col-sm-6 col-lg-4' key={product.id}>
                    <div
                      className='shop__single'
                      data-aos='fade-up'
                      data-aos-duration={1000}
                      data-aos-delay={index * 100}
                    >
                      <div className='shop__single-thumb'>
                        <Link href='/product-details'>
                          <img src={product.image} alt={product.name} />
                        </Link>
                        <div className='shop-thumb'>
                          <Link href='/product-details'>
                            <i className='fa-regular fa-eye' />
                          </Link>
                          <Link href='/cart'>
                            <i className='icon-heart' />
                          </Link>
                        </div>
                        <Link href='/cart' className='btn--primary'>
                          Tambah ke Keranjang
                        </Link>
                      </div>
                      <div className='shop__single-content'>
                        <p>
                          <Link href='/product-details'>{product.name}</Link>
                        </p>
                        <p>{product.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
                {filteredProducts.length === 0 && (
                  <div className='col-12'>
                    <div className='volunteer__content membership-card'>
                      <p>Tidak ada produk yang sesuai dengan pencarian.</p>
                    </div>
                  </div>
                )}
              </div>
              <div className='row gutter-30 marketplace-services'>
                <div className='col-12'>
                  <div className='section__header'>
                    <h3 className='title-animation_inner'>Marketplace Anggota &amp; Kolaborasi</h3>
                    <p>Produk dan layanan kreatif anggota PPSI Digjaya untuk mendukung ekonomi komunitas.</p>
                  </div>
                </div>
                {marketplaceServices.map((service, index) => (
                  <div className='col-12 col-md-4' key={service.id}>
                    <div
                      className='volunteer__content membership-card'
                      data-aos='fade-up'
                      data-aos-duration={1000}
                      data-aos-delay={index * 150}
                    >
                      <h6>{service.title}</h6>
                      <p>{service.description}</p>
                      <Link href='/contact-us' className='link'>
                        Hubungi Kami <i className='fa-solid fa-arrow-right' />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopInner;
