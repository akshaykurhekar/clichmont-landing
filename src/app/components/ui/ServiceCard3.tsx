import img3 from "@/app/logo/service_3.png";
import Image from "next/image";
import DefaultButton from "./DefaultButton";

const ServiceCard3 = ({isStacked=false}) => {
    return (
        <div className={`w-full sm:max-w-75 h-95 overflow-hidden flex flex-col rounded-2xl p-3 gap-6 bg-[#356DFF] ${isStacked? "sm:h-90":"sm:h-96"}`}>
            {/* Illustration panel */}
            <Image
                src={img3}
                alt={"GPU"}
                className="h-48 w-full rounded-xl object-cover sm:h-44"
            />

            {/* Copy */}
            <div className="">
                <h3 className="text-lg font-semibold text-white tracking-wide">
                    I provide GPU capacity
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-white/80 tracking-wide">
                    Learn how providers and Compute Validators participate in routing and
                    network rewards.{" "}
                </p>
            </div>
            <DefaultButton className="bg-[#A2195B]!">
                See Customer Benefits
            </DefaultButton>
        </div>
    );
};

export default ServiceCard3;
