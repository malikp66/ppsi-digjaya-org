import BreadcrumbOne from "@/components/BreadcrumbOne";
import DonateInner from "@/components/DonateInner";
import FooterOne from "@/components/FooterOne";
import HeaderFour from "@/components/HeaderFour";
import OverviewOne from "@/components/OverviewOne";
import Preloader from "@/components/Preloader";
import TopBarThree from "@/components/TopBarThree";
import AOSWrap from "@/helper/AOSWrap";
 

export const metadata = {
  title: "PPSI Digjaya | Dana Sosial & Dukungan Atlet",
  description: "Salurkan dana sosial untuk pembinaan atlet, beasiswa pelatih, dan santunan kesehatan anggota PPSI Digjaya.",
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
        <BreadcrumbOne title='Dana Sosial & Dukungan Atlet' />

        {/* OverviewOne */}
        <OverviewOne />

        {/* DonateInner */}
        <DonateInner />

        {/* FooterOne */}
        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default page;

