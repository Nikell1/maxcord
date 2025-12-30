import ChannelsSidebar from "./blocks/ChannelsSidebar";
import UserInfoSidebar from "./blocks/UserInfoSidebar";
import ChatBlock from "./blocks/ChatBlock";
import { Outlet, useLocation, useParams } from "react-router";
import { useEffect } from "react";
import { useServersStore } from "@/store/servers/servers";
import { ROUTES } from "@/constants/routes";

export default function HomePage() {
  const location = useLocation();
  const isMeRoute = location.pathname.includes(ROUTES.ME);
  const params = useParams();
  const {
    fetchServersFromFile,
    setCurrentServer,
    isLoading,
    error,
    currentServer,
    servers,
  } = useServersStore();

  useEffect(() => {
    if (params.serverId) {
      const serverId = Number(params.serverId);
      if (!isNaN(serverId)) {
        const serverExists = servers.some((server) => server.id === serverId);
        if (serverExists) {
          setCurrentServer(serverId);
        }
      }
    }
  }, [params.serverId, servers, setCurrentServer]);

  useEffect(() => {
    fetchServersFromFile();
  }, [fetchServersFromFile]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className="w-screen h-screen bg-background flex flex-col">
      <div className="w-screen h-10 py-2 px-4 flex justify-center">
        <p className="font-medium text-sm">
          {isMeRoute ? "Личные сообщения" : currentServer?.name}
        </p>
      </div>
      <div className="flex-1 flex min-h-0">
        <div className="flex flex-col w-120 min-h-0">
          <div className="flex-1 flex min-h-0 overflow-hidden">
            <ChannelsSidebar />
            <div className="h-full w-full border-l border-t rounded-tl-2xl flex flex-col min-h-0">
              <Outlet />
            </div>
          </div>
          <UserInfoSidebar />
        </div>
        <ChatBlock />
      </div>
    </div>
  );
}
