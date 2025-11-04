import ComingSoonInner from "@/components/ComingSoonInner";
import Preloader from "@/components/Preloader";
import AOSWrap from "@/helper/AOSWrap";
 

export const metadata = {
  title: "PPSI Digjaya | Segera Hadir",
  description:
    "Pantau pembaruan fitur digital dan agenda terbaru PPSI Digjaya yang segera diluncurkan.",
};

const page = () => {
  return (
    <AOSWrap>
      <section className='page-wrapper'>
        {/* Preloader */}
        <Preloader />

         
         

        {/* ComingSoonInner */}
        <ComingSoonInner />
      </section>
    </AOSWrap>
  );
};

export default page;
