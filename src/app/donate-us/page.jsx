import BreadcrumbOne from "@/components/BreadcrumbOne";
import DonateInner from "@/components/DonateInner";
import FooterOne from "@/components/FooterOne";
 import HeaderFour from "@/components/HeaderFour";
import Preloader from "@/components/Preloader";
 import TopBarThree from "@/components/TopBarThree";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";

export const metadata = {
  title: "PPSI Digjaya | Dana Sosial & Dukungan Atlet",
  description: "Salurkan dana sosial untuk pembinaan atlet, beasiswa pelatih, dan santunan kesehatan anggota PPSI Digjaya.",
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
        <BreadcrumbOne title='Dana Sosial & Dukungan Atlet' />

        {/* DonateInner */}
        <DonateInner />

        {/* FooterOne */}
        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default page;

