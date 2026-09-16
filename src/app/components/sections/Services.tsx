
import ServiceCard1 from "../ui/ServiceCard1";
import ServiceCard2 from "../ui/ServiceCard2";
import ServiceCard3 from "../ui/ServiceCard3";
import WhatBringsYouHere from "../ui/WhatBringsYouHere";


const Services = () => {
  return (
    <div className=" flex flex-col gap-25 md:gap-10  w-full  ">

         <WhatBringsYouHere/>
       
<div className="gap-6 w-full flex flex-col px-5 md:px-0 justify-center items-center">


      <ServiceCard1 />
      <ServiceCard2 />
      <ServiceCard3 />
</div>
    </div>
    // <div className="p-2 flex flex-col gap-2">

    //     <div
    //         className="w-full sm:max-w-100 h-110 sm:h-130 overflow-hidden flex flex-col rounded-2xl p-4 gap-4"
    //         style={{
    //             background:
    //                 "linear-gradient(160deg, #2B3286 45%,#DE027A 100%)",
    //         }}
    //     >
    //         {/* Illustration panel */}
    //         <Image
    //             src={img1}
    //             alt={"GPU"}
    //             className="sm:max-w-92 h-65 sm:h-80 rounded-2xl"
    //         />

    //         {/* Copy */}
    //         <div className="">
    //             <h3 className="text-lg font-semibold text-white">
    //                 I use Clichmont compute
    //             </h3>
    //             <p className="mt-2 text-sm leading-relaxed text-white/80">
    //                 Learn what $CLAI changes for an existing Clichmont customer:
    //                 priority access, discounts and βCLAI credits.
    //             </p>

    //         </div>
    //         <DefaultButton className="bg-[#A2195B]!">
    //             See Customer Benefits
    //         </DefaultButton>
    //     </div>

    //     {/* card 2 */}
    //     <div
    //         className="w-full sm:max-w-100 h-110 sm:h-130 overflow-hidden flex flex-col rounded-2xl p-4 gap-4 bg-[#9550FF]"

    //     >
    //         {/* Illustration panel */}
    //         <Image
    //             src={img2}
    //             alt={"GPU"}
    //             className="sm:max-w-92 h-65 sm:h-80 rounded-2xl"
    //         />

    //         {/* Copy */}
    //         <div className="">
    //             <h3 className="text-lg font-semibold text-white">
    //                 I&apos;m here for CLAI
    //             </h3>
    //             <p className="mt-2 text-sm leading-relaxed text-white/80">
    //                 Understand why the token exists, how it connects to the business, and what holding or staking unlocks.
    //             </p>

    //         </div>
    //         <DefaultButton className="bg-[#A2195B]!">
    //             See Customer Benefits
    //         </DefaultButton>
    //     </div>

    //     {/* card 3 */}
    //     <div
    //         className="w-full sm:max-w-100 h-110 sm:h-130 overflow-hidden flex flex-col rounded-2xl p-4 gap-4 bg-[#356DFF]"

    //     >
    //         {/* Illustration panel */}
    //         <Image
    //             src={img2}
    //             alt={"GPU"}
    //             className="sm:max-w-92 h-65 sm:h-80 rounded-2xl"
    //         />

    //         {/* Copy */}
    //         <div className="">
    //             <h3 className="text-lg font-semibold text-white">
    //                 I provide GPU capacity
    //             </h3>
    //             <p className="mt-2 text-sm leading-relaxed text-white/80">
    //                 Learn how providers and Compute Validators participate in routing and network rewards. </p>

    //         </div>
    //         <DefaultButton className="bg-[#A2195B]!">
    //             See Customer Benefits
    //         </DefaultButton>
    //     </div>

    // </div>
  );
};

export default Services;
