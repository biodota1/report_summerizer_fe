"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

import { useState } from "react";

export default function AccountAccordion() {
  const [name, setName] = useState("Jamesmyer Geonzon");
  const [email, setEmail] = useState("jamesmyertaneo@gmail.com");
  const [phonenumber, setPhonenumber] = useState("09665210258");
  const [dateofbirth, setDateofbirth] = useState("05/12/1997");

  const [isNameEdit, setIsNameEdit] = useState(false);
  const [isEmailEdit, setIsEmailEdit] = useState(false);
  const [isPhonenumberEdit, setIsPhonenumberEdit] = useState(false);
  const [isDateofbirthEdit, setIsDateofbirthEdit] = useState(false);

  const [isCurrentPasswordVisible, setIsCurrentPasswordVisible] =
    useState(false);
  const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Profile</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance px-4">
          <ul className="flex flex-col gap-2">
            <li className="flex gap-4 items-center h-10">
              <h3>Name</h3>
              {isNameEdit ? (
                <Input className="w-50" type="email" placeholder={name} />
              ) : (
                <p className="text-gray-500">{name}</p>
              )}

              <Button
                size="sm"
                variant={"secondary"}
                className="cursor-pointer"
                onClick={() => setIsNameEdit(!isNameEdit)}
              >
                {isNameEdit ? "save" : "edit"}
              </Button>
            </li>
            <li className="flex gap-4 items-center h-10">
              <h3>Email</h3>
              {isEmailEdit ? (
                <Input className="w-50" type="email" placeholder={email} />
              ) : (
                <p className="text-gray-500">{email}</p>
              )}

              <Button
                size="sm"
                variant={"secondary"}
                className="cursor-pointer"
                onClick={() => setIsEmailEdit(!isEmailEdit)}
              >
                {isEmailEdit ? "save" : "edit"}
              </Button>
            </li>
            <li className="flex gap-4 items-center h-10">
              <h3>Phone Number</h3>
              {isPhonenumberEdit ? (
                <Input
                  className="w-50"
                  type="email"
                  placeholder={phonenumber}
                />
              ) : (
                <p className="text-gray-500">{phonenumber}</p>
              )}

              <Button
                size="sm"
                variant={"secondary"}
                className="cursor-pointer"
                onClick={() => setIsPhonenumberEdit(!isPhonenumberEdit)}
              >
                {isPhonenumberEdit ? "save" : "edit"}
              </Button>
            </li>
            <li className="flex gap-4 items-center h-10">
              <h3>Date of Birth</h3>
              {isDateofbirthEdit ? (
                <Input
                  className="w-50"
                  type="email"
                  placeholder={dateofbirth}
                />
              ) : (
                <p className="text-gray-500">{dateofbirth}</p>
              )}

              <Button
                size="sm"
                variant={"secondary"}
                className="cursor-pointer"
                onClick={() => setIsDateofbirthEdit(!isDateofbirthEdit)}
              >
                {isDateofbirthEdit ? "save" : "edit"}
              </Button>
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Security</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <ul>
            <li>
              <Card>
                <CardHeader>
                  <CardTitle>Change Password</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                  <div className="w-100">
                    <Label>Current Password</Label>
                    <div className="flex gap-2">
                      <Input
                        type={isCurrentPasswordVisible ? "text" : "password"}
                      />
                      <Button
                        className="cursor-pointer w-15"
                        variant={"secondary"}
                        onClick={() =>
                          setIsCurrentPasswordVisible(!isCurrentPasswordVisible)
                        }
                      >
                        {isCurrentPasswordVisible ? "hide" : "show"}
                      </Button>
                    </div>
                  </div>
                  <div className="w-100">
                    <Label>New Password</Label>
                    <div className="flex gap-2">
                      <Input
                        type={isNewPasswordVisible ? "text" : "password"}
                      />
                      <Button
                        className="cursor-pointer w-15"
                        variant={"secondary"}
                        onClick={() =>
                          setIsNewPasswordVisible(!isNewPasswordVisible)
                        }
                      >
                        {isNewPasswordVisible ? "hide" : "show"}
                      </Button>
                    </div>
                  </div>

                  <Button className="w-100 cursor-pointer">
                    Change Password
                  </Button>
                </CardContent>
              </Card>
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
