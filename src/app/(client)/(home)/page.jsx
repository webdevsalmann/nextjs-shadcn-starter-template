import Hero from "./Hero";
import Introduction from "./Introduction";
import Process from "./Process";
import Testimonial from "./Testimonial";
import Inclusion from "./Inclusion";
import Pricing from "./Pricing";
import About from "./About";
import Criteria from "./Criteria";
import FAQ from "./FAQ";
import CTA from "./CTA";


export default function Home() {
  return (
    <main>
      <Hero />
      <Introduction/>
      <Process />
      <Testimonial />
      <Inclusion />
      <Pricing />
      <About />
      <Criteria />
      <FAQ />
      <CTA />
    </main>
  );
}
