import ErrorInner from "@/components/ErrorInner";
import Preloader from "@/components/Preloader";
import AOSWrap from "@/helper/AOSWrap";
 

export default function NotFound() {
  return (
    <AOSWrap>
      <section className='page-wrapper'>
        {/* Preloader */}
        <Preloader />

         
         

        {/* ErrorInner */}
        <ErrorInner />
      </section>
    </AOSWrap>
  );
}
