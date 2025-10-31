import BreadcrumbOne from "@/components/BreadcrumbOne";
import ContactUsInner from "@/components/ContactUsInner";
import FooterOne from "@/components/FooterOne";
 import HeaderFour from "@/components/HeaderFour";
import Preloader from "@/components/Preloader";
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
        <BreadcrumbOne title='Contact Us' />

        {/* ContactUsInner */}
        <ContactUsInner />

        {/* FooterOne */}
        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default page;
