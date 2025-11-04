import BreadcrumbOne from "@/components/BreadcrumbOne";
import FooterOne from "@/components/FooterOne";
import HeaderFour from "@/components/HeaderFour";
import Preloader from "@/components/Preloader";
import TopBarThree from "@/components/TopBarThree";
import TrainingDashboard from "@/components/TrainingDashboard";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";

export const metadata = {
  title: "Pelatihan & Atlet PPSI Digjaya",
  description:
    "Modul pelatihan online, jadwal latihan terpusat, profil pelatih, dan dashboard kinerja atlet PPSI Digjaya.",
};

const TrainingPage = () => {
  return (
    <AOSWrap>
      <section className='page-wrapper'>
        <Preloader />
         
        <TopBarThree />
        <HeaderFour />

        <BreadcrumbOne title='Pelatihan & Atlet PPSI Digjaya' />

        <TrainingDashboard />

        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default TrainingPage;
