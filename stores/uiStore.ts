import { create } from "zustand";

interface UIState {
  sidebarOpen: boolean;
  selectedUser: User | null;
  toggleSidebar: () => void;
  setSelectedUser: (user: User | null) => void;
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export const useUIStore = create<UIState>((set) => ({
  sidebarOpen: true,
  selectedUser: null,
  toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
  setSelectedUser: (user) => set({ selectedUser: user }),
}));
