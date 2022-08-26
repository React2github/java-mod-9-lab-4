import { User } from "./user";

export class Message {
  constructor(
    public sender: User,
    public text: string,
    public conversationId: number,
    public sequenceNumber: number
  ) {}
}