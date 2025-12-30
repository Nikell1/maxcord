import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type { IServer } from "./models";

interface IServersState {
  servers: IServer[];
  currentServerId: number | null;
  currentChannelId: number | null;
  isLoading: boolean;
  error: string | null;
}

interface IServersActions {
  setServers: (servers: IServer[]) => void;
  setLoading: (loading: boolean) => void;
  setCurrentServer: (serverId: number) => void;
  setError: (error: string | null) => void;
  clearError: () => void;
  fetchServersFromFile: () => Promise<void>;
}

const serversStore = create<IServersState & IServersActions>()(
  devtools(
    persist(
      (set, get) => ({
        servers: [],
        currentServerId: null,
        currentChannelId: null,
        isLoading: false,
        error: null,

        setCurrentServer: (serverId) => {
          set({
            currentServerId: serverId,
            currentChannelId: null,
          });
        },

        setServers: (servers) => set({ servers }),

        setLoading: (loading) => set({ isLoading: loading }),

        setError: (error) => set({ error }),

        clearError: () => set({ error: null }),

        fetchServersFromFile: async () => {
          const { setLoading, setServers, setError } = get();
          try {
            setLoading(true);
            const response = await fetch("/data/servers.json");
            const data: IServer[] = await response.json();
            setServers(data);

            if (data.length > 0) {
              set({
                currentServerId: data[0].id,
                currentChannelId: data[0].channels[0]?.id || null,
              });
            }
          } catch (error) {
            setError(
              error instanceof Error ? error.message : "Failed to load servers"
            );
          } finally {
            setLoading(false);
          }
        },
      }),
      {
        name: "servers-storage",
        partialize: (state) => ({
          currentServerId: state.currentServerId,
          currentChannelId: state.currentChannelId,
        }),
      }
    )
  )
);

export const useServersStore = () => {
  const {
    servers,
    currentChannelId,
    currentServerId,
    isLoading,
    error,
    setCurrentServer,
    fetchServersFromFile,
  } = serversStore();

  const currentServer = servers.find((server) => server.id === currentServerId);

  const currentChannel = currentServer?.channels.find(
    (channel) => channel.id === currentChannelId
  );

  return {
    servers,
    currentChannelId,
    currentServerId,
    isLoading,
    error,
    currentServer,
    currentChannel,
    setCurrentServer,
    fetchServersFromFile,
  };
};
