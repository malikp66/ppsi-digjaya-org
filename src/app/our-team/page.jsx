import BreadcrumbOne from "@/components/BreadcrumbOne";
import FooterOne from "@/components/FooterOne";
 import HeaderFour from "@/components/HeaderFour";
import Preloader from "@/components/Preloader";
import TeamInner from "@/components/TeamInner";
 import TopBarThree from "@/components/TopBarThree";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";

export const metadata = {
  title: "ppsi | Nonprofit & Fundraising Charity NEXT JS Template",
  description: "Nonprofit & Fundraising Charity NEXT JS Template.",
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
        <BreadcrumbOne title='Our Team' />

        {/* TeamInner */}
        <TeamInner />

        {/* FooterOne */}
        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default page;
