"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";
import { apiFetch } from "@/lib/api";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { login } = useAuth();
  const [loaded, setLoaded] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await apiFetch("/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });

      login();
      if (res.user.role === "agent") {
        router.push("/agent");
      } else if (res.user.role === "supervisor") {
        router.push("/supervisor");
      } else if (res.user.role === "admin") {
        router.push("/admin");
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex flex-row items-center justify-center px-16 mx-16">
      <div className="relative w-[500px] min-h-screen">
        <Image
          src={"/images/login_image.png"}
          alt="login_image"
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
        className="relative w-[800px] min-h-screen flex flex-col gap-10 px-24 py-26"
        onSubmit={handleLogin}
      >
        <h2 className="text-4xl font-bold">Login</h2>
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
          <Button className="w-full cursor-pointer" type="submit">
            Login
          </Button>
          <p className="text-center">or</p>
          <Link href="/auth/register">
            <Button variant="outline" className="w-full cursor-pointer">
              Create an account
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
}
