import BannerFour from "@/components/BannerFour";
import BlogThree from "@/components/BlogThree";
import CauseTwo from "@/components/CauseTwo";
import CommitOne from "@/components/CommitOne";
import CommunityTwo from "@/components/CommunityTwo";
import ContactTwo from "@/components/ContactTwo";
import CounterTwo from "@/components/CounterTwo";
import FooterOne from "@/components/FooterOne";
import GoalOne from "@/components/GoalOne";
import HeaderFour from "@/components/HeaderFour";
import PartnerFour from "@/components/PartnerFour";
import Preloader from "@/components/Preloader";
import ProfitOne from "@/components/ProfitOne";
import SocialOne from "@/components/SocialOne";
import TeamFour from "@/components/TeamFour";
import TestimonialFour from "@/components/TestimonialFour";
import TopBarThree from "@/components/TopBarThree";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";

export const metadata = {
  title: "charifund | Nonprofit & Fundraising Charity NEXT JS Template",
  description: "Nonprofit & Fundraising Charity NEXT JS Template.",
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

        {/* HeaderFour */}
        <HeaderFour />

        {/* BannerFour */}
        <BannerFour />

        {/* CounterTwo */}
        <CounterTwo />

        {/* GoalOne */}
        <GoalOne />

        {/* CommitOne */}
        <CommitOne />

        {/* ProfitOne */}
        <ProfitOne />

        {/* CauseTwo */}
        <CauseTwo />

        {/* CommunityTwo */}
        <CommunityTwo />

        {/* PartnerFour */}
        <PartnerFour />

        {/* TeamFour */}
        <TeamFour />

        {/* TestimonialFour */}
        <TestimonialFour />

        {/* SocialOne */}
        <SocialOne />

        {/* BlogThree */}
        <BlogThree />

        {/* ContactTwo */}
        <ContactTwo />

        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default page;
