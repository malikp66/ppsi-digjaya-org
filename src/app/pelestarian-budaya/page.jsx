import BreadcrumbOne from "@/components/BreadcrumbOne";
import CulturalPreservation from "@/components/CulturalPreservation";
import FooterOne from "@/components/FooterOne";
import HeaderFour from "@/components/HeaderFour";
import Preloader from "@/components/Preloader";
import TopBarThree from "@/components/TopBarThree";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";

export const metadata = {
  title: "Pelestarian Budaya Pencak Silat | PPSI Digjaya",
  description:
    "Sejarah PPSI Digjaya, profil tokoh pendekar, arsip prestasi, perpustakaan digital, dan repository gerakan pencak silat tradisi Jawa Barat.",
};

const CulturalPage = () => {
  return (
    <AOSWrap>
      <section className='page-wrapper'>
        <Preloader />
         
        <TopBarThree />
        <HeaderFour />

        <BreadcrumbOne title='Pelestarian Budaya Pencak Silat' />

        <CulturalPreservation />

        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default CulturalPage;
