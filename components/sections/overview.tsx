export default function Overview() {
  return (
    <section className="relative flex flex-col items-center">
      <div className="min-h-screen px-16 mx-16 py-24">
        <img
          className="w-full"
          src="/images/overview_section_admin_sample.png"
          alt="admin_sample"
        />
      </div>
      <div className="relative w-full">
        <div className="relative h-[700px] w-full">
          <img
            className="h-full w-full object-cover"
            src="/images/overview_section_image.png"
            alt="admin_sample"
          />
          <div className="relative top-[-500px] left-[200px] flex flex-col gap-2">
            <h2 className="text-5xl font-bold text-blue-500">
              Services that help you <br /> reach your business goals
            </h2>
            <h3 className="text-2xl font-semibold text-slate-500">
              See how Callrep technology makes an impact.
            </h3>
          </div>
        </div>

        <div className="relative top-[-150px] flex gap-10 justify-center">
          <div className="flex flex-col gap-5 h-[300px] w-[300px] p-10 bg-blue-500 rounded-3xl text-white shadow-md shadow-slate-500 transition-transform duration-300 hover:-translate-y-[50px]">
            <h2 className="text-2xl font-semibold">Easy Call Reporting</h2>
            <h3>
              Agents can submit call reports quickly using a structured,
              validated form—no spreadsheets, no confusion.
            </h3>
          </div>
          <div className="flex flex-col gap-5 h-[300px] w-[300px] p-10  bg-blue-500 rounded-3xl text-white shadow-md shadow-slate-500 transition-transform duration-300 hover:-translate-y-[50px]">
            <h2 className="text-2xl font-semibold">
              Automated Data Aggregation & Reporting
            </h2>
            <h3>
              Automatically generated stats give team leaders instant visibility
              into agent and team performance.
            </h3>
          </div>
          <div className="flex flex-col gap-5 h-[300px] w-[300px] p-10  bg-blue-500 rounded-3xl text-white shadow-md shadow-slate-500 transition-transform duration-300 hover:-translate-y-[50px]">
            <h2 className="text-2xl font-semibold">Team Management</h2>
            <h3>
              Organize agents under team leaders and track performance at both
              individual and team levels.
            </h3>
          </div>
          <div className="flex flex-col gap-5 h-[300px] w-[300px] p-10  bg-blue-500 rounded-3xl text-white shadow-md shadow-slate-500 transition-transform duration-300 hover:-translate-y-[50px]">
            <h2 className="text-2xl font-semibold">
              JWT-based Authentication & RBAC
            </h2>
            <h3>
              Users only see what they’re allowed to—agents, team leaders, and
              admins each have tailored access.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
