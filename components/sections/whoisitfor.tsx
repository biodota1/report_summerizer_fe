import Image from "next/image";

export default function Whoisitfor() {
  return (
    <section className="relative flex flex-col gap-20 mx-24 my-24 px-24">
      <h2 className="text-4xl text-blue-600 font-bold">Who it is for?</h2>
      <div className="flex h-[500px]">
        <div className="w-1/2 flex flex-col gap-4 pt-10 pr-30">
          <h3 className="text-3xl text-blue-600 font-bold">Agents</h3>
          <p className="text-xl font-semibold text-slate-800">
            Agents use this app to quickly submit retention reports without
            dealing with complicated spreadsheets, manual tracking, or scattered
            documentation. The platform streamlines the submission process so
            agents can focus more on customer engagement and less on paperwork.
          </p>
        </div>
        <div className="relative w-1/2 m-10">
          <Image
            src={"/images/for_agent.png"}
            alt="for_agent_image"
            fill
            objectFit="cover"
          ></Image>
        </div>
      </div>
      <div className="flex h-[500px]">
        <div className="relative w-1/2 m-10">
          <Image
            src={"/images/for_teamleader.png"}
            alt="for_teamleader"
            fill
            objectFit="cover"
          ></Image>
        </div>
        <div className="w-1/2 flex flex-col gap-4 pt-10 pl-10">
          <h3 className="text-3xl text-blue-600 font-bold">Team Leaders</h3>
          <p className="text-xl font-semibold text-slate-800">
            This platform helps Team Leaders monitor agent submissions in real
            time, ensuring reports are accurate, complete, and submitted on
            schedule. Instead of chasing updates through chats or spreadsheets,
            everything is centralized in one dashboard.
          </p>
        </div>
      </div>
      <div className="flex h-[500px]">
        <div className="w-1/2 flex flex-col gap-4 pt-10 pr-30">
          <h3 className="text-3xl text-blue-600 font-bold">Admins</h3>
          <p className="text-xl font-semibold text-slate-800">
            Admins use this platform to manage the overall retention reporting
            process with full oversight. From user access control to data
            validation and report consolidation, everything is centralized for
            easier management and governance.
          </p>
        </div>
        <div className="relative w-1/2 m-10">
          <Image
            src={"/images/for_admin.png"}
            alt="for_teamleader"
            fill
            objectFit="cover"
          ></Image>
        </div>
      </div>
    </section>
  );
}
