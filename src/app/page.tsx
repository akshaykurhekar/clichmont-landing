import HeroSection from "./components/sections/Hero";
import InfrastructureSection from "./components/sections/Infrastructure";

import Services from "./components/sections/Services";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-15 py-4 bg-black">
      <HeroSection />
      {/* <DataCenter/> */}
      <InfrastructureSection />

      <Services />
    </div>
  );
}
