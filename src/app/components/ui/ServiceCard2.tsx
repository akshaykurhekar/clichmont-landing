import React from 'react'
import img2 from "@/app/logo/service_2.png";
import Image from 'next/image';
import DefaultButton from './DefaultButton';
const ServiceCard2 = ({isStacked=false}) => {
  return (
      <div
          className={`w-full sm:max-w-75 h-95  overflow-hidden flex flex-col rounded-2xl p-3 gap-6 bg-[#9550FF] ${isStacked? "sm:h-90":"sm:h-96"}`}
          
        >
          {/* Illustration panel */}
          <Image
            src={img2}
            alt={"GPU"}
            className="h-48 w-full rounded-xl object-cover sm:h-44"
          />

          {/* Copy */}
          <div className="">
            <h3 className="text-lg font-semibold text-white tracking-wide">
              I&apos;m here for CLAI
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-white/80 tracking-wide">
            Understand why the token exists, how it connects to the business, and what holding or staking unlocks.
            </p>

          </div>
            <DefaultButton className="bg-[#A2195B]!">
              See Customer Benefits
            </DefaultButton>
        </div>
  )
}

export default ServiceCard2