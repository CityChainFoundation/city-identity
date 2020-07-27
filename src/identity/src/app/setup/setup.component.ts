import { Component, HostBinding } from '@angular/core';
import { SetupService } from '../services/setup.service';
import { Router } from '@angular/router';
import { ApplicationState } from '../services/applicationstate.service';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation, fadeInUpOnEnterAnimation, bounceOutDownOnLeaveAnimation, flipInYOnEnterAnimation, flipOutYOnLeaveAnimation } from 'angular-animations';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css'],
  animations: [
    fadeInOnEnterAnimation({ anchor: 'enter' }),
    fadeOutOnLeaveAnimation({ anchor: 'leave', duration: 250 }),
    flipInYOnEnterAnimation(),
    flipOutYOnLeaveAnimation(),
    // fadeInUpOnEnterAnimation({ anchor: 'enter', duration: 1000, delay: 100, translate: '30px' }),
    // bounceOutDownOnLeaveAnimation({ anchor: 'leave', duration: 500, delay: 200, translate: '40px' })
  ]
})
export class SetupComponent {
  @HostBinding('class.content-centered') hostClass = true;

  recoveryPhrase = '';
  gateway = 'https://gateway.blockcore.net/';
  loading = false;
  selectedHubIdInternal = 'local';

  get selectedHubId() {
    return this.selectedHubIdInternal;
  }

  set selectedHubId(value: string) {
    this.selectedHubIdInternal = null;
    this.loading = true;

    // Simulate an actual load request.
    setTimeout(() => {
      this.loading = false;
      this.selectedHubIdInternal = value;
    }, 2000);
  }

  get hub() {
    return this.hubs.find(h => h.id === this.selectedHubId);
  }

  hubs = [
    {
      host: 'https://localhost:9912',
      id: 'local',
      updated: '2020-05-26 12:00',
      name: 'Local'
    }, {
      host: 'http://20.20.20.20',
      id: 'P0PsadkjfdsT13Aab',
      updated: '2020-05-26 12:00',
      name: 'Haxxors Paradise'
    }, {
      host: 'https://hub.blockcore.net',
      id: 'P1PsadkjfdsT13Aab',
      updated: '2020-05-27 06:00',
      name: 'Blockcore Hub'
    }, {
      host: 'https://hub2.blockcore.net',
      id: 'P2PsadkjfdsT13Aab',
      updated: '2020-05-28 14:00',
      name: 'Blockcore Hub (2)'
    }];

  constructor(public setup: SetupService, private router: Router, private appState: ApplicationState) {
    appState.title = 'Setup';


    // When we are not in multichain mode, redirect to chain-home.
    // if (!setup.multiChain) {
    //   router.navigate(['/' + setup.current.toLowerCase()]);
    // }
  }
}
