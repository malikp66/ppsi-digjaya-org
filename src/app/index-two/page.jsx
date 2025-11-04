import AwardOne from "@/components/AwardOne";
import BannerTwo from "@/components/BannerTwo";
import BlogTwo from "@/components/BlogTwo";
import CauseSliderOne from "@/components/CauseSliderOne";
import CtaSectionTwo from "@/components/CtaSectionTwo";
import FaqOne from "@/components/FaqOne";
import FooterOne from "@/components/FooterOne";
import GalleryOne from "@/components/GalleryOne";
import HeaderFour from "@/components/HeaderFour";
import HelpTwo from "@/components/HelpTwo";
import PartnerTwo from "@/components/PartnerTwo";
import Preloader from "@/components/Preloader";
import TeamTwo from "@/components/TeamTwo";
import TestimonialTwo from "@/components/TestimonialTwo";
import TopBarThree from "@/components/TopBarThree";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";

export const metadata = {
  title: "PPSI Digjaya | Showcase Program",
  description:
    "Tampilan alternatif situs PPSI Digjaya yang menyorot kolaborasi komunitas, penghargaan, dan cerita inspiratif pesilat.",
};

const page = () => {
  return (
    <AOSWrap>
      <section className='page-wrapper pg-four'>
        {/* Preloader */}
        <Preloader />

        <TopBarThree />

        <HeaderFour />

        {/* BannerTwo */}
        <BannerTwo />

        {/* HelpTwo */}
        <HelpTwo />

        {/* CauseSliderOne */}
        <CauseSliderOne />

        {/* CtaSectionTwo */}
        <CtaSectionTwo />

        {/* AwardOne */}
        <AwardOne />

        {/* TeamTwo */}
        <TeamTwo />

        {/* FaqOne */}
        <FaqOne />

        {/* PartnerTwo */}
        <PartnerTwo />

        {/* TestimonialTwo */}
        <TestimonialTwo />

        {/* BlogTwo */}
        <BlogTwo />

        {/* GalleryOne */}
        <GalleryOne />

        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default page;
