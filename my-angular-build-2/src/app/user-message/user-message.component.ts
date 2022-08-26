import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../message';
import { MessagingService } from '../messaging.service';

@Component({
  selector: 'app-user-message',
  templateUrl: './user-message.component.html',
  styleUrls: ['./user-message.component.css']
})
export class UserMessageComponent implements OnInit {
  @Input() message: Message = {
    sender: { firstName: "Ludovic" },
    text: "Message from Ludovic",
    conversationId: 1,
    sequenceNumber: 0,
  };
  constructor(private messagingService: MessagingService) { }

  deleteMessage(message:Message){
    this.messagingService.deleteUserMessage(message)
  }

  ngOnInit(): void {
  }

}
