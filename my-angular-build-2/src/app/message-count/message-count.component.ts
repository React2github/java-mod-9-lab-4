import { Component, OnInit } from '@angular/core';
import { Message } from '../message';
import { MessagingService } from '../messaging.service';

@Component({
  selector: 'app-message-count',
  templateUrl: './message-count.component.html',
  styleUrls: ['./message-count.component.css']
})
export class MessageCountComponent implements OnInit {
  sentMessageCount = 0;

  constructor(private messagingSvce: MessagingService) {}

  ngOnInit(): void {
    this.messagingSvce.userMessagesChanged.subscribe((messages: Message[]) => {
      this.sentMessageCount = messages.length;
    });
  }
}