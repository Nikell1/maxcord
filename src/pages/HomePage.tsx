import ChannelsSidebar from "@/components/ChannelsSidebar";
import ChatBlock from "@/components/ChatBlock";
import GroupsSidebar from "@/components/GroupsSidebar";
import UserInfoSidebar from "@/components/UserInfoSidebar";

export default function HomePage() {
  return (
    <div className="w-screen h-screen bg-background flex flex-row">
      <UserInfoSidebar />
      <ChannelsSidebar />
      <div className="mt-12 flex flex-row w-full border-t border-l rounded-tl-2xl">
        <GroupsSidebar />
        <ChatBlock />
      </div>
    </div>
  );
}
