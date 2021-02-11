import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MessagingService } from './service/messaging.service';
import { environment } from '../environments/environment';
import { AsyncPipe } from '../../node_modules/@angular/common';
import { AppComponent } from './app.component';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireModule } from '@angular/fire';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [MessagingService, AsyncPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
