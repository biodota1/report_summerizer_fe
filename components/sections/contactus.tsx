import { Button } from "@/components/ui/button";

interface ContactUsProps {
  handleIsOpen: (value: boolean) => void;
}

export default function Contactus({ handleIsOpen }: ContactUsProps) {
  return (
    <section className="flex bg-blue-500 my-26">
      <div className="flex items-center h-[180px] gap-26 mx-16 px-24 ">
        <h2 className="text-3xl text-white">
          Have questions or want to see how the system works for your team?{" "}
          <br />
          We’d be happy to help.
        </h2>
        <Button
          className="h-[50px] w-[150] text-md font-bold bg-white text-blue-500 shadow-md shadow-slate-600 rounded-4xl cursor-pointer hover:bg-white"
          onClick={() => handleIsOpen(true)}
        >
          Contact Us
        </Button>
      </div>
    </section>
  );
}
