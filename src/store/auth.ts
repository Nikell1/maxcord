import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface IAuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  token: string | null;
}

interface IAuthActions {
  login: () => void;
  signup: () => void;
}

export const useAuthStore = create<IAuthState & IAuthActions>()(
  devtools(
    persist(
      (set) => ({
        isAuthenticated: false,
        isLoading: false,
        token: null,

        login: () => {
          set({ isAuthenticated: true });
        },

        signup: () => {
          set({ isAuthenticated: true });
        },
      }),
      {
        name: "auth-storage",
        partialize: (state) => ({
          token: state.token,
          isAuthenticated: state.isAuthenticated,
        }),
      }
    )
  )
);
