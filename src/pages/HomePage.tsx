import ChannelsSidebar from "@/components/homePage/ChannelsSidebar";
import ChatBlock from "@/components/homePage/ChatBlock";
import GroupsSidebar from "@/components/homePage/GroupsSidebar";
import TopSide from "@/components/homePage/TopSide";
import UserInfoSidebar from "@/components/homePage/UserInfoSidebar";

export default function HomePage() {
  return (
    <div className="w-screen h-screen bg-background flex flex-col">
      <TopSide />
      <div className="flex-1 flex min-h-0">
        <div className="flex flex-col w-120 min-h-0">
          <div className="flex-1 flex min-h-0 overflow-hidden">
            <ChannelsSidebar />
            <GroupsSidebar />
          </div>
          <UserInfoSidebar />
        </div>
        <ChatBlock />
      </div>
    </div>
  );
}
