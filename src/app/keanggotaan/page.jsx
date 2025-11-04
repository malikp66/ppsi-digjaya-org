import BreadcrumbOne from "@/components/BreadcrumbOne";
import FooterOne from "@/components/FooterOne";
import HeaderFour from "@/components/HeaderFour";
import MembershipForm from "@/components/MembershipForm";
import Preloader from "@/components/Preloader";
import TopBarThree from "@/components/TopBarThree";
import AOSWrap from "@/helper/AOSWrap";
 

export const metadata = {
  title: "Keanggotaan PPSI Digjaya | Formulir Anggota & Iuran",
  description:
    "Daftar sebagai anggota PPSI Digjaya untuk mengakses program pembinaan, dana sosial, dan jaringan perguruan pencak silat tradisional Jawa Barat.",
};

const MembershipPage = () => {
  return (
    <AOSWrap>
      <section className='page-wrapper'>
        <Preloader />
         
        <TopBarThree />
        <HeaderFour />

        <BreadcrumbOne title='Keanggotaan PPSI Digjaya' />

        <MembershipForm />

        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default MembershipPage;
