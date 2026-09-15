import HeroSection from "./components/sections/Hero";
import InfrastructureSection from "./components/sections/Infrastructure";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 py-4 bg-black">
        <HeroSection/>
        <InfrastructureSection/>
        </div>
      
  );
}
