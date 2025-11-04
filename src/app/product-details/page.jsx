import BreadcrumbOne from "@/components/BreadcrumbOne";
import FooterOne from "@/components/FooterOne";
 import HeaderFour from "@/components/HeaderFour";
import Preloader from "@/components/Preloader";
import ProductDetailsInner from "@/components/ProductDetailsInner";
 import TopBarThree from "@/components/TopBarThree";
import AOSWrap from "@/helper/AOSWrap";
 

export const metadata = {
  title: "PPSI Digjaya | Detail Produk",
  description:
    "Informasi lengkap merchandise dan perlengkapan resmi PPSI Digjaya beserta spesifikasi dan manfaat dukungannya.",
};

const page = () => {
  return (
    <AOSWrap>
      <section className='page-wrapper'>
        {/* Preloader */}
        <Preloader />

         
         

         
        <TopBarThree />

         
        <HeaderFour />

        {/* BreadcrumbOne */}
        <BreadcrumbOne title='Product Details' />

        {/* ProductDetailsInner */}
        <ProductDetailsInner />

        {/* FooterOne */}
        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default page;
