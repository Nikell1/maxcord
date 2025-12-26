import ChannelsSidebar from "@/components/ChannelsSidebar";
import ChatBlock from "@/components/ChatBlock";
import GroupsSidebar from "@/components/GroupsSidebar";
import TopSide from "@/components/TopSide";
import UserInfoSidebar from "@/components/UserInfoSidebar";

export default function HomePage() {
  return (
    <div className="w-screen h-screen bg-background flex flex-col">
      <TopSide />
      <div className="w-screen h-full flex flex-row">
        <div className="h-full flex flex-col w-120">
          <div className="flex flex-row h-full">
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
