import BreadcrumbOne from "@/components/BreadcrumbOne";
import FooterOne from "@/components/FooterOne";
import HeaderFour from "@/components/HeaderFour";
import OrganizationManagement from "@/components/OrganizationManagement";
import Preloader from "@/components/Preloader";
import TopBarThree from "@/components/TopBarThree";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";

export const metadata = {
  title: "Manajemen Organisasi & Perguruan | PPSI Digjaya",
  description:
    "Profil perguruan anggota PPSI Digjaya, struktur kepengurusan DPW, pengumuman internal, serta ringkasan laporan dan analitik organisasi.",
};

const OrganizationPage = () => {
  return (
    <AOSWrap>
      <section className='page-wrapper'>
        <Preloader />
         
        <TopBarThree />
        <HeaderFour />

        <BreadcrumbOne title='Manajemen Organisasi & Perguruan' />

        <OrganizationManagement />

        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default OrganizationPage;
