import BlogDetailsInner from "@/components/BlogDetailsInner";
import BreadcrumbOne from "@/components/BreadcrumbOne";
import FooterOne from "@/components/FooterOne";
import HeaderFour from "@/components/HeaderFour";
import Preloader from "@/components/Preloader";
import TopBarThree from "@/components/TopBarThree";
import AOSWrap from "@/helper/AOSWrap";
 

export const metadata = {
  title: "PPSI Digjaya | Detail Publikasi",
  description:
    "Ulasan lengkap kegiatan dan publikasi pencak silat tradisional yang dikelola oleh PPSI Digjaya.",
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
        <BreadcrumbOne title='Detail Publikasi' />

        {/* BlogDetailsInner */}
        <BlogDetailsInner />

        {/* FooterOne */}
        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default Page;
