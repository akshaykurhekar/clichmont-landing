"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/app/components/logo/Logo-03.svg";
import FilledButton from "../ui/FilledButton";
import DefaultButton from "../ui/DefaultButton";
import PixelBackground from "../ui/PixelBackground";
import { Menu } from 'lucide-react';


const NAV_LINKS = [
  { label: "Compute", href: "#compute" },
  { label: "$CLAI", href: "#clai" },
  { label: "Tokenomics", href: "#tokenomics" },
  { label: "Docs", href: "#docs" },
  { label: "GPU compute", href: "#gpu-compute" },
];

const PARTNERS = ["Infrastructure", "Live in Norway"];

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden isolate bg-black text-white min-h-screen">
      {/* Animated pixel-dot background, sits behind everything below */}
      <PixelBackground />

      {/* Nav */}
      <header className="relative z-10 mx-auto flex justify-center items-center px-6 mt-6 md:mt-12">

        <div className="flex items-center justify-between gap-8  w-full md:w-fit">
          <div className="bg-white/30 size-1o md:size-13 flex flex-col justify-center items-center rounded-full p-1.5">
            <Image src={logo} alt="Clichmont" className="h-8 w-8 shrink-0" />
          </div>

          <nav className="hidden items-center gap-6 rounded-full border border-white/10 bg-white/10 px-6 py-4 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>


          {/* Join waitlist button only for desktop */}
          <div className="hidden md:flex">
            <FilledButton className=" w-35 h-12 px-4">Join Waitlist</FilledButton>

          </div>

          {/* menu icon only for mobile */}
          <div className="flex md:hidden">
            <div className="bg-white/30 size-10 flex flex-col justify-center items-center rounded-full p-1.5">

              <Menu />
            </div>


          </div>

        </div>
      </header>

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex flex-col items-center px-6 pb-24 pt-16 text-center sm:pt-24">
        <span className="text-dark-pink text-[16px] md:text-[24px]"> Clichmont</span>
       
       
        <h1 className="text-[26px] tracking-wide  font-semibold leading-tight sm:text-4xl whitespace-nowrap md:text-[45px]">
          GPU infrastructure for AI.
          <br />
          <span className=" whitespace-normal md:whitespace-nowrap">

          Higher access through $CLAI.
          </span>
        </h1>

        <p className="mt-2 md:max-w-xl  text-[14px] tracking-wide md:tracking-wider leading-6 text-[#808791] sm:text-base">
          Clichmont operates AI compute infrastructure. Customers buy GPU time
          in USD or stablecoins. $CLAI adds a higher level of access and
          participation around that infrastructure.
        </p>

        <div className="mt-8 flex  items-center justify-center gap-2 md:gap-4">
          <FilledButton className="w-25 md:w-fit">Join Waitlist</FilledButton>
          <DefaultButton className="w-35!  md:w-fit ">Explore Commute</DefaultButton>
          <Link
            href="#clai"
            className="text-sm font-medium whitespace-nowrap text-white/80 transition-colors hover:text-white"
          >
            Explore $CLAI
          </Link>
        </div>

        <p className="mt-6 max-w-md text-xs text-white/40">
          Official $CLAI site updates. You are not buying tokens and you are
          not sending funds.
        </p>
      </div>

      {/* Partner logos */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-3 px-6 pb-16 text-xs uppercase tracking-wide text-white/40">
        {PARTNERS.map((partner, i) => (
          <span key={partner} className="flex items-center gap-3">
            {partner}
            {i < PARTNERS.length - 1 && (
              <span className="h-1.5 w-1.5 rounded-full bg-[#3aa0ff]" />
            )}
          </span>
        ))}
      </div>
    </section>
  );
}