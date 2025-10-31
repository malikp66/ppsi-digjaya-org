import BannerOne from "@/components/BannerOne";
import BlogOne from "@/components/BlogOne";
import CauseOne from "@/components/CauseOne";
import CauseSliderTwo from "@/components/CauseSliderTwo";
import CommunityOne from "@/components/CommunityOne";
import CtaSectionOne from "@/components/CtaSectionOne";
import DifferenceOne from "@/components/DifferenceOne";
import DifferenceTwo from "@/components/DifferenceTwo";
import FooterOne from "@/components/FooterOne";
 import HeaderFour from "@/components/HeaderFour";
import HelpOne from "@/components/HelpOne";
import PartnerOne from "@/components/PartnerOne";
import TeamOne from "@/components/TeamOne";
import TestimonialOne from "@/components/TestimonialOne";
 import TopBarThree from "@/components/TopBarThree";
import AOSWrap from "@/helper/AOSWrap";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/helper/CustomCursor";

export const metadata = {
  title: "PPSI Digjaya | Pelestari Pencak Silat Tradisi Jawa Barat",
  description:
    "Beranda resmi PPSI Digjaya dengan program budaya, pasanggiri, dukungan atlet, dan marketplace anggota pencak silat Jawa Barat.",
};

const page = () => {
  return (
    <AOSWrap>
      <section className='page-wrapper pg-four'>
        {/* Preloader */}
        <Preloader />

        {/* CustomCursor  */}
        <CustomCursor />

         
        <TopBarThree />

         
        <HeaderFour />

        {/* BannerOne */}
        <BannerOne />

        {/* PartnerOne */}
        <PartnerOne />

        {/* DifferenceOne */}
        <DifferenceOne />

        {/* HelpOne */}
        <HelpOne />

        {/* CauseOne */}
        <CauseOne />

        {/* CtaSectionOne */}
        <CtaSectionOne />

        {/* TeamOne */}
        <TeamOne />

        {/* CommunityOne */}
        <CommunityOne />

        {/* TestimonialOne */}
        <TestimonialOne />

        {/* CauseSliderTwo */}
        <CauseSliderTwo />

        {/* DifferenceTwo */}
        <DifferenceTwo />

        {/* BlogOne */}
        <BlogOne />

        {/* FooterOne */}
        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default page;
