import { ApiService } from './services/api.service';
import { SetupService } from './services/setup.service';
import { Router, ActivatedRoute, NavigationEnd, ResolveEnd, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { ApplicationState } from './services/applicationstate.service';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation, flipInYOnEnterAnimation, flipOutYOnLeaveAnimation, fadeInUpAnimation, fadeOutDownAnimation, fadeInUpOnEnterAnimation, fadeOutDownOnLeaveAnimation, zoomOutOnLeaveAnimation, fadeOutLeftOnLeaveAnimation, fadeOutLeftBigOnLeaveAnimation, bounceOutLeftOnLeaveAnimation, fadeInDownOnEnterAnimation, fadeOutUpOnLeaveAnimation } from 'angular-animations';

import { Component, HostBinding, OnInit } from '@angular/core';
import { CordovaService } from '../shared/cordova.service';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ThemeService } from '../shared/theme.service';
import { Observable } from 'rxjs';
import { IdentityService } from '../shared/identity.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    fadeInOnEnterAnimation({ anchor: 'enter' }),
    fadeOutOnLeaveAnimation({ anchor: 'leave', duration: 250 }),
    flipInYOnEnterAnimation(),
    flipOutYOnLeaveAnimation(),
    fadeInUpOnEnterAnimation(),
    fadeOutDownOnLeaveAnimation(),
    zoomOutOnLeaveAnimation(),
    fadeOutLeftBigOnLeaveAnimation(),
    bounceOutLeftOnLeaveAnimation(),
    fadeInDownOnEnterAnimation(),
    fadeOutUpOnLeaveAnimation()
    // fadeInUpOnEnterAnimation({ anchor: 'enter', duration: 1000, delay: 100, translate: '30px' }),
    // bounceOutDownOnLeaveAnimation({ anchor: 'leave', duration: 500, delay: 200, translate: '40px' })
  ]
})
export class AppComponent implements OnInit {
  title = 'app';
  welcomeLoaded = false;
  welcomeLoadedSecond = false;
  welcomeVisible = true;
  welcomeLogo = true;

  isDarkTheme: Observable<boolean>;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    public appState: ApplicationState,
    private api: ApiService,
    private setup: SetupService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public overlayContainer: OverlayContainer,
    public identity: IdentityService,
    private themeService: ThemeService,
    private breakpointObserver: BreakpointObserver) {

    setTimeout(() => {
      this.welcomeLogo = true;
    }, 1400);

    setTimeout(() => {
      this.welcomeLoaded = true;
    }, 2400);

    setTimeout(() => {
      this.welcomeLoadedSecond = true;
    }, 2700);

    setTimeout(() => {
      this.welcomeVisible = false;
    }, 5000);

    // Initial loading.
    this.setup.getChains();

    this.activatedRoute.paramMap.subscribe(async params => {

      console.log('PARAMS:', params);

      // const id: any = params.get('address');
      // console.log('Address:', id);

      // this.transactions = null;
      // this.address = id;
      // this.balance = await this.api.getAddress(id);
      // console.log(this.balance);

      // await this.updateTransactions('/api/query/address/' + id + '/transactions?limit=' + this.limit);
    });


  }

  async ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;

    setTimeout(() => {
      this.themeService.loadTheme();
    });
  }

  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }
}


// import { Component, HostBinding, OnInit } from '@angular/core';
// import { CordovaService } from '../shared/cordova.service';
// import { OverlayContainer } from '@angular/cdk/overlay';
// import { ThemeService } from '../shared/theme.service';
// import { Observable } from 'rxjs';
// import { IdentityService } from '../shared/identity.service';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent implements OnInit {
//   title = 'identity';

//   @HostBinding('class') componentCssClass;

//   isDarkTheme: Observable<boolean>;

//   constructor(cordova: CordovaService,
//     public overlayContainer: OverlayContainer,
//     public identity: IdentityService,
//     private themeService: ThemeService) {

//     if (cordova.initialized) {
//       console.log('Cordova not initialized yet');
//     }
//   }

//   ngOnInit() {
//     this.isDarkTheme = this.themeService.isDarkTheme;

//     setTimeout(() => {
//       this.themeService.loadTheme();
//     });
//   }

//   toggleDarkTheme(checked: boolean) {
//     this.themeService.setDarkTheme(checked);
//   }
// }
