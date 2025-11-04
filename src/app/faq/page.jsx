import BreadcrumbOne from "@/components/BreadcrumbOne";
import CtaSectionOne from "@/components/CtaSectionOne";
import FaqOne from "@/components/FaqOne";
import FooterOne from "@/components/FooterOne";
 import HeaderFour from "@/components/HeaderFour";
import Preloader from "@/components/Preloader";
import TeamTwo from "@/components/TeamTwo";
 import TopBarThree from "@/components/TopBarThree";
import AOSWrap from "@/helper/AOSWrap";
 

export const metadata = {
  title: "PPSI Digjaya | Pertanyaan Umum",
  description:
    "Temukan jawaban mengenai keanggotaan, program pelatihan, dan kolaborasi bersama PPSI Digjaya.",
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
        <BreadcrumbOne title='Frequently Asked Questions' />

        {/* FaqOne */}
        <FaqOne />

        {/* CtaSectionOne */}
        <CtaSectionOne />

        {/* TeamTwo */}
        <TeamTwo />

        {/* FooterOne */}
        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default page;
