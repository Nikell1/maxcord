import ChannelsSidebar from "./blocks/sidebar/ChannelsSidebar";
import UserInfoSidebar from "./blocks/sidebar/UserInfoSidebar";
import ChatBlock from "./blocks/chat/ChatBlock";
import { Outlet, useLocation, useParams } from "react-router";
import { useEffect } from "react";
import { useServersStore } from "@/store/servers/servers";
import { ROUTES } from "@/constants/routes";
import LogoIcon from "@/components/LogoIcon";

export default function HomePage() {
  const location = useLocation();
  const isDirect = location.pathname.includes(ROUTES.DIRECT);
  const params = useParams();
  const {
    fetchServersFromFile,
    setCurrentServer,
    setCurrentChannel,
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
    if (params.branchId) {
      const branchId = Number(params.branchId);

      if (!isNaN(branchId)) {
        const branchExists = currentServer?.channels.some(
          (channel) => channel.id === branchId
        );
        if (branchExists) {
          setCurrentChannel(branchId);
        }
      }
    }
  }, [params.branchId, setCurrentChannel, currentServer?.channels]);

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
        <p className="font-medium text-sm flex my-auto">
          <span className="mr-2 flex">
            {isDirect ? <LogoIcon className="my-auto" /> : currentServer?.icon}
          </span>
          {isDirect ? "Личные сообщения" : currentServer?.name}
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
