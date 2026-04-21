import Hero from "@/components/Hero";
import QuietProblem from "@/components/QuietProblem";
import Promise from "@/components/Promise";
import WhatWeHelpWith from "@/components/WhatWeHelpWith";
import TwoWaysToMeet from "@/components/TwoWaysToMeet";
import WhosHelping from "@/components/WhosHelping";
import Pricing from "@/components/Pricing";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main>
      <Hero />
      <QuietProblem />
      <Promise />
      <WhatWeHelpWith />
      <TwoWaysToMeet />
      <WhosHelping />
      <Pricing />
      <Booking />
      <Footer />
    </main>
  );
}
