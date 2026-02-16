import { useAuth } from "@/app/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { apiFetch } from "@/lib/api";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";

export default function AgentNav() {
  const { user, logout } = useAuth();
  const queryClient = useQueryClient();

  const fetchCurrentUser = async () => {
    const user = await apiFetch("/user/me", {
      credentials: "include",
    });
    return user;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["user"],
    queryFn: fetchCurrentUser,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading user</div>;

  return (
    <nav className="h-[50px]m-2 p-2">
      <ul className="flex flex-row justify-between">
        <li>
          <Input placeholder="Search" />
        </li>

        <li className="flex items-center">
          <div className="w-[250px] flex items-center gap-2">
            <Image
              src="/images/default_profile_image.png"
              alt="profile-picture"
              width={50}
              height={50}
              className="rounded-full"
            />
            <p className="text-md font-semibold">{data?.user?.name}</p>
          </div>

          <Button className="bg-blue-500" onClick={logout}>
            <Image
              src={"/images/logout_icon.png"}
              alt="logout_icon"
              height={20}
              width={20}
            />
            <p>Logout</p>
          </Button>
        </li>
      </ul>
    </nav>
  );
}
