"use client";

import ServiceCard1 from "./ServiceCard1";
import ServiceCard2 from "./ServiceCard2";
import ServiceCard3 from "./ServiceCard3";

export default function WhatBringsYouHere() {
    return (
        <section className="relative w-full flex flex-col    bg-black sm:gap-0 gap-25 text-white">
            {/* Heading */}
            <div className="mx-auto w-full  gap-4 flex flex-col items-center justify-center">
                <h2 className="text-base md:text-3xl font-bold  sm:text-4xl">What brings you here?</h2>
                <p className=" text-xs md:text-sm max-w-md  text-center leading-relaxed text-white/50 sm:text-base">
                    Lorem ipsum dolor sit amet consectetur. Feugiat aenean quisque fuse
                    imperdiet risus. Enim pharetra ultricies.
                </p>
            </div>

            {/* Layered card stack */}
            <div className="relative mx-auto   h-55 w-full sm:h-115 ">

                {/* Background label bands, sit behind the cards */}
                <div
                    className="absolute inset-x-0 top-1/2 z-0 h-28 -translate-y-1/2 overflow-hidden sm:h-30"
                    style={{ background: "linear-gradient(90deg, #7c3aed, #3b82f6)" }}
                >
                    <div className="  hidden md:flex  h-full items-center justify-center gap-150 px-3 sm:px-8">
                        <span className="  text-2xl font-extrabold tracking-wide text-white sm:text-4xl">
                            PROVIDER
                        </span>
                        <span className=" text-2xl font-extrabold tracking-wide text-white sm:text-4xl">
                            TOKEN 
                        </span>
                    </div>
                </div>

                {/* Cards, layered above the bands */}
                <div className="absolute inset-0 z-10 flex items-center justify-center">
                    <div className="relative z-0 w-48  -rotate-6 scale-90 shadow-2xl sm:w-56 -mr-32 sm:-mr-34">
                        <ServiceCard3 isStacked={true} />
                    </div>

                    <div className="relative z-20 w-56 shadow-2xl sm:w-72">
                        <ServiceCard1 isStacked={true} />
                    </div>

                    <div className="relative z-0 w-48  rotate-6 scale-90 shadow-2xl sm:w-56 -ml-32 sm:-ml-34">
                        <ServiceCard2  isStacked={true}/>
                    </div>
                </div>
            </div>
        </section>
    );
}