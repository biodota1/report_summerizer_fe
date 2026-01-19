export default function Whoisitfor() {
  return (
    <section className="w-full flex flex-col gap-6 mx-24 my-24 px-24">
      <h2 className="text-3xl text-blue-600 font-semibold">Who it is for?</h2>
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl text-blue-600 font-semibold">Agents</h3>
        <p className="text-md text-slate-800">
          Quickly submit retention call documentation with a clean, simple form.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl text-blue-600 font-semibold">Team Leaders</h3>
        <p className="text-md text-slate-800">
          Monitor team activity, track retention rates, and view real-time
          performance stats.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl text-blue-600 font-semibold">Admins</h3>
        <p className="text-md text-slate-800">
          Manage users, assign roles, and control system access using role-based
          permissions.
        </p>
      </div>
    </section>
  );
}
