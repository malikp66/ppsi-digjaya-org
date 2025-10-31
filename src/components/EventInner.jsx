"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { eventsData, eventFilters } from "@/data/events";

const EventInner = () => {
  const [selectedFilter, setSelectedFilter] = useState("Semua");

  const filteredEvents = useMemo(() => {
    if (selectedFilter === "Semua") return eventsData;
    return eventsData.filter((event) => event.kategori === selectedFilter);
  }, [selectedFilter]);

  return (
    <section className='event event-alt'>
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
                Kalender Budaya &amp; Kegiatan PPSI Digjaya
              </span>
              <h2 className='title-animation_inner'>
                Sinergi agenda <span>pelestarian</span> dan pembinaan
              </h2>
            </div>
            <div className='event__filter' data-aos='fade-up' data-aos-duration={1000} data-aos-delay={100}>
              <ul>
                {eventFilters.map((filter) => (
                  <li key={filter}>
                    <button
                      type='button'
                      className={filter === selectedFilter ? "active" : ""}
                      onClick={() => setSelectedFilter(filter)}
                    >
                      {filter}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className='row gutter-30'>
          {filteredEvents.map((event) => (
            <div className='col-12 col-lg-6' key={event.id}>
              <div
                className='event__single-wrapper'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={50}
              >
                <div className='event__single van-tilt'>
                  <div className='event__single-thumb'>
                    <img src='assets/images/event/one.png' alt='Image_inner' />
                  </div>
                  <div className='event__content'>
                    <span>{event.tanggal}</span>
                    <h4>
                      <Link href='/event-details'>{event.nama}</Link>
                    </h4>
                    <p>
                      <i className='fa-solid fa-location-dot' /> {event.lokasi}
                    </p>
                    <p className='event__excerpt'>{event.deskripsi}</p>
                    <div className='event__meta'>
                      <span className='badge'>{event.kategori}</span>
                      <Link href='/event-details' className='link'>
                        Detail Kegiatan <i className='fa-solid fa-arrow-right' />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='row gutter-30 mt-40'>
          <div className='col-12'>
            <div
              className='volunteer__content membership-card'
              data-aos='fade-up'
              data-aos-duration={1000}
              data-aos-delay={200}
            >
              <h5>Daftar Kegiatan</h5>
              <p>
                Isi formulir berikut untuk mendaftarkan perguruan atau komunitas Anda pada agenda PPSI Digjaya.
              </p>
              <form className='event-register cta' onSubmit={(event) => event.preventDefault()}>
                <div className='input-group'>
                  <div className='input-single'>
                    <input type='text' name='nama' placeholder='Nama Lengkap' required />
                    <i className='fa-solid fa-user' />
                  </div>
                  <div className='input-single'>
                    <input type='text' name='perguruan' placeholder='Perguruan / Komunitas' required />
                    <i className='fa-solid fa-people-group' />
                  </div>
                </div>
                <div className='input-group'>
                  <div className='input-single'>
                    <input type='tel' name='kontak' placeholder='Kontak WhatsApp' required />
                    <i className='fa-solid fa-phone' />
                  </div>
                  <div className='input-single'>
                    <select name='agenda' required defaultValue=''>
                      <option value='' disabled>
                        Pilih Agenda
                      </option>
                      {eventsData.map((agenda) => (
                        <option key={agenda.id} value={agenda.nama}>
                          {agenda.nama}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className='input-single alter-input'>
                  <textarea name='catatan' placeholder='Catatan tambahan (opsional)' />
                  <i className='fa-solid fa-comments' />
                </div>
                <div className='form-cta'>
                  <button type='submit' className='btn--primary'>
                    Kirim Pendaftaran <i className='fa-solid fa-arrow-right' />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className='spade'>
        <img src='assets/images/blog/spade-base.png' alt='Image_inner' className='base-img' />
      </div>
    </section>
  );
};

export default EventInner;
