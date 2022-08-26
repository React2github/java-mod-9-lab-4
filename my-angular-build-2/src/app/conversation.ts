import { User } from "./user";

export class Conversation {
    constructor(public id: number, public users: User[]) {}
  }