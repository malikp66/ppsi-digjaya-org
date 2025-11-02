import Link from "next/link";

const galleryItems = [
  {
    image: "assets/images/gallery/one.png",
    alt: "Pesilat menampilkan jurus Cimande pada festival PPSI Digjaya",
  },
  {
    image: "assets/images/gallery/two.png",
    alt: "Pesilat perempuan memimpin rampak gendang di Bandung",
  },
  {
    image: "assets/images/gallery/three.png",
    alt: "Latihan gabungan pesilat remaja di padepokan tradisional",
  },
  {
    image: "assets/images/gallery/four.png",
    alt: "Sesepuh memberikan petuah kepada peserta festival",
  },
  {
    image: "assets/images/gallery/five.png",
    alt: "Pesilat mengibarkan bendera PPSI Digjaya setelah kejuaraan",
  },
  {
    image: "assets/images/gallery/six.png",
    alt: "Anak-anak belajar jurus dasar pencak silat di sekolah adat",
  },
];

const GalleryOne = () => {
  return (
    <div className='gallery'>
      <div className='gallery__inner'>
        <div className='gallery__slider'>
          {[...galleryItems, ...galleryItems].map((item, index) => (
            <div className='gallery__single' key={`${item.image}-${index}`}>
              <img src={item.image} alt={item.alt} />
              <Link
                href='/blog-grid'
                aria-label='Lihat dokumentasi kegiatan pencak silat'
                title='Lihat dokumentasi kegiatan pencak silat'
              >
                <i className='fa-solid fa-arrow-up-right-from-square' />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryOne;

