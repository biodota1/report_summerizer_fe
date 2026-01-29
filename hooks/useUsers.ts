import { useQuery } from "@tanstack/react-query";

import type { User } from "@/stores/uiStore";
import { apiFetch } from "@/lib/api";

export const fetchUsers = async (): Promise<User[]> => {
  const data = await apiFetch("/users");
  return data;
};

export const useUsers = () =>
  useQuery<User[], Error>({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
