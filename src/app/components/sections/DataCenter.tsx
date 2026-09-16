"use client";

import Image from "next/image";
import infra from "@/app/logo/infra.png"

const PARTNERS = ["Vast.ai", "MSI", "Cybertek", "NTC", "Mt Pelerin"];

export default function DataCenter({
    keyMetricValue = "X",
}: {
    keyMetricValue?: string;
}) {
    return (
        <section className="relative w-full bg-black  py-16 px-6 text-white sm:py-1 ">
            <div className="mx-auto  ">

                <div className="absolute top-0 left-0 z-10 max-w-65 rounded-3xl border-4 border-black/95 bg-black/95 px-6 py-1 sm:px-8 sm:py-6">
                    <h3 className="text-base font-semibold sm:text-lg">Live Infrastructure</h3>
                    <p className="mt-1 text-xs leading-relaxed text-white/60 sm:text-sm">
                        Billingstad and Bodø Harbor, Norway
                    </p>
                </div>


                {/* Duotone photo card */}
                <div className="relative mt-4 min-h-55 overflow-hidden rounded-3xl sm:min-h-70">
                    <Image
                        src={infra}
                        alt="Billingstad and Bodø Harbor facility"
                        fill
                        className="object-cover grayscale"
                    />
                    {/* duotone tint, blended over the grayscale photo */}
                    <div className="absolute inset-0 mix-blend-multiply bg-linear-to-br from-[#6d4aff]/85 via-[#5b3fd9]/70 to-[#3b82f6]/80" />

                    {/* Dark inset panel, matches the outer card's corner radius */}
                    <div className="absolute bottom-0 right-0 max-w-65 rounded-tl-3xl rounded-br-3xl bg-black/95 px-6 py-5 sm:px-8 sm:py-6">
                        <h3 className="text-base font-semibold sm:text-lg">Expansion</h3>
                        <p className="mt-1 text-xs leading-relaxed text-white/60 sm:text-sm">
                            Bodø data center &amp; Alicante, Q4 2027 · UAE pre-development
                            2028
                        </p>
                    </div>
                </div>

                {/* Partners + Key Metric */}
                <div className="mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <div>
                        <h4 className="text-base font-semibold sm:text-lg">Partners</h4>
                        <p className="mt-2 flex flex-wrap items-center gap-2 text-sm text-white/50">
                            {PARTNERS.map((partner, i) => (
                                <span key={partner} className="flex items-center gap-2">
                                    {partner}
                                    {i < PARTNERS.length - 1 && (
                                        <span className="text-white/30">·</span>
                                    )}
                                </span>
                            ))}
                        </p>
                    </div>

                    <div>
                        <h4 className="text-base font-semibold sm:text-lg">Key Metric</h4>
                        <p className="mt-2 text-sm text-white/50">{keyMetricValue}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}