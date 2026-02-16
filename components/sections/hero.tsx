"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  return (
    <section className="relative h-[700px] ">
      {/* <div className="absolute inset-0 bg-[url('/images/hero_section_bg.png')] bg-cover bg-center" /> */}
      <Image
        src="/images/hero_section_bg.png"
        alt="Hero background"
        fill
        priority
        sizes="100vw"
        onLoad={() => setLoaded(true)}
        className={`object-cover transition-all duration-1000 ease-out
          ${loaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}
        `}
      />
      <div className="absolute inset-0 bg-white/10" />
      <div className="relative z-10 h-full flex flex-col gap-5 mx-16 px-16 justify-center items-center">
        <h1 className="text-6xl font-bold text-blue-400">
          Smarter Call Center Reporting,
          <br /> Built for Your Business
        </h1>
        <h2 className="text-xl text-slate-100">
          Track agent performance, monitor call activity, and generate real-time
          reports — <br /> all in one secure platform.
        </h2>
        <Link href={"/auth/login"}>
          <Button
            variant={"default"}
            className="bg-blue-500 cursor-pointer hover:bg-blue-500"
          >
            Get Started
          </Button>
        </Link>
      </div>
    </section>
  );
}
