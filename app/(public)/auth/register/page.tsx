"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";
import { apiFetch } from "@/lib/api";

export default function Register() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loaded, setLoaded] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      const data = await apiFetch("/auth/register", {
        method: "POST",
        body: JSON.stringify({
          name: `${firstname} ${lastname}`,
          email,
          password,
        }),
      });

      setSuccess(`Registered successfully! Welcome, ${data.name}`);
      // Optionally redirect to login page
      setTimeout(() => router.push("/auth/login"), 1500);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex flex-row min-h-screen items-center justify-center px-16 mx-16">
      <div className="relative min-h-screen w-[500px]">
        <Image
          src={"/images/register_image.png"}
          alt="register_image"
          fill
          priority
          objectFit="cover"
          onLoad={() => setLoaded(true)}
          className={`object-cover transition-all duration-1000 ease-out
          ${loaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}
        `}
        />
      </div>
      <form
        className="relative min-h-screen w-[800px] flex flex-col gap-10 px-24 py-26"
        onSubmit={handleRegister}
      >
        <h2 className="text-4xl font-bold">Register</h2>
        <div>
          <Label htmlFor="firstname">First Name</Label>
          <Input
            type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="lastname">Last Name</Label>
          <Input
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Button onClick={handleRegister}>Submit</Button>
          <p className="text-center">or</p>
          <Link href="/login">
            <Button type="submit" variant="outline" className="w-full">
              I already have an account
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
}
