import Image from "next/image";
export default function Builtwith() {
  return (
    <section className="flex flex-col gap-6 mx-24 my-24 px-24">
      <h2 className="text-lg text-slate-800 font-semibold">Built With:</h2>
      <div className="flex gap-10 h-[50px]">
        <Image
          src="/images/tailwindcss_image.png"
          alt="Logo"
          width={100}
          height={100}
        />
        <Image
          src="/images/expressjs_image.png"
          alt="Logo"
          width={100}
          height={100}
        />
        <Image
          src="/images/nextjs_image.png"
          alt="Logo"
          width={100}
          height={100}
        />
        <Image
          src="/images/nodejs_image.png"
          alt="Logo"
          width={100}
          height={100}
        />
        <Image
          src="/images/postgres_image.png"
          alt="Logo"
          width={100}
          height={100}
        />
      </div>
    </section>
  );
}
