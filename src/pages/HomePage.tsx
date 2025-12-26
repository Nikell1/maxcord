import ChannelsSidebar from "@/components/homePage/left-sidebar/ChannelsSidebar";
import ChatBlock from "@/components/homePage/ChatBlock";
import GroupsSidebar from "@/components/homePage/left-sidebar/GroupsSidebar";
import ServerSidebar from "@/components/homePage/left-sidebar/ServerSidebar";
import TopSide from "@/components/homePage/TopSide";
import UserInfoSidebar from "@/components/homePage/left-sidebar/UserInfoSidebar";
import { useHomeStore } from "@/store/home";

export default function HomePage() {
  const { isServersBlock } = useHomeStore();

  return (
    <div className="w-screen h-screen bg-background flex flex-col">
      <TopSide />
      <div className="flex-1 flex min-h-0">
        <div className="flex flex-col w-120 min-h-0">
          <div className="flex-1 flex min-h-0 overflow-hidden">
            <ChannelsSidebar />
            <div className="h-full w-full border-l border-t rounded-tl-2xl flex flex-col min-h-0">
              {isServersBlock ? <ServerSidebar /> : <GroupsSidebar />}
            </div>
          </div>
          <UserInfoSidebar />
        </div>
        <ChatBlock />
      </div>
    </div>
  );
}
