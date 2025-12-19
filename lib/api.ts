export const apiFetch = async (endpoint: string, options?: RequestInit) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
    ...options,
    headers: { "Content-Type": "application/json", ...options?.headers },
  });
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.msg || "Something went wrong");
  }
  return res.json();
};
