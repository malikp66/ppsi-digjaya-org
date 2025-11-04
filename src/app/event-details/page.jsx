import BreadcrumbOne from "@/components/BreadcrumbOne";
import EventDetailsInner from "@/components/EventDetailsInner";
import FooterOne from "@/components/FooterOne";
 import HeaderFour from "@/components/HeaderFour";
import Preloader from "@/components/Preloader";
 import TopBarThree from "@/components/TopBarThree";
import AOSWrap from "@/helper/AOSWrap";
 

export const metadata = {
  title: "PPSI Digjaya | Detail Agenda",
  description:
    "Informasi lengkap agenda resmi PPSI Digjaya termasuk jadwal, lokasi, dan rangkaian kegiatan unggulan.",
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
        <BreadcrumbOne title='Event Details' />

        {/* EventDetailsInner */}
        <EventDetailsInner />

        {/* FooterOne */}
        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default page;
