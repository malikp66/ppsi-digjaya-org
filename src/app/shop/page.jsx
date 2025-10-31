import BreadcrumbOne from "@/components/BreadcrumbOne";
import FooterOne from "@/components/FooterOne";
 import HeaderFour from "@/components/HeaderFour";
import Preloader from "@/components/Preloader";
import ShopInner from "@/components/ShopInner";
 import TopBarThree from "@/components/TopBarThree";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";

export const metadata = {
  title: "PPSI Digjaya | Toko Atribut & Marketplace",
  description: "Belanja atribut resmi PPSI Digjaya dan jelajahi layanan ekonomi kreatif anggota beserta program dana sosial.",
};

const page = () => {
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
        <BreadcrumbOne title='Toko Atribut & Marketplace Anggota' />

        {/* ShopInner */}
        <ShopInner />

        {/* FooterOne */}
        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default page;

