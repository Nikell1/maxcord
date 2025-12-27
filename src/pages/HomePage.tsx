import ChannelsSidebar from "@/components/homePage/left-sidebar/ChannelsSidebar";
import ChatBlock from "@/components/homePage/ChatBlock";
import TopSide from "@/components/homePage/TopSide";
import UserInfoSidebar from "@/components/homePage/left-sidebar/UserInfoSidebar";
import { Outlet } from "react-router";

export default function HomePage() {
  return (
    <div className="w-screen h-screen bg-background flex flex-col">
      <TopSide />
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
