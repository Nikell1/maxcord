import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface IHomeState {
  isServersBlock: boolean;

  channelClickHandler: (position: boolean) => void;
}

export const useHomeStore = create<IHomeState>()(
  devtools(
    persist(
      (set) => ({
        isServersBlock: false,

        channelClickHandler: (position: boolean) => {
          set({ isServersBlock: position });
        },
      }),
      {
        name: "home-storage",
        partialize: (state) => ({
          isServersBlock: state.isServersBlock,
        }),
      }
    )
  )
);
