import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable()
export class MessagingService {
  currentMessage$ = new BehaviorSubject(null);
  mes$ = new Subject();
  constructor(private angularFireMessaging: AngularFireMessaging) {
    this.angularFireMessaging.messaging.subscribe((_messaging) => {
      _messaging.onMessage = _messaging.onMessage.bind(_messaging);
    });
  }

  requestPermission() {
    this.angularFireMessaging.requestToken.subscribe(
      (token) => {
        console.log(token);
      },
      (err) => {
        console.error('Unable to get permission to notify.', err);
      }
    );
  }

  receiveMessage() {
    this.angularFireMessaging.messages.subscribe((payload) => {
      console.log(
        '🚀 ~ file: messaging.service.ts ~ line 27 ~ MessagingService ~ this.angularFireMessaging.messages.subscribe ~ payload',
        payload
      );
      this.mes$.next(1);
      this.currentMessage$.next(payload);
    });
  }
}
