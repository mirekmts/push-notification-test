import { Component } from '@angular/core';
import { MessagingService } from './service/messaging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'push-notification';
  message$ = this.messagingService.currentMessage$;
  mes = 0;

  counter = 0;
  constructor(public messagingService: MessagingService) {}
  ngOnInit() {
    this.messagingService.requestPermission();
    this.messagingService.receiveMessage();
    // setInterval(() => {}, 1000);

    this.messagingService.mes$.subscribe((res: any) => {
      console.log(
        '🚀 ~ file: app.component.ts ~ line 13 ~ AppComponent ~ mes$=this.messagingService.mes$.subscribe ~ res',
        res
      );
      this.mes = res;
    });
  }
}
