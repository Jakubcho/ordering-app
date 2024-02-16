
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
         subHeader={'Our story'}
         mainHeader={'About us'} />
        <div className="text-gray-500 max-w-md mt-4 flex flex-col gap-4 mx-auto" >
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam voluptatibus harum modi veniam veritatis tempore? Alias aut nesciunt dolorem iste dolore corporis maxime incidunt, mollitia voluptatem et, quae repellendus sed?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam voluptatibus harum modi veniam veritatis tempore? Alias aut nesciunt dolorem iste dolore corporis maxime incidunt, mollitia voluptatem et, quae repellendus sed?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam voluptatibus harum modi veniam veritatis tempore?
          </p>
        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders
         subHeader={'Don\'t hesitate'}
         mainHeader={'Contact us'}/>
         <div className="mt-8">
           <a className="text-4xl underline text-gray-500" href="tel:+46737123123">+46 737 123 123</a>
        </div>
      </section>

    </>
  )
}
