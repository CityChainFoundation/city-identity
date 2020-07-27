import { Component, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ApplicationState } from '../services/applicationstate.service';
import { HubService } from '../services/hub.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {

  message: string;
  messages = [];

  broadcastToHubs() {
    const msg = { self: true, date: new Date(), from: 'me', content: this.message};

    console.log('Msg:', msg);

    this.hub.broadcastToHubs(msg);
    this.messages.push(msg);

    this.message = '';
  }

  broadcastToHubsRelayed() {
    const msg = { self: true, date: new Date(), from: 'me', content: this.message};

    console.log('Msg:', msg);

    this.hub.broadcastToHubsRelayed(msg);
    this.messages.push(msg);

    this.message = '';
  }

  broadcastToGateways() {
    const msg = { self: true, date: new Date(), from: 'me', content: this.message};

    console.log('Msg:', msg);

    this.hub.broadcastToGateways(msg);
    this.messages.push(msg);

    this.message = '';
  }

  constructor(private breakpointObserver: BreakpointObserver, private appState: ApplicationState, private hub: HubService) {
    appState.title = 'Messages';
  }
}
