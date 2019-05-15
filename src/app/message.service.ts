import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  /*添加信息*/
  add(message: string) {
    this.messages.push(message);
  }

  /*清空信息*/
  clear() {
    this.messages = [];
  }
}
