"use client";

import { useState } from "react";

const faqItems = [
  {
    headingId: "faq-one-heading-1",
    panelId: "faq-one-collapse-1",
    question: "Bagaimana proses registrasi keanggotaan PPSI Digjaya?",
    answer: (
      <p>
        Calon anggota mengisi formulir keanggotaan daring PPSI Digjaya. Setelah verifikasi data dan pembayaran iuran, kartu anggota akan diterbitkan serta akun akses materi siap digunakan.
      </p>
    ),
  },
  {
    headingId: "faq-one-heading-2",
    panelId: "faq-one-collapse-2",
    question: "Apa syarat perguruan bergabung dengan PPSI?",
    answer: (
      <>
        <p>
          Calon anggota mengisi formulir keanggotaan daring PPSI Digjaya. Setelah verifikasi data dan pembayaran iuran, kartu anggota akan diterbitkan serta akun akses materi siap digunakan.
        </p>
        <p>Perguruan mengajukan surat rekomendasi dari pengurus daerah, melampirkan data anggota, dan mengikuti orientasi kode etik PPSI Digjaya.</p>
      </>
    ),
  },
  {
    headingId: "faq-one-heading-3",
    panelId: "faq-one-collapse-3",
    question: "Bagaimana mekanisme penyaluran dana sosial PPSI?",
    answer: (
      <p>Dana disalurkan melalui rekening resmi PPSI Digjaya dengan pengesahan pengurus. Setiap penyaluran disertai berita acara dan laporan penggunaan dari perguruan penerima.</p>
    ),
  },
  {
    headingId: "faq-one-heading-4",
    panelId: "faq-one-collapse-4",
    question: "Bagaimana pelaporan kegiatan dan program ke sekretariat?",
    answer: (
      <p>Setiap perguruan menyampaikan laporan kegiatan dan keuangan melalui email sekretariat dan dashboard organisasi setiap triwulan.</p>
    ),
  },
];

const FaqOne = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className='faq'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-12 col-lg-8 col-xl-6'>
            <div className='faq__content'>
              <div
                className='section__content'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                <span className='sub-title'>
                  <i className='icon-donation' />
                  Pertanyaan Umum PPSI Digjaya
                </span>
                <h2 className='title-animation_inner'>
                  Tanya <span>Jawab</span> Organisasi
                </h2>
              </div>
              <div
                className='faq__content-inner cta'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <div className='accordion'>
                  {faqItems.map((item, index) => {
                    const isOpen = openIndex === index;

                    return (
                      <div className='accordion-item' key={item.panelId}>
                        <h6 className='accordion-header' id={item.headingId}>
                          <button
                            className={`accordion-button${isOpen ? "" : " collapsed"}`}
                            type='button'
                            aria-expanded={isOpen}
                            aria-controls={item.panelId}
                            onClick={() => toggleItem(index)}
                          >
                            {item.question}
                          </button>
                        </h6>
                        <div
                          id={item.panelId}
                          className={`accordion-collapse collapse${isOpen ? " show" : ""}`}
                          aria-labelledby={item.headingId}
                        >
                          <div className='accordion-body'>{item.answer}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-4 col-xl-5 offset-xl-1'>
            <div className='faq__thumb d-none d-lg-block'>
              <div className='faq__thumb-inner'>
                <div
                  className='thumb-lg'
                  data-aos='fade-up'
                  data-aos-duration={1000}
                  data-aos-delay={100}
                >
                  <img src='assets/images/faq/thumb-lg.png' alt='Image_inner' />
                </div>
                <div
                  className='thumb-sm'
                  data-aos='fade-left'
                  data-aos-duration={1000}
                  data-aos-delay={300}
                >
                  <img src='assets/images/faq/thumb-sm.png' alt='Image_inner' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='shape d-none d-lg-block'>
        <img src='assets/images/faq/shape.png' alt='Image_inner' />
      </div> */}
    </section>
  );
};

export default FaqOne;


