import BlogListInner from "@/components/BlogListInner";
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
    "Artikel pilihan mengenai pencak silat tradisional dari padepokan anggota PPSI Digjaya di Jawa Barat dan Indonesia.",
};

const Page = () => {
  return (
    <AOSWrap>
      <section className='page-wrapper'>
        {/* Preloader */}
        <Preloader />

        {/* CustomCursor  */}
        <CustomCursor />

        <TopBarThree />

        <HeaderFour />

        {/* BreadcrumbOne */}
        <BreadcrumbOne title='Berita & Artikel' />

        {/* BlogListInner */}
        <BlogListInner />

        {/* FooterOne */}
        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default Page;
