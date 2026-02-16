import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex flex-row h-[40px] gap-2">
      <div className="relative h-[40px] w-[40px]">
        <Image src={"/images/sample_logo_2.png"} alt="logo" fill />
      </div>

      <h1 className="text-3xl font-bold text-center text-blue-500">CallRep</h1>
    </div>
  );
}
