import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  log(logMessage: string) {
    console.log(new Date().toLocaleString() + "::" + logMessage);
  }
}