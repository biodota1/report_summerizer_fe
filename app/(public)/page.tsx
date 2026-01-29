"use client";
import { useState } from "react";

import Contactus from "@/components/sections/contactus";
import Hero from "@/components/sections/hero";
import Overview from "@/components/sections/overview";
import Modal from "@/components/ui/modal";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Whoisitfor from "@/components/sections/whoisitfor";
import Howdoesitwork from "@/components/sections/howdoesitwork";
import Builtwith from "@/components/sections/builtwith";
import Demo from "@/components/sections/demo";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col  ">
      <Hero />
      <Overview />
      <Whoisitfor />
      <Howdoesitwork />
      <Demo />
      <Contactus handleIsOpen={setIsOpen} />
      <Builtwith />

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="flex justify-between">
          <h2 className="text-2xl py-4 px-16">Contact Us</h2>
          <Button
            className="bg-white text-blue-500 text-2xl hover:bg-white cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            x
          </Button>
        </div>

        <form
          action=""
          className="flex flex-col gap-4 h-[350px] w-[800px] py-4 px-16"
        >
          <Input placeholder="Name" className="h-12" />
          <Input placeholder="Email" className="h-12" />
          <Textarea
            placeholder="What might be your concern?"
            className="h-24"
          />
          <div className="flex justify-center">
            <Button
              onClick={() => setIsOpen(false)}
              className="rounded-4xl h-[50px] w-[150px] text-sm font-bold bg-blue-700 hover:bg-blue-700 cursor-pointer"
            >
              Submit
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
