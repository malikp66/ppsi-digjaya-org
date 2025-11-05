"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import NiceSelect from "nice-select2";
import { ArrowRight, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import AddToCart from "../helper/AddToCart";
import OptimizedImage from "@/components/common/OptimizedImage";
const HeaderFour = () => {
  const countryRef = useRef(null);
  const userMenuRef = useRef(null);
  const mobileMenuListRef = useRef(null);
  let pathname = usePathname();
  let [search, setSearch] = useState(false);
  let [backdrop, setBackdrop] = useState(false);
  let [mobileMenu, setMobileMenu] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [accountMode, setAccountMode] = useState("anggota");
  const [user] = useState({
    isLoggedIn: true,
    name: "Rahmat Saputra",
    membership: "Anggota Aktif",
  });
  const handleSearch = () => {
    setSearch(!search);
  };
  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };
  const handleUserMenuToggle = () => {
    setShowProfileDropdown((prevState) => !prevState);
  };

  const handleBackdrop = () => {
    setBackdrop(!backdrop);
  };

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset < 150) {
        setScroll(false);
      } else if (window.pageYOffset > 150) {
        setScroll(true);
      }
      return () => (window.onscroll = null);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target)
      ) {
        setShowProfileDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const desktopMenu = document.querySelector(".navbar__menu");

    if (desktopMenu && mobileMenuListRef.current) {
      mobileMenuListRef.current.innerHTML = desktopMenu.innerHTML;

      const setupDropdownToggles = (container) => {
        const dropdownLabels = container.querySelectorAll(
          ".navbar__dropdown-label"
        );

        dropdownLabels.forEach((label) => {
          label.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation();

            const subMenu = this.nextElementSibling;

            // ✅ Only close siblings within the same level (UL)
            const siblingLabels = Array.from(
              this.closest("ul")?.querySelectorAll(
                ":scope > li > .navbar__dropdown-label"
              ) || []
            );

            siblingLabels.forEach((sibling) => {
              const siblingSubMenu = sibling.nextElementSibling;

              if (
                sibling !== this &&
                siblingSubMenu &&
                siblingSubMenu.classList.contains("navbar__sub-menu")
              ) {
                siblingSubMenu.style.maxHeight = "0px";
                siblingSubMenu.classList.remove("show");
                sibling.classList.remove("navbar__item-active");
              }
            });

            // Toggle current submenu with smooth animation
            if (subMenu && subMenu.classList.contains("navbar__sub-menu")) {
              const isOpen = subMenu.classList.contains("show");

              if (isOpen) {
                subMenu.style.maxHeight = "0px";
                subMenu.classList.remove("show");
                this.classList.remove("navbar__item-active");
              } else {
                subMenu.classList.add("show");
                subMenu.style.maxHeight = subMenu.scrollHeight + "px";
                this.classList.add("navbar__item-active");
              }
            }
          });
        });
      };

      setupDropdownToggles(mobileMenuListRef.current);
    }
  }, []);

  const handleAccountModeToggle = () => {
    setAccountMode((prev) => (prev === "anggota" ? "pengurus" : "anggota"));
  };

  useEffect(() => {
    if (countryRef.current) {
      new NiceSelect(countryRef.current);
    }
  }, []);

  const memberLinks = [
    {
      href: "/keanggotaan",
      label: "Keanggotaan Saya",
      icon: "fa-solid fa-id-badge",
    },
    {
      href: "/donate-us",
      label: "Riwayat Donasi",
      icon: "fa-solid fa-hand-holding-heart",
    },
    {
      href: "/sertifikat-online",
      label: "Cetak Sertifikat",
      icon: "fa-regular fa-file-lines",
    },
  ];

  const pengurusLinks = [
    {
      href: "/dashboard-pengurus",
      label: "Dashboard Pengurus",
      icon: "fa-solid fa-gauge-high",
    },
    {
      href: "/manajemen-organisasi",
      label: "Kelola Program",
      icon: "fa-solid fa-list-check",
    },
    {
      href: "/keanggotaan",
      label: "Data Anggota",
      icon: "fa-solid fa-people-group",
    },
  ];

  const activeLinks = accountMode === "pengurus" ? pengurusLinks : memberLinks;

  return (
    <>
      <header
        className={`header header-tertiary bg-white header-four ${
          scroll && "sticky-header"
        }`}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='main-header__menu-box'>
                <nav className='navbar p-0'>
                  <div className='navbar-logo'>
                    <Link href='/'>
                      <OptimizedImage src='/assets/images/logo.png' alt='Image_inner' />
                    </Link>
                    <h3 className='font-normal'>PPSI</h3>
                  </div>

                  <div className='navbar__menu d-none d-xl-block'>
                    <ul className='navbar__list'>
                      <li
                        className={`navbar__item nav-fade ${
                          pathname === "/" ? "active" : ""
                        }`}
                      >
                        <Link href='/'>Beranda</Link>
                      </li>
                      <li
                        className={`navbar__item navbar__item--has-children nav-fade ${
                          [
                            "/about-us",
                            "/pelestarian-budaya",
                            "/manajemen-organisasi",
                          ].includes(pathname)
                            ? "active"
                            : ""
                        }`}
                      >
                        <Link
                          href='#'
                          aria-label='menu profil'
                          className='navbar__dropdown-label dropdown-label-alter'
                        >
                          Profil
                        </Link>
                        <ul className='navbar__sub-menu'>
                          <li
                            className={
                              pathname === "/about-us" ? "active" : ""
                            }
                          >
                            <Link href='/about-us'>Tentang PPSI Digjaya</Link>
                          </li>
                          <li
                            className={
                              pathname === "/pelestarian-budaya" ? "active" : ""
                            }
                          >
                            <Link href='/pelestarian-budaya'>
                              Pelestarian Budaya
                            </Link>
                          </li>
                          <li
                            className={
                              pathname === "/manajemen-organisasi"
                                ? "active"
                                : ""
                            }
                          >
                            <Link href='/manajemen-organisasi'>
                              Manajemen Organisasi
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className={`navbar__item navbar__item--has-children nav-fade ${
                          [
                            "/our-causes",
                            "/events",
                            "/donate-us",
                            "/pelatihan-atlet",
                            "/shop",
                          ].includes(pathname)
                            ? "active"
                            : ""
                        }`}
                      >
                        <Link
                          href='#'
                          aria-label='menu program'
                          className='navbar__dropdown-label dropdown-label-alter'
                        >
                          Program
                        </Link>
                        <ul className='navbar__sub-menu'>
                          <li
                            className={
                              pathname === "/our-causes" ? "active" : ""
                            }
                          >
                            <Link href='/our-causes'>
                              Program &amp; Kegiatan
                            </Link>
                          </li>
                          <li
                            className={
                              pathname === "/events" ? "active" : ""
                            }
                          >
                            <Link href='/events'>
                              Kegiatan &amp; Kalender Budaya
                            </Link>
                          </li>
                          <li
                            className={
                              pathname === "/donate-us" ? "active" : ""
                            }
                          >
                            <Link href='/donate-us'>
                              Dana Sosial &amp; Dukungan Atlet
                            </Link>
                          </li>
                          <li
                            className={
                              pathname === "/pelatihan-atlet" ? "active" : ""
                            }
                          >
                            <Link href='/pelatihan-atlet'>
                              Pelatihan &amp; Atlet
                            </Link>
                          </li>
                          <li
                            className={pathname === "/shop" ? "active" : ""}
                          >
                            <Link href='/shop'>
                              Toko Atribut &amp; Marketplace
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className={`navbar__item navbar__item--has-children nav-fade ${
                          [
                            "/keanggotaan",
                            "/become-volunteer",
                            "/faq",
                          ].includes(pathname)
                            ? "active"
                            : ""
                        }`}
                      >
                        <Link
                          href='#'
                          aria-label='menu keanggotaan'
                          className='navbar__dropdown-label dropdown-label-alter'
                        >
                          Keanggotaan
                        </Link>
                        <ul className='navbar__sub-menu'>
                          <li
                            className={
                              pathname === "/keanggotaan" ? "active" : ""
                            }
                          >
                            <Link href='/keanggotaan'>Formulir Anggota</Link>
                          </li>
                          <li
                            className={
                              pathname === "/become-volunteer" ? "active" : ""
                            }
                          >
                            <Link href='/become-volunteer'>
                              Forum Kolaborasi
                            </Link>
                          </li>
                          <li className={pathname === "/faq" ? "active" : ""}>
                            <Link href='/faq'>Panduan &amp; FAQ</Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className={`navbar__item nav-fade ${
                          pathname === "/sertifikat-online" ? "active" : ""
                        }`}
                      >
                        <Link href='/sertifikat-online'>Sertifikat</Link>
                      </li>
                      <li
                        className={`navbar__item navbar__item--has-children nav-fade ${
                          [
                            "/blog-list",
                            "/blog-grid",
                            "/blog-details",
                          ].includes(pathname)
                            ? "active"
                            : ""
                        }`}
                      >
                        <Link
                          href='#'
                          aria-label='menu berita'
                          className='navbar__dropdown-label dropdown-label-alter'
                        >
                          Berita
                        </Link>
                        <ul className='navbar__sub-menu'>
                          <li
                            className={
                              pathname === "/blog-list" ? "active" : ""
                            }
                          >
                            <Link href='/blog-list'>Berita &amp; Artikel</Link>
                          </li>
                          <li
                            className={
                              pathname === "/blog-grid" ? "active" : ""
                            }
                          >
                            <Link href='/blog-grid'>Galeri Berita</Link>
                          </li>
                          <li
                            className={
                              pathname === "/blog-details" ? "active" : ""
                            }
                          >
                            <Link href='/blog-details'>
                              Detail Publikasi
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className={`navbar__item nav-fade ${
                          pathname === "/contact-us" ? "active" : ""
                        }`}
                      >
                        <Link href='/contact-us'>Kontak</Link>
                      </li>
                    </ul>
                  </div>

                  <div className='navbar__options'>
                    <div className='navbar__mobile-options '>
                      <div className='cart-box'>
                        <button
                          onClick={handleBackdrop}
                          className='open-cart cart'
                          aria-label='cart'
                          title='open cart'
                        >
                          <span>0</span>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width={23}
                            height={23}
                            viewBox='0 0 23 23'
                            fill='none'
                          >
                            <path
                              d='M22.8316 4.54575C22.7002 4.35623 22.4886 4.23909 22.2589 4.22921L8.014 3.61154C7.60529 3.59355 7.26374 3.91097 7.24627 4.3202C7.2289 4.72928 7.54393 5.07492 7.95068 5.0925L21.2312 5.6684L18.6199 13.8641H6.9997L4.90033 2.36513C4.85418 2.1131 4.68218 1.90285 4.44496 1.80923L1.00655 0.450378C0.627594 0.301129 0.199971 0.488375 0.0511428 0.869122C-0.097428 1.25008 0.0886582 1.6805 0.467409 1.83022L3.5247 3.03843L5.66112 14.7392C5.72551 15.091 6.03026 15.3465 6.38594 15.3465H6.74033L5.93108 17.6077C5.86334 17.7971 5.89125 18.0075 6.00652 18.172C6.12163 18.3366 6.30885 18.4345 6.50871 18.4345H7.07632C6.7246 18.8283 6.50871 19.3468 6.50871 19.9169C6.50871 21.1431 7.5005 22.1405 8.71913 22.1405C9.93776 22.1405 10.9296 21.1431 10.9296 19.9169C10.9296 19.3468 10.7137 18.8283 10.362 18.4345H15.1813C14.8294 18.8283 14.6136 19.3468 14.6136 19.9169C14.6136 21.1431 15.6051 22.1405 16.824 22.1405C18.0429 22.1405 19.0344 21.1431 19.0344 19.9169C19.0344 19.3468 18.8186 18.8283 18.4669 18.4345H19.1572C19.4964 18.4345 19.7712 18.158 19.7712 17.8169C19.7712 17.4757 19.4964 17.1992 19.1572 17.1992H7.38235L8.0454 15.3463H19.1572C19.4776 15.3463 19.7611 15.138 19.8587 14.8314L22.9287 5.19574C22.9993 4.97582 22.9631 4.73538 22.8316 4.54575ZM8.71918 20.9054C8.17737 20.9054 7.73674 20.4622 7.73674 19.9172C7.73674 19.3722 8.17737 18.9289 8.71918 18.9289C9.261 18.9289 9.70157 19.3722 9.70157 19.9172C9.70157 20.4622 9.261 20.9054 8.71918 20.9054ZM16.824 20.9054C16.2822 20.9054 15.8416 20.4622 15.8416 19.9172C15.8416 19.3722 16.2822 18.9289 16.824 18.9289C17.3658 18.9289 17.8064 19.3722 17.8064 19.9172C17.8064 20.4622 17.3658 20.9054 16.824 20.9054Z'
                              fill='#0A1426'
                            />
                          </svg>
                        </button>
                      </div>
                      {user?.isLoggedIn ? (
                        <div
                          className={`user-menu d-none d-md-flex ${
                            showProfileDropdown ? "user-menu--open" : ""
                          }`}
                          ref={userMenuRef}
                        >
                          <button
                            type='button'
                            className='user-menu__toggle'
                            onClick={handleUserMenuToggle}
                            aria-haspopup='true'
                            aria-expanded={showProfileDropdown}
                            aria-label='Menu profil pengguna'
                          >
                            <span className='user-menu__avatar'>
                              <i className='fa-regular fa-user' />
                            </span>
                            <span className='user-menu__text'>
                              <span className='user-menu__welcome'>Halo,</span>
                              <span className='user-menu__name'>
                                {user.name}
                              </span>
                            </span>
                            <i className='fa-solid fa-chevron-down user-menu__chevron' />
                          </button>
                          <div className='user-menu__dropdown' role='menu'>
                            <div className='user-menu__mode'>
                              <span>Mode Akun</span>
                              <button
                                type='button'
                                className='user-menu__switch'
                                onClick={handleAccountModeToggle}
                                aria-pressed={accountMode === "pengurus"}
                              >
                                <i className='fa-solid fa-arrows-rotate' />
                                {accountMode === "pengurus"
                                  ? "Pengurus"
                                  : "Anggota"}
                              </button>
                            </div>
                            {activeLinks.map(({ href, label, icon }) => (
                              <Link
                                href={href}
                                className='user-menu__link'
                                key={label}
                              >
                                <i className={icon} />
                                {label}
                              </Link>
                            ))}
                            <button
                              type='button'
                              className='user-menu__link user-menu__logout'
                            >
                              <i className='fa-solid fa-arrow-right-from-bracket' />
                              Keluar
                            </button>
                          </div>
                        </div>
                      ) : (
                        <Link
                          href='/keanggotaan'
                          className='btn--secondary d-none d-md-flex'
                        >
                          Masuk <i className='fa-solid fa-arrow-right' />
                        </Link>
                      )}
                    </div>
                    <button
                      onClick={handleMobileMenu}
                      className='open-offcanvas-nav d-flex d-xl-none'
                      aria-label='toggle mobile menu'
                      title='open offcanvas menu'
                    >
                      <span className='icon-bar top-bar' />
                      <span className='icon-bar middle-bar' />
                      <span className='icon-bar bottom-bar' />
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${
            search ? "search-active search-popup" : "search-popup"
          }`}
        >
          <button
            onClick={handleSearch}
            className='close-search'
            aria-label='close search box'
            title='close search box'
          >
            <i className='fa-solid fa-xmark' />
          </button>
          <form action='#' method='post'>
            <div className='search-popup__group'>
              <input
                type='text'
                name='search-field'
                id='searchField'
                placeholder='Search....'
                required=''
              />
              <button
                type='submit'
                aria-label='search products'
                title='search products'
              >
                <i className='fa-solid fa-magnifying-glass' />
              </button>
            </div>
          </form>
        </div>
      </header>

      <div
        className={`mobile-menu mobile-menu--primary d-block d-xxl-none ${
          mobileMenu ? "show-menu" : ""
        }`}
      >
        <nav className='mobile-menu__wrapper'>
          <div className='mobile-menu__header nav-fade'>
            <div className='logo'>
              <Link href='/' aria-label='home page' title='logo'>
                <OptimizedImage src='/assets/images/logo.png' alt='Image_inner' />
              </Link>
            </div>
            <button
              onClick={handleMobileMenu}
              aria-label='close mobile menu'
              className='close-mobile-menu'
            >
              <i className='fa-solid fa-xmark' />
            </button>
          </div>
          <div className='mobile-menu__list' ref={mobileMenuListRef}></div>

          <div className='mobile-menu__cta nav-fade d-block d-md-none'>
            {user?.isLoggedIn ? (
              <div className='mobile-user-menu'>
                <div className='mobile-user-menu__header'>
                  <span className='mobile-user-menu__icon'>
                    <i className='fa-regular fa-user' />
                  </span>
                  <div>
                    <p className='mobile-user-menu__welcome'>Halo,</p>
                    <p className='mobile-user-menu__name'>{user.name}</p>
                  </div>
                </div>
                <div className='mobile-user-menu__body'>
                  <button
                    type='button'
                    className='mobile-user-menu__switch'
                    onClick={handleAccountModeToggle}
                  >
                    <i className='fa-solid fa-arrows-rotate' />
                    Mode:{" "}
                    <span>
                      {accountMode === "pengurus" ? "Pengurus" : "Anggota"}
                    </span>
                  </button>
                  {activeLinks.map(({ href, label }) => (
                    <Link href={href} key={label}>
                      {label}
                    </Link>
                  ))}
                  <button
                    type='button'
                    className='mobile-user-menu__logout'
                  >
                    Keluar
                  </button>
                </div>
              </div>
            ) : (
              <Link href='/keanggotaan' className='btn--primary '>
                Masuk <i className='fa-solid fa-arrow-right' />
              </Link>
            )}
          </div>
          <div className='mobile-menu__social social nav-fade'>
            <Link
              href='https://www.facebook.com/'
              target='_blank'
              aria-label='share us on facebook'
              title='facebook'
            >
              <i className='fa-brands fa-facebook-f' />
            </Link>
            <Link
              href='https://vimeo.com/'
              target='_blank'
              aria-label='share us on vimeo'
              title='vimeo'
            >
              <i className='fa-brands fa-vimeo-v' />
            </Link>
            <Link
              href='https://x.com/'
              target='_blank'
              aria-label='share us on twitter'
              title='twitter'
            >
              <i className='fa-brands fa-twitter' />
            </Link>
            <Link
              href='https://www.linkedin.com/'
              target='_blank'
              aria-label='share us on linkedin'
              title='linkedin'
            >
              <i className='fa-brands fa-linkedin-in' />
            </Link>
          </div>
        </nav>
      </div>

      <div
        className={`mobile-menu__backdrop ${
          mobileMenu ? "mobile-menu__backdrop-active" : ""
        }`}
      ></div>

      <>
        <div
          className={cn(
            "fixed inset-0 z-[100] bg-foreground/60 backdrop-blur-md transition-opacity duration-300",
            backdrop ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
          )}
          onClick={handleBackdrop}
          aria-hidden='true'
        />

        <aside
          className={cn(
            "fixed inset-y-0 right-0 z-[101] flex h-full w-full max-w-md flex-col bg-background shadow-soft transition-transform duration-300 sm:max-w-lg",
            backdrop ? "translate-x-0" : "translate-x-full"
          )}
          role='dialog'
          aria-modal='true'
          aria-label='Keranjang Belanja'
        >
          <header className='flex items-start justify-between border-b border-border/60 px-6 py-5'>
            <div>
              <p className='text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground'>
                Keranjang Belanja
              </p>
              <div className='mt-2 flex items-center gap-2 text-base font-semibold text-foreground'>
                Pesanan Anda
                <span className='flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-xs font-bold text-secondary-foreground'>
                  2
                </span>
              </div>
            </div>
            <Button
              type='button'
              variant='ghost'
              size='icon'
              onClick={handleBackdrop}
              className='rounded-full border border-border/60 text-muted-foreground hover:text-foreground'
              aria-label='Tutup keranjang'
            >
              <X className='h-5 w-5' />
            </Button>
          </header>

          <ScrollArea className='flex-1 px-6 py-6'>
            <div className='space-y-4'>
              <AddToCart />
              <AddToCart />
            </div>
          </ScrollArea>

          <div className='border-t border-border/60 px-6 py-5'>
            <div className='flex items-center justify-between text-sm'>
              <span className='font-semibold uppercase tracking-[0.3em] text-muted-foreground'>
                Subtotal
              </span>
              <span className='text-lg font-semibold text-foreground'>
                Rp<span className='total-price'>0.00</span>
              </span>
            </div>
            <div className='mt-4 grid gap-3 sm:grid-cols-2'>
              <Button variant='secondary' className='w-full rounded-full' asChild>
                <Link href='/cart' aria-label='Lihat keranjang'>
                  Lihat Keranjang
                </Link>
              </Button>
              <Button className='w-full rounded-full' asChild>
                <Link href='/checkout' aria-label='Proses pembayaran'>
                  Proses Pembayaran
                  <ArrowRight className='ml-2 h-4 w-4' />
                </Link>
              </Button>
            </div>
          </div>
        </aside>
      </>
    </>
  );
};

export default HeaderFour;
