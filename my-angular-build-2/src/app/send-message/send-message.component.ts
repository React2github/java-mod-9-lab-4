import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoggingService } from '../logging.service';
import { Message } from '../message';
import { MessagingService } from '../messaging.service';
import { User } from '../user';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {

  messageString: string;
  conversationID:number;

  constructor(private loggingSvce: LoggingService, private messagingService:MessagingService ,
    private route: ActivatedRoute) {
      this.route.paramMap.subscribe((paramMap) => {
        console.log(paramMap.keys)
        this.conversationID = parseFloat(paramMap.get('id'));
      });
      console.log(this.conversationID);
    } // declare the loggingSvce variable through the component's constructor

  ngOnInit(): void {}

  onSendMessage() {
    this.loggingSvce.log("Send following message: ");
    this.loggingSvce.log(this.messageString);
    
    this.messagingService.addUserMessage(this.messageString, this.conversationID);
  }
}