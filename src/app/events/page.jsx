import BreadcrumbOne from "@/components/BreadcrumbOne";
import EventInner from "@/components/EventInner";
import FooterOne from "@/components/FooterOne";
 import HeaderFour from "@/components/HeaderFour";
import Preloader from "@/components/Preloader";
 import TopBarThree from "@/components/TopBarThree";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";

export const metadata = {
  title: "PPSI Digjaya | Kalender Budaya & Kegiatan",
  description: "Daftar agenda pelestarian budaya, latihan gabungan, dan kegiatan organisasi PPSI Digjaya sepanjang tahun.",
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
        <BreadcrumbOne title='Kegiatan & Kalender Budaya' />

        {/* EventInner */}
        <EventInner />

        {/* FooterOne */}
        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default page;

