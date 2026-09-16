import React from 'react'
import img1 from "@/app/logo/service_1.png";
import Image from 'next/image';
import DefaultButton from './DefaultButton';
const ServiceCard1 = ({ isStacked = false }) => {
    return (

        <div
            className={`w-full sm:max-w-75 h-95 sm:h-100 overflow-hidden flex flex-col rounded-2xl p-3 gap-4 md:gap-8 ${isStacked ? "sm:h-96" : "sm:h-80"}`}
            style={{
                background:
                    "linear-gradient(160deg, #2B3286 45%,#DE027A 100%)",
            }}
        >
            {/* Illustration panel */}
            <Image
                src={img1}
                alt={"GPU"}
                className="h-48 w-full rounded-xl object-cover sm:h-44"
            />

            {/* Copy */}
            <div className="">
                <h3 className="text-lg font-semibold tracking-wide text-white">
                    I use Clichmont compute
                </h3>
                <p className="mt-1 text-xs leading-relaxed tracking-wide text-white/80">
                    Learn what $CLAI changes for an existing Clichmont customer:
                    priority access, discounts and βCLAI credits.
                </p>

            </div>
            <DefaultButton className="bg-[#A2195B]!">
                See Customer Benefits
            </DefaultButton>
        </div>
    )
}

export default ServiceCard1