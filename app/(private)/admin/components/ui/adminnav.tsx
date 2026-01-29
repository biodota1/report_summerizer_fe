import { useAuth } from "@/app/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { apiFetch } from "@/lib/api";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export default function AdminNav() {
  const queryClient = useQueryClient();

  const fetchCurrentUser = async () => {
    const user = await apiFetch("/user/me");
    return user;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["user"],
    queryFn: fetchCurrentUser,
  });

  return (
    <nav className="m-2 p-2">
      <ul className="flex flex-row justify-between">
        <li>
          <Input placeholder="Seartch" />
        </li>
        <li>{data?.name}</li>
        <li>
          <Button>Logout</Button>
        </li>
      </ul>
    </nav>
  );
}
