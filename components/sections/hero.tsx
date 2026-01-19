import { Button } from "@/components/ui/button";
import Link from "next/link";
Button;
export default function Hero() {
  return (
    <section className="flex flex-col gap-5 h-[700px] px-16 mx-16 justify-center items-center">
      <h1 className="text-6xl font-bold">
        Smarter Call Center Reporting,
        <br /> Built for Your Business
      </h1>
      <h2 className="text-xl text-slate-500">
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
    </section>
  );
}
