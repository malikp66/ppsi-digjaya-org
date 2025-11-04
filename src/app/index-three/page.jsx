import BannerThree from "@/components/BannerThree";
import CauseSliderThree from "@/components/CauseSliderThree";
import ContactOne from "@/components/ContactOne";
import CounterOne from "@/components/CounterOne";
import DifferenceThree from "@/components/DifferenceThree";
import DonationFutureOne from "@/components/DonationFutureOne";
import EventOne from "@/components/EventOne";
import FaqTwo from "@/components/FaqTwo";
import FooterOne from "@/components/FooterOne";
import HeaderFour from "@/components/HeaderFour";
import HelpThree from "@/components/HelpThree";
import OverviewOne from "@/components/OverviewOne";
import PartnerThree from "@/components/PartnerThree";
import Preloader from "@/components/Preloader";
import TeamThree from "@/components/TeamThree";
import TestimonialThree from "@/components/TestimonialThree";
import TopBarThree from "@/components/TopBarThree";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";

export const metadata = {
  title: "PPSI Digjaya | Agenda & Program",
  description:
    "Beranda versi ketiga PPSI Digjaya yang menyorot agenda event, dukungan komunitas, dan peluang kolaborasi.",
};

const page = () => {
  return (
    <AOSWrap>
      <section className='page-wrapper pg-four'>
        {/* Preloader */}
        <Preloader />

        {/* TopBarThree */}
        <TopBarThree />

        <HeaderFour />

        {/* BannerThree */}
        <BannerThree />

        {/* OverviewOne */}
        <OverviewOne />

        {/* DifferenceThree */}
        <DifferenceThree />

        {/* DonationFutureOne */}
        <DonationFutureOne />

        {/* CauseSliderThree */}
        <CauseSliderThree />

        {/* TeamThree */}
        <TeamThree />

        {/* HelpThree */}
        <HelpThree />

        {/* PartnerThree */}
        <PartnerThree />

        {/* CounterOne */}
        <CounterOne />

        {/* TestimonialThree */}
        <TestimonialThree />

        {/* FaqTwo */}
        <FaqTwo />

        {/* EventOne */}
        <EventOne />

        {/* ContactOne */}
        <ContactOne />

        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default page;
