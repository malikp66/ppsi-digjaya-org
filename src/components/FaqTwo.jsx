"use client";

import { useState } from "react";

const faqItems = [
  {
    headingId: "faq-two-heading-1",
    panelId: "faq-two-collapse-1",
    question: "What kind of recipes can I find on your website?",
    answer: (
      <p>
        It is a long established fact that a reader will be distracted by the readable the a content of a page when
        looking at its layout. Many desktop publishing packages and web page editors.
      </p>
    ),
  },
  {
    headingId: "faq-two-heading-2",
    panelId: "faq-two-collapse-2",
    question: "Are the recipes suitable for beginners?",
    answer: (
      <p>
        It is a long established fact that a reader will be distracted by the readable the a content of a page when
        looking at its layout. Many desktop publishing packages and web page editors.
      </p>
    ),
  },
  {
    headingId: "faq-two-heading-3",
    panelId: "faq-two-collapse-3",
    question: "Do you offer cooking tips and techniques?",
    answer: (
      <p>
        It is a long established fact that a reader will be distracted by the readable the a content of a page when
        looking at its layout. Many desktop publishing packages and web page editors.
      </p>
    ),
  },
  {
    headingId: "faq-two-heading-4",
    panelId: "faq-two-collapse-4",
    question: "How frequently do you update your recipe collection?",
    answer: (
      <p>
        It is a long established fact that a reader will be distracted by the readable the a content of a page when
        looking at its layout. Many desktop publishing packages and web page editors.
      </p>
    ),
  },
];

const FaqTwo = () => {
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
                  Mulai berdonasi untuk masyarakat rentan
                </span>
                <h2 className='title-animation_inner'>
                  Frequently <span>Asked</span>
                  Questions
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

export default FaqTwo;
