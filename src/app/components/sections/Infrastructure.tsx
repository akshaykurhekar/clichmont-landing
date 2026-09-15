import Image from "next/image";
import DefaultButton from "../ui/DefaultButton";
import solar from "@/app/logo/solar_panels.png"
import gpu from "@/app/logo/gpu.png"
const gradient =
  "bg-[linear-gradient(110deg,#A855F7_0%,#7C5CFF_45%,#3B6BFF_100%)]";

export default function InfrastructureSection() {
  return (
    <section className="w-full px-5 md:px-10 ">
      <div className="mx-auto w-full flex flex-col gap-6">
        <div className="flex flex-col">
          <h1 className="text-[16px] tracking-wide text-white font-semibold leading-tight sm:text-4xl whitespace-nowrap md:text-[45px]">
            The product came first
          </h1>

          <p className="mt-2 md:max-w-4xl  text-[12px] tracking-normal leading-5 md:leading-6 text-[#808791] sm:text-base">
            Clichmont operates GPU infrastructure for AI workloads. $CLAI is
            built around that operating business, adding an access, staking and
            incentive layer around the compute product. Compute stays simple:
            customers can buy GPU time in USD or stablecoins. $CLAI is used when
            users want additional access, benefits and participation around the
            marketplace.
          </p>
        </div>

        <div className="sm:grid flex flex-1 flex-col gap-2 sm:grid-cols-12 sm:gap-6">
          {/* Need compute */}
          <div
            className="
              flex
              min-h-56
              flex-col
              justify-end
              rounded-lg
              bg-white/4
              p-4
              gap-2
              border
              sm:col-span-4
            "
          >
            <h3 className="text-[18px] md:text-[22px] font-medium text-white">Need compute</h3>

            <p className="mt-1  text-[10px] font-stretch-50% tracking-wide leading-relaxed text-white/40">
              Buy GPU time in USD or stablecoins. Stake $CLT if you want
              additional access, discounts and PCIe credits.
            </p>

            <DefaultButton className="w-35!">Explore Commute</DefaultButton>
          </div>


          {/* Gradient block */}
          <Image
            src={solar}
            className={`
              max-h-85
              rounded-lg
              ${gradient}
              sm:col-span-8
            `} alt={""}          />

          {/* Bottom gradient */}
          <Image
            src={gpu}
            className={`
               hidden md:block
              max-h-85
              rounded-lg
              ${gradient}
              sm:col-span-8
            `} alt={""}          />

          {/* Have GPUs */}
          <div
            className="
            flex
              min-h-56
              flex-col
              justify-end
              rounded-lg
              bg-white/4
              p-4
              gap-2
              sm:col-span-4
            "
          >
            <h3 className="text-[20px] md:text-[22px] font-medium text-white">Have GPUs</h3>

            <p className="mt-1 text-[10px] md:text-[12px] font-stretch-50% tracking-wide leading-relaxed text-white/40">
              Put GPU capacity where there is demand. Compute Validators
              participate in routing and can receive $CLT rewards.
            </p>

            <DefaultButton className="w-35!">Become Provider</DefaultButton>
          </div>

           <Image
            src={gpu}
            className={`
               block md:hidden
              max-h-85
              rounded-lg
              ${gradient}
              sm:col-span-8
            `} alt={""}   />
        </div>
      </div>
    </section>
  );
}
