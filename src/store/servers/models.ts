export interface IChannel {
  id: number;
  name: string;
  type: "TEXT" | "VOICE";
  serverId: number;
  createdAt: string;
  updatedAt: string;
}

export interface IServer {
  id: number;
  name: string;
  icon: string | null;
  ownerId: number;
  createdAt: string;
  updatedAt: string;
  channels: IChannel[];
}
