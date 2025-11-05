import BannerOne from "@/components/BannerOne";
import BlogOne from "@/components/BlogOne";
import CauseOne from "@/components/CauseOne";
import CauseSliderTwo from "@/components/CauseSliderTwo";
import CommunityOne from "@/components/CommunityOne";
import CtaSectionOne from "@/components/CtaSectionOne";
import DifferenceThree from "@/components/DifferenceThree";
import DifferenceTwo from "@/components/DifferenceTwo";
import FooterOne from "@/components/FooterOne";
 import HeaderFour from "@/components/HeaderFour";
import HelpOne from "@/components/HelpOne";
import PartnerOne from "@/components/PartnerOne";
import TestimonialOne from "@/components/TestimonialOne";
 import TopBarThree from "@/components/TopBarThree";
import AOSWrap from "@/helper/AOSWrap";
import Preloader from "@/components/Preloader";
import TeamTwo from "@/components/TeamTwo";
 

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
         
        <TopBarThree />
         
        <HeaderFour />

        {/* BannerOne */}
        <BannerOne />

        {/* PartnerOne */}
        <PartnerOne />

        {/* DifferenceTwo */}
        <DifferenceTwo />

        {/* DifferenceThree */}
        <DifferenceThree />

        {/* CauseOne */}
        <CauseOne />

        {/* CtaSectionOne */}
        <CtaSectionOne />

        <TeamTwo />

        {/* CommunityOne */}
        <CommunityOne />

        {/* TestimonialOne */}
        <TestimonialOne />

        {/* CauseSliderTwo */}
        <CauseSliderTwo />

        {/* HelpOne */}
        <HelpOne />

        {/* BlogOne */}
        <BlogOne />

        {/* FooterOne */}
        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default page;
