import TextChat from "./blocks/TextChat";
import { useServersStore } from "@/store/servers/servers";
import VoiceChat from "./blocks/VoiceChat";

export default function ChatBlock() {
  const { currentChannel } = useServersStore();
  const isVoice = currentChannel?.type === "VOICE" ? true : false;

  if (!isVoice) {
    return <TextChat />;
  } else {
    return <VoiceChat />;
  }
}
