import BreadcrumbOne from "@/components/BreadcrumbOne";
import CertificateCenter from "@/components/CertificateCenter";
import FooterOne from "@/components/FooterOne";
import HeaderFour from "@/components/HeaderFour";
import Preloader from "@/components/Preloader";
import TopBarThree from "@/components/TopBarThree";
import AOSWrap from "@/helper/AOSWrap";
 

export const metadata = {
  title: "Sertifikat Online PPSI Digjaya",
  description:
    "Verifikasi sertifikat keanggotaan, pelatih, dan atlet PPSI Digjaya secara daring lengkap dengan arsip dan pengingat kedaluwarsa.",
};

const CertificatePage = () => {
  return (
    <AOSWrap>
      <section className='page-wrapper'>
        <Preloader />
         
        <TopBarThree />
        <HeaderFour />

        <BreadcrumbOne title='Sertifikat Online' />

        <CertificateCenter />

        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default CertificatePage;
