import Link from "next/link";

export default function Homenav() {
  return (
    <nav className="flex justify-center h-[50px] ">
      <div className="flex w-[864px] items-center justify-between mx-16 px-16">
        <Link className="text-xl font-semibold" href={"/"}>
          CallRep
        </Link>
        <div className="flex gap-10 text-lg text-blue-600 font-semibold">
          <Link href={"/auth/login"}>Sign in</Link>
          <Link href={"/auth/register"}>Sign up</Link>
        </div>
      </div>
    </nav>
  );
}
