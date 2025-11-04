import BlogGridInner from "@/components/BlogGridInner";
import BreadcrumbOne from "@/components/BreadcrumbOne";
import FooterOne from "@/components/FooterOne";
import HeaderFour from "@/components/HeaderFour";
import Preloader from "@/components/Preloader";
import TopBarThree from "@/components/TopBarThree";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";

export const metadata = {
  title: "PPSI Digjaya | Berita & Artikel",
  description:
    "Kumpulan berita dan artikel terbaru mengenai pencak silat tradisional Jawa Barat dan Indonesia bersama PPSI Digjaya.",
};

const Page = () => {
  return (
    <AOSWrap>
      <section className='page-wrapper'>
        {/* Preloader */}
        <Preloader />

         
         

        <TopBarThree />

        <HeaderFour />

        {/* BreadcrumbOne */}
        <BreadcrumbOne title='Berita & Artikel' />

        {/* BlogGridInner */}
        <BlogGridInner />

        {/* FooterOne */}
        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default Page;
