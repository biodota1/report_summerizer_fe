export default function Overview() {
  return (
    <section className="flex flex-col gap-10 mx-16 my-24 px-16 items-center">
      <h2 className="text-3xl font-bold text-blue-600">Why choose CallRep?</h2>
      <div className="flex gap-10">
        <div className="flex flex-col gap-5 h-[300px] w-[300px] p-10  bg-blue-500 rounded-3xl text-white shadow-md shadow-slate-500">
          <h2 className="text-2xl font-semibold">Easy Call Reporting</h2>
          <h3>
            Agents can submit call reports quickly using a structured, validated
            form—no spreadsheets, no confusion.
          </h3>
        </div>
        <div className="flex flex-col gap-5 h-[300px] w-[300px] p-10  bg-blue-500 rounded-3xl text-white shadow-md shadow-slate-500">
          <h2 className="text-2xl font-semibold">
            Automated Data Aggregation & Reporting
          </h2>
          <h3>
            Automatically generated stats give team leaders instant visibility
            into agent and team performance.
          </h3>
        </div>
        <div className="flex flex-col gap-5 h-[300px] w-[300px] p-10  bg-blue-500 rounded-3xl text-white shadow-md shadow-slate-500">
          <h2 className="text-2xl font-semibold">Team Management</h2>
          <h3>
            Organize agents under team leaders and track performance at both
            individual and team levels.
          </h3>
        </div>
        <div className="flex flex-col gap-5 h-[300px] w-[300px] p-10  bg-blue-500 rounded-3xl text-white shadow-md shadow-slate-500">
          <h2 className="text-2xl font-semibold">
            JWT-based Authentication & RBAC
          </h2>
          <h3>
            Users only see what they’re allowed to—agents, team leaders, and
            admins each have tailored access.
          </h3>
        </div>
      </div>
    </section>
  );
}
