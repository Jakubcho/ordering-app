
import Hero from "../components/layout/Hero";
import HomeMenu from "../components/layout/HomeMenu";
import { SectionHeaders } from "../components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero/>
      <HomeMenu/>
      <section className="text-center my-16" id="about">
        <SectionHeaders
         subHeader={'Nasza historia'}
         mainHeader={'O nas'} />
        <div className="text-gray-500 max-w-xl mt-4 flex flex-col gap-4 mx-auto" >
          <p>
PizzaMania to nie tylko miejsce, gdzie serwujemy pyszne pizze, to prawdziwa historia pasji, smaku i przygody kulinarnej. Od chwili, gdy otworzyliśmy nasze drzwi, naszym celem było stworzenie miejsca, gdzie jedzenie jest nie tylko pożywieniem, ale także doświadczeniem.
          </p>
          <p>
            Nasza filozofia opiera się na połączeniu tradycji włoskiej kuchni z nutką kreatywności i radością. Nasze pizze są wyjątkowe - przygotowywane ręcznie z najświeższych składników, które starannie dobieramy, aby zapewnić najwyższą jakość i smak. Ale w PizzaManii nie chodzi tylko o jedzenie.
          </p>
          <p>
           Chcemy, abyś poczuł się jak w domu, dołączając do naszej rodziny i wspólnie ciesząc się chwilami przy stole. Nasza obsługa jest serdeczna i przyjazna, a atmosfera pełna radości i entuzjazmu. Niezależnie od tego, czy przychodzisz na rodzinny obiad, romantyczną kolację czy spotkanie z przyjaciółmi, w PizzaManii zawsze znajdziesz coś wyjątkowego dla siebie. Dołącz do nas i odkryj, jak pizza może być nie tylko posiłkiem, ale również przygodą dla Twojego podniebienia i serca.
          </p>
        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders
         subHeader={'NIE WAHAJ SIĘ'}
         mainHeader={'Skontaktuj się z nami'}/>
         <div className="mt-8">
           <a className="text-4xl underline text-gray-500" href="tel:+46737123123">+46 737 123 123</a>
        </div>
      </section>

    </>
  )
}
