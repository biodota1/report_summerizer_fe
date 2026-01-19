"use client";

import { useState } from "react";
import Link from "next/link";

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
  const { setUser } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Send POST request to Express backend
      const res = await apiFetch("/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });

      setUser(res.user);
      // Save JWT token in localStorage
      localStorage.setItem("token", res.accessToken);
      localStorage.setItem("user", JSON.stringify(res.user));
      // Redirect to dashboard
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
    <div className="flex min-h-screen items-center justify-center">
      <form
        className="w-130 h-[600] flex flex-col gap-10"
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
