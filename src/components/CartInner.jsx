"use client";
import Link from "next/link";
import { useState } from "react";

const CartInner = () => {
  return (
    <section className='cart-main'>
      <div className='container'>
        <div className='row gutter-60'>
          <div className='col-12 col-xl-8'>
            <div
              className='cart__inner'
              data-aos='fade-up'
              data-aos-duration={1000}
            >
              <div className='cart-table'>
                <table>
                  <tbody>
                    <tr>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>SubTotal</th>
                    </tr>
                    <tr className='cart-item-single'>
                      <td className='cart-product'>
                        <div className='cart-product-wrapper'>
                          <div className='thumb'>
                            <Link href='/product-details'>
                              <img
                                src='assets/images/shop/cart-three.png'
                                alt='Image_inner'
                              />
                            </Link>
                            <button
                              aria-label='delete item'
                              className='delete-item'
                            >
                              <i className='fa-solid fa-circle-xmark' />
                            </button>
                          </div>
                          <div className='content'>
                            <p>
                              <Link href='/product-details'>Seragam Latihan PPSI</Link>
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className='price'>Rp250.000</p>
                      </td>
                      <td>
                        <QTY />
                      </td>
                      <td>
                        <p className='sub'>Rp500.000</p>
                      </td>
                    </tr>
                    <tr className='cart-item-single'>
                      <td className='cart-product'>
                        <div className='cart-product-wrapper'>
                          <div className='thumb'>
                            <Link href='/product-details'>
                              <img
                                src='assets/images/shop/cart-four.png'
                                alt='Image_inner'
                              />
                            </Link>
                            <button
                              aria-label='delete item'
                              className='delete-item'
                            >
                              <i className='fa-solid fa-circle-xmark' />
                            </button>
                          </div>
                          <div className='content'>
                            <p>
                              <Link href='/product-details'>
                                Sabuk Hitam Bordir
                              </Link>
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className='price'>Rp120.000</p>
                      </td>
                      <td>
                        <QTY />
                      </td>
                      <td>
                        <p className='sub'>Rp380.000</p>
                      </td>
                    </tr>
                    <tr className='cart-item-single'>
                      <td className='cart-product'>
                        <div className='cart-product-wrapper'>
                          <div className='thumb'>
                            <Link href='/product-details'>
                              <img
                                src='assets/images/shop/cart-two.png'
                                alt='Image_inner'
                              />
                            </Link>
                            <button
                              aria-label='delete item'
                              className='delete-item'
                            >
                              <i className='fa-solid fa-circle-xmark' />
                            </button>
                          </div>
                          <div className='content'>
                            <p>
                              <Link href='/product-details'>
                                Jaket Resmi PPSI
                              </Link>
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className='price'>Rp750.000</p>
                      </td>
                      <td>
                        <QTY />
                      </td>
                      <td>
                        <p className='sub'>Rp750.000</p>
                      </td>
                    </tr>
                    <tr className='cart-item-single'>
                      <td className='cart-product'>
                        <div className='cart-product-wrapper'>
                          <div className='thumb'>
                            <Link href='/product-details'>
                              <img
                                src='assets/images/shop/cart-one.png'
                                alt='Image_inner'
                              />
                            </Link>
                            <button
                              aria-label='delete item'
                              className='delete-item'
                            >
                              <i className='fa-solid fa-circle-xmark' />
                            </button>
                          </div>
                          <div className='content'>
                            <p>
                              <Link href='/product-details'>
                                Sabuk Hitam Bordir
                              </Link>
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className='price'>Rp870.000</p>
                      </td>
                      <td>
                        <QTY />
                      </td>
                      <td>
                        <p className='sub'>Rp870.000</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='update-cart'>
                <Link href='/shop'>Return To Shop</Link>
                <Link href='/cart'>Update Cart</Link>
              </div>
              <div className='coupon-wrapper'>
                <div className='left-c'>
                  <h6>Kode Promo</h6>
                </div>
                <div className='right-c'>
                  <form action='#' method='post'>
                    <div className='input-single'>
                      <input
                        type='text'
                        required=''
                        name='c-code'
                        id='cCcode'
                        placeholder='Enter Coupon'
                      />
                    </div>
                    <button
                      type='submit'
                      aria-label='subscribe to our newsletter'
                      title='subscribe to our newsletter'
                      className='btn--primary'
                    >
                      Gunakan Kode
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 col-xl-4'>
            <div className='cart-main__content'>
              <div
                className='cart-main__single'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <div className='intro'>
                  <h6>Lokasi Pengambilan</h6>
                </div>
                <div className='content'>
                  <div className='content-single'>
                    <p>Country</p>
                    <p>Sekretariat PPSI Digjaya</p>
                  </div>
                  <div className='content-single'>
                    <p>Street</p>
                    <p>Jl. Cijagra III No. 12</p>
                  </div>
                  <div className='content-single'>
                    <p>Kontak</p>
                    <p>082129251959</p>
                  </div>
                  <Link href='/checkout' aria-label='Shipping' title='Shipping'>
                    Lihat Rute
                  </Link>
                </div>
              </div>
              <div
                className='cart-main__single'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={300}
              >
                <div className='intro'>
                  <h6>Total Cart</h6>
                </div>
                <div className='content'>
                  <div className='content-single'>
                    <p>SubTotal</p>
                    <p>Rp345.000</p>
                  </div>
                  <div className='content-single'>
                    <p>Total</p>
                    <p>Rp450.000</p>
                  </div>
                  <Link
                    href='/checkout'
                    aria-label='Shipping'
                    title='Shipping'
                    className='Total'
                  >
                    Lanjut ke Pembayaran
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const QTY = () => {
  let [count, setCount] = useState(0);

  let increaseCount = () => {
    setCount(count + 1);
  };
  let decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
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
  );
};

export default CartInner;



