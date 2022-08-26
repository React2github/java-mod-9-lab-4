import { Component, OnInit } from '@angular/core';
import { Message } from '../message';
import { MessagingService } from '../messaging.service';

@Component({
  selector: 'app-conversation-thread',
  templateUrl: './conversation-thread.component.html',
  styleUrls: ['./conversation-thread.component.css']
})
export class ConversationThreadComponent implements OnInit {
  senderMessages: Message[];
  userMessages: Message[];
  newMessage:Message;
  
  constructor(private messagingSvce: MessagingService) {}


  ngOnInit(): void {
    this.senderMessages = this.messagingSvce.getSenderMessages();
    this.messagingSvce.senderMessagesChanged.subscribe((messages: Message[]) => {
      this.senderMessages = messages;
    });
    this.userMessages = this.messagingSvce.getUserMessages();
    this.messagingSvce.userMessagesChanged.subscribe((messages: Message[]) => {
      this.userMessages = messages;
    });

  }
}