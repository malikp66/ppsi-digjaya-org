import BreadcrumbOne from "@/components/BreadcrumbOne";
import CauseDetailsInner from "@/components/CauseDetailsInner";
import FooterOne from "@/components/FooterOne";
 import HeaderFour from "@/components/HeaderFour";
import Preloader from "@/components/Preloader";
 import TopBarThree from "@/components/TopBarThree";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";

export const metadata = {
  title: "PPSI Digjaya | Detail Program",
  description:
    "Uraian lengkap program pelestarian dan pemberdayaan PPSI Digjaya beserta manfaat serta agenda kegiatannya.",
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
        <BreadcrumbOne title='Cause Details' />

        {/* CauseDetailsInner */}
        <CauseDetailsInner />

        {/* FooterOne */}
        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default page;
