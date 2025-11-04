import BreadcrumbOne from "@/components/BreadcrumbOne";
import ContactOne from "@/components/ContactOne";
import CtaSectionTwo from "@/components/CtaSectionTwo";
import DifferenceTwo from "@/components/DifferenceTwo";
import FaqOne from "@/components/FaqOne";
import FooterOne from "@/components/FooterOne";
import GalleryOne from "@/components/GalleryOne";
 import HeaderFour from "@/components/HeaderFour";
import HelpOne from "@/components/HelpOne";
import Preloader from "@/components/Preloader";
import TeamTwo from "@/components/TeamTwo";
import TestimonialOne from "@/components/TestimonialOne";
 import TopBarThree from "@/components/TopBarThree";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";

export const metadata = {
  title: "PPSI Digjaya | Tentang Organisasi",
  description:
    "Pelajari sejarah, struktur pengurus, dan komitmen PPSI Digjaya dalam mengembangkan pencak silat tradisi Jawa Barat.",
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
        <BreadcrumbOne title='About Us' />

        {/* HelpOne */}
        <HelpOne />

        {/* CtaSectionTwo */}
        <CtaSectionTwo />

        {/* TeamTwo */}
        <TeamTwo />

        {/* FaqOne */}
        <FaqOne />

        {/* TestimonialOne */}
        <TestimonialOne />

        {/* ContactOne */}
        <ContactOne />

        {/* DifferenceTwo */}
        <DifferenceTwo />

        {/* GalleryOne */}
        <GalleryOne />

        {/* FooterOne */}
        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default page;
