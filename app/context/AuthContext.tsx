"use client";
import { apiFetch } from "@/lib/api";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { createContext, useContext, ReactNode } from "react";
import { useRouter } from "next/navigation";

interface User {
  id: string;
  email: string;
  name: string;
  role?: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const fetchCurrentUser = async (): Promise<User> => {
    const res = await fetch("/api/user/me", {
      credentials: "include",
    });

    if (!res.ok) throw new Error("Not authenticated");

    return res.json();
  };

  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: fetchCurrentUser,
    retry: false,
  });

  const login = async () => {
    // call login endpoint
    await fetch("/auth/login", {
      method: "POST",
      credentials: "include",
    });

    // refetch user after login
    await queryClient.invalidateQueries({ queryKey: ["user"] });

    if (user?.role === "admin") {
      router.push("/admin");
    } else if (user?.role === "teamleader") {
      router.push("/teamleader");
    } else if (user?.role === "agent") {
      router.push("/agent");
    } else {
      throw new Error("Invalid role");
    }
  };

  const logout = async () => {
    await fetch("/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });

    queryClient.setQueryData(["user"], null);
  };

  return (
    <AuthContext.Provider
      value={{ user: user ?? null, isLoading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth");
  }

  return context;
};
