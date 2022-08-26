
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoggingService } from './logging.service';
import { Message } from './message';

@Injectable({ providedIn: 'root'})
export class MessagingService {
  private senderMessages: Message[] = [];
  private userMessages: Message[] = [];

  userMessagesChanged = new EventEmitter<Message[]>();
  senderMessagesChanged = new EventEmitter<Message[]>();

  getSenderMessages() {
    this.httpClient
      .get<Message[]>('http://localhost:8080/api/get-sender-messages')
      .subscribe((messages: Message[]) => {
        console.log(messages);
        this.senderMessages = messages;
        this.senderMessagesChanged.emit(this.senderMessages);
      });
    return this.senderMessages.slice();
  }

  getUserMessages() {
    this.httpClient
      .get<Message[]>('http://localhost:8080/api/get-user-messages')
      .subscribe((messages: Message[]) => {
        console.log(messages);
        this.userMessages = messages;
        this.userMessagesChanged.emit(this.userMessages);
      });
    return this.userMessages.slice();
  }

  addUserMessage(newMessageString: string, conversationID:number) {
    console.log(newMessageString);
    let newMessage: Message = new Message(
      this.userMessages[0].sender,
      newMessageString,
      conversationID,
      this.userMessages.length
    );
    console.log(newMessage);
    this.httpClient
      .post<Message[]>('http://localhost:8080/api/add-user-message', newMessage)
      .subscribe((messages: Message[]) => {
        console.log(messages);
        this.userMessages = messages;
        this.userMessagesChanged.emit(this.userMessages);
      });
    this.userMessages.push(newMessage);
    this.userMessagesChanged.emit(this.userMessages.slice());
  }

  deleteUserMessage(message:Message){
    this.userMessages.splice(this.userMessages.indexOf(message),1)

    this.httpClient
      .put<Message[]>('http://localhost:8080/api/delete-user-message', this.userMessages)
      .subscribe((messages: Message[]) => {
                console.log(messages);
        this.getUserMessages();
        this.userMessagesChanged.emit(this.userMessages);
      });
    this.userMessagesChanged.emit(this.userMessages.slice());
  }

  constructor(
    private loggingSvce: LoggingService,
    private httpClient: HttpClient
  ) {
    loggingSvce.log('Messaging Data Service constructor completed');
    
  }
}