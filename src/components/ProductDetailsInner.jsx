"use client";
import Link from "next/link";
import { useState } from "react";
import Slider from "@/components/ClientSlider";
import OptimizedImage from "@/components/common/OptimizedImage";

const ProductDetailsInner = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [active, setActive] = useState(1);

  let [count, setCount] = useState(0);

  let increaseCount = () => {
    setCount(count + 1);
  };
  let decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const gallerySettings = {
    asNavFor: nav1,
    ref: (slider) => setNav2(slider),
    slidesToShow: 4,
    swipeToSlide: true,
    focusOnSelect: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  const mainSliderSettings = {
    asNavFor: nav2,
    ref: (slider) => setNav1(slider),
    slidesToShow: 1,
    swipeToSlide: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "0px",
  };
  return (
    <>
      <section className='product-details'>
        <div className='container'>
          <div className='row align-items-center gutter-40'>
            <div className='col-12 col-xl-6'>
              <div className='product-details__slider'>
                <div className='product-details__slider-thumb'>
                  <div className='product-details-slider swiper'>
                    <Slider {...mainSliderSettings} className='swiper-wrapper'>
                      <div className='swiper-slide'>
                        <div className='product-details-slider-single'>
                          <OptimizedImage
                            src='assets/images/shop/product-details.png'
                            alt='Image_inner'
                          />
                        </div>
                      </div>
                      <div className='swiper-slide'>
                        <div className='product-details-slider-single'>
                          <OptimizedImage
                            src='assets/images/shop/product-details.png'
                            alt='Image_inner'
                          />
                        </div>
                      </div>
                      <div className='swiper-slide'>
                        <div className='product-details-slider-single'>
                          <OptimizedImage
                            src='assets/images/shop/product-details.png'
                            alt='Image_inner'
                          />
                        </div>
                      </div>
                      <div className='swiper-slide'>
                        <div className='product-details-slider-single'>
                          <OptimizedImage
                            src='assets/images/shop/product-details.png'
                            alt='Image_inner'
                          />
                        </div>
                      </div>
                      <div className='swiper-slide'>
                        <div className='product-details-slider-single'>
                          <OptimizedImage
                            src='assets/images/shop/product-details.png'
                            alt='Image_inner'
                          />
                        </div>
                      </div>
                      <div className='swiper-slide'>
                        <div className='product-details-slider-single'>
                          <OptimizedImage
                            src='assets/images/shop/product-details.png'
                            alt='Image_inner'
                          />
                        </div>
                      </div>
                      <div className='swiper-slide'>
                        <div className='product-details-slider-single'>
                          <OptimizedImage
                            src='assets/images/shop/product-details.png'
                            alt='Image_inner'
                          />
                        </div>
                      </div>
                      <div className='swiper-slide'>
                        <div className='product-details-slider-single'>
                          <OptimizedImage
                            src='assets/images/shop/product-details.png'
                            alt='Image_inner'
                          />
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>
                <div className='product-details-slider-gallery swiper'>
                  <Slider {...gallerySettings} className='swiper-wrapper'>
                    <div className='swiper-slide px-1'>
                      <div className='sm-gallery'>
                        <OptimizedImage
                          src='assets/images/shop/cart-one.png'
                          alt='Image_inner'
                        />
                      </div>
                    </div>
                    <div className='swiper-slide px-1'>
                      <div className='sm-gallery'>
                        <OptimizedImage
                          src='assets/images/shop/cart-two.png'
                          alt='Image_inner'
                        />
                      </div>
                    </div>
                    <div className='swiper-slide px-1'>
                      <div className='sm-gallery'>
                        <OptimizedImage
                          src='assets/images/shop/cart-three.png'
                          alt='Image_inner'
                        />
                      </div>
                    </div>
                    <div className='swiper-slide px-1'>
                      <div className='sm-gallery'>
                        <OptimizedImage
                          src='assets/images/shop/cart-four.png'
                          alt='Image_inner'
                        />
                      </div>
                    </div>
                    <div className='swiper-slide px-1'>
                      <div className='sm-gallery'>
                        <OptimizedImage
                          src='assets/images/shop/cart-one.png'
                          alt='Image_inner'
                        />
                      </div>
                    </div>
                    <div className='swiper-slide px-1'>
                      <div className='sm-gallery'>
                        <OptimizedImage
                          src='assets/images/shop/cart-two.png'
                          alt='Image_inner'
                        />
                      </div>
                    </div>
                    <div className='swiper-slide px-1'>
                      <div className='sm-gallery'>
                        <OptimizedImage
                          src='assets/images/shop/cart-three.png'
                          alt='Image_inner'
                        />
                      </div>
                    </div>
                    <div className='swiper-slide px-1'>
                      <div className='sm-gallery'>
                        <OptimizedImage
                          src='assets/images/shop/cart-four.png'
                          alt='Image_inner'
                        />
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
            <div className='col-12 col-xl-6'>
              <div
                className='product-details__content'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <div className='review-wrapper'>
                  <span>-5%</span>
                  <div className='review'>
                    <i className='icon-star' />
                    <i className='icon-star' />
                    <i className='icon-star' />
                    <i className='icon-star' />
                    <i className='icon-star' />
                  </div>
                  <p>(2) Ulasan</p>
                </div>
                <div className='product-meta'>
                  <h3 className='title-animation_inner'>
                    Headset Nirkabel PPSI Digjaya
                  </h3>
                  <p>
                    Headset resmi komunitas PPSI dengan mode latihan, mikrofon
                    jernih, dan baterai tahan hingga 18 jam untuk menunjang
                    sesi latihan dan rapat virtual.
                  </p>
                </div>
                <div className='product-price'>
                  <h4>Rp8.500.000</h4>
                  <h6>
                    <del>Rp12.000.000</del>
                  </h6>
                </div>
                <div className='product-color'>
                  <p>Warna:</p>
                  <div className='product-colors'>
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
                <div className='product-size'>
                  <p>Ukuran:</p>
                  <div className='product-sizes'>
                    <span>S</span>
                    <span>M</span>
                    <span>L</span>
                    <span>XL</span>
                    <span>XXL</span>
                  </div>
                </div>
                <div className='product-quantity cart-item-single'>
                  <p>Jumlah:</p>
                  <div className='measure'>
                    <button
                      onClick={decreaseCount}
                      aria-label='decrease item'
                      className='quantity-decrease'
                    >
                      <i className='fa-solid fa-minus' />
                    </button>
                    <span className='item-quantity'>{count}</span>
                    <button
                      onClick={increaseCount}
                      aria-label='add item'
                      className='quantity-increase'
                    >
                      <i className='fa-solid fa-plus' />
                    </button>
                  </div>
                </div>
                <div className='product-cta'>
                  <Link
                    href='/cart'
                    aria-label='tambah ke keranjang'
                    title='Tambah ke Keranjang'
                    className='btn--primary'
                  >
                    Tambah ke Keranjang{" "}
                    <i className='fa-solid fa-cart-shopping' />
                  </Link>
                  <Link href='/cart' className='fav-btn'>
                    <i className='icon-heart' />
                  </Link>
                </div>
                <div className='productsku'>
                  <p>
                    Biaya pengiriman darat: <strong>Rp180.000</strong>
                  </p>
                </div>
                <div className='sku'>
                  <p>
                    <strong>SKU:</strong> N/A
                  </p>
                  <p>
                    <strong>Kategori:</strong> Elektronik
                  </p>
                  <p>
                    <strong>Tag:</strong> ponsel, gawai
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='product-tab'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='product-tab__inner'>
                <div className='product-tab__btns'>
                  <button
                    onClick={() => setActive(1)}
                    className={`product-tab__btn ${active === 1 && "active"}`}
                    data-target='#productDetails'
                    aria-label='detail produk'
                    title='Detail Produk'
                  >
                    Detail Produk
                  </button>
                  <button
                    onClick={() => setActive(2)}
                    className={`product-tab__btn ${active === 2 && "active"}`}
                    data-target='#pInformation'
                    aria-label='informasi tambahan'
                    title='Informasi Tambahan'
                  >
                    Informasi Tambahan
                  </button>
                  <button
                    onClick={() => setActive(3)}
                    className={`product-tab__btn ${active === 3 && "active"}`}
                    data-target='#pInformation'
                    aria-label='ulasan produk'
                    title='Ulasan Produk'
                  >
                    Ulasan
                  </button>
                </div>
                <div className='product-tab__content'>
                  <div
                    className={`product-tab-content-single ${
                      active === 1 ? "d-block" : "d-none"
                    }`}
                    id='productDetails'
                  >
                    <div className='content'>
                      <h4>Pengalaman penggunaan di komunitas PPSI</h4>
                      <p>
                        Headset ini digunakan pengurus wilayah saat koordinasi
                        daring, memastikan instruksi latihan tersampaikan jelas
                        meski berada di padepokan berbeda. Material bantalan
                        empuk membuat sesi latihan daring tetap nyaman hingga
                        berjam-jam.
                      </p>
                    </div>
                    <div className='content-list cta'>
                      <h5>Detail Lain</h5>
                      <ul>
                        <li>
                          <i className='fa-solid fa-check' />
                          Mikrofon dengan peredam bising untuk ruang latihan.
                        </li>
                        <li>
                          <i className='fa-solid fa-check' />
                          Dukungan koneksi ganda ke laptop dan ponsel.
                        </li>
                        <li>
                          <i className='fa-solid fa-check' />
                          Baterai pengisian cepat, siap dipakai 15 menit.
                        </li>
                        <li>
                          <i className='fa-solid fa-check' />
                          Bantalan telinga anti keringat untuk latihan intensif.
                        </li>
                        <li>
                          <i className='fa-solid fa-check' />
                          Sertifikasi garansi resmi PPSI 1 tahun.
                        </li>
                        <li>
                          <i className='fa-solid fa-check' />
                          Termasuk tas jinjing tahan air untuk mobilitas.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className={`product-tab-content-single ${
                      active === 2 ? "d-block" : "d-none"
                    }`}
                    id='productDetails'
                  >
                    <div className='content'>
                      <h4>Spesifikasi teknis utama</h4>
                      <p>
                        Headset mendukung Bluetooth 5.3, audio latensi rendah,
                        dan mode kabel 3.5mm untuk studio seni bela diri. Paket
                        mencakup kabel USB-C dan adaptor audio sehingga mudah
                        disambungkan ke sistem pengeras suara padepokan.
                      </p>
                    </div>
                    <div className='content-list cta'>
                      <h5>Informasi Tambahan</h5>
                      <ul>
                        <li>
                          <i className='fa-solid fa-check' />
                          Berat 260 gram, aman untuk sesi pemakaian panjang.
                        </li>
                        <li>
                          <i className='fa-solid fa-check' />
                          Pengisian penuh hanya 90 menit.
                        </li>
                        <li>
                          <i className='fa-solid fa-check' />
                          Daya tahan baterai 40 jam mode musik, 28 jam panggilan.
                        </li>
                        <li>
                          <i className='fa-solid fa-check' />
                          Mendukung aplikasi pendamping untuk penyesuaian EQ.
                        </li>
                        <li>
                          <i className='fa-solid fa-check' />
                          Kompatibel dengan Android, iOS, dan Windows.
                        </li>
                        <li>
                          <i className='fa-solid fa-check' />
                          Sertifikasi TKDN untuk pengadaan organisasi.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className={`product-tab-content-single ${
                      active === 3 ? "d-block" : "d-none"
                    }`}
                    id='pInformation'
                  >
                    <div className='cm-details init__padding'>
                      <div className='content'>
                        <div
                          className='blog-comment aos-init aos-animate'
                          data-aos='fade-up'
                          data-aos-duration={1000}
                          data-aos-delay={100}
                        >
                          <div className='comment-header '>
                            <h4 className='mt-8 '>03 Ulasan</h4>
                          </div>
                          <div className='comment-single'>
                            <div className='thumb'>
                              <OptimizedImage
                                alt='Image_inner'
                                src='assets/images/author-four.png'
                              />
                            </div>
                            <div className='comment-single__content'>
                              <h5>Sari Wulandari</h5>
                              <p>
                                Audio rapat koordinasi jadi jauh lebih jelas.
                                Headset ini membantu kami memimpin latihan jarak
                                jauh tanpa kendala kebisingan padepokan.
                              </p>
                              <div className='comment-single__meta'>
                                <button title='suka' className='single'>
                                  <i className='icon-heart' /> Suka
                                </button>
                                <div className='reply-button'>
                                  <button aria-label='balas'>
                                    <i className='fa-solid fa-reply' />
                                    Balas
                                  </button>
                                </div>
                                <p>2 menit lalu</p>
                              </div>
                              <div className='reply-comment'>
                                <form action='#' method='post'>
                                  <div className='input-group'>
                                    <div className='input-single'>
                                      <textarea
                                        placeholder='Ikut berdiskusi...'
                                        defaultValue={""}
                                      />
                                    </div>
                                    <div className='btn-wrapper'>
                                      <button
                                        type='submit'
                                        className='btn--secondary'
                                      >
                                        Balas
                                      </button>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                          <div className='comment-single comment-single-reply'>
                            <div className='thumb'>
                              <OptimizedImage
                                alt='Image_inner'
                                src='assets/images/team/one.png'
                              />
                            </div>
                            <div className='comment-single__content'>
                              <h5>Denny Pratama</h5>
                              <p>
                                Dipakai saat workshop pelatih, mikrofon bawaannya
                                menangkap instruksi dengan jelas walau ruangan
                                penuh peserta.
                              </p>
                              <div className='comment-single__meta'>
                                <button title='suka' className='single'>
                                  <i className='icon-heart' /> Suka
                                </button>
                                <div className='reply-button'>
                                  <button aria-label='balas'>
                                    <i className='fa-solid fa-reply' />
                                    Balas
                                  </button>
                                </div>
                                <p>5 menit lalu</p>
                              </div>
                              <div className='reply-comment'>
                                <form action='#' method='post'>
                                  <div className='input-group'>
                                    <div className='input-single'>
                                      <textarea
                                        placeholder='Ikut berdiskusi...'
                                        defaultValue={""}
                                      />
                                    </div>
                                    <div className='btn-wrapper'>
                                      <button
                                        type='submit'
                                        className='btn--secondary'
                                      >
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
                              <OptimizedImage
                                alt='Image_inner'
                                src='assets/images/author-two.png'
                              />
                            </div>
                            <div className='comment-single__content'>
                              <h5>Nita Lestari</h5>
                              <p>
                                Mode kabelnya stabil untuk kebutuhan siaran
                                langsung pasanggiri. Tidak ada jeda suara saat
                                berganti perangkat.
                              </p>
                              <div className='comment-single__meta'>
                                <button title='suka' className='single'>
                                  <i className='icon-heart' /> Suka
                                </button>
                                <div className='reply-button'>
                                  <button aria-label='balas'>
                                    <i className='fa-solid fa-reply' />
                                    Balas
                                  </button>
                                </div>
                                <p>10 menit lalu</p>
                              </div>
                              <div className='reply-comment'>
                                <form action='#' method='post'>
                                  <div className='input-group'>
                                    <div className='input-single'>
                                      <textarea
                                        placeholder='Ikut berdiskusi...'
                                        defaultValue={""}
                                      />
                                    </div>
                                    <div className='btn-wrapper'>
                                      <button
                                        type='submit'
                                        className='btn--secondary'
                                      >
                                        Balas
                                      </button>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                          <div
                            className='comment__form mt-120 aos-init aos-animate'
                            data-aos='fade-up'
                            data-aos-duration={1000}
                            data-aos-delay={100}
                          >
                            <div className='comment-header mb-40'>
                              <h4 className='mt-8 fw-6'>Tinggalkan Komentar</h4>
                            </div>
                            <form action='#' method='post'>
                              <div className='form-group'>
                                <div className='input-icon'>
                                  <input
                                    id='commentName'
                                    placeholder='Nama Anda'
                                    type='text'
                                    name='comment-name'
                                  />
                                  <i className='fa-solid fa-user' />
                                </div>
                                <div className='input-icon'>
                                  <input
                                    id='commentEmail'
                                    placeholder='Email aktif'
                                    type='email'
                                    name='comment-email'
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
                                  defaultValue={""}
                                />
                                <i className='fa-regular fa-comments' />
                              </div>
                              <div className='cta mt-40'>
                                <div className='btn-wrapper'>
                                  <button
                                    type='submit'
                                    className='btn--secondary'
                                  >
                                    Kirim Komentar
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsInner;
