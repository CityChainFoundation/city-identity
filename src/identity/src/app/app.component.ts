import { Component, HostBinding, OnInit } from '@angular/core';
import { CordovaService } from '../shared/cordova.service';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ThemeService } from '../shared/theme.service';
import { Observable } from 'rxjs';
import { IdentityService } from '../shared/identity.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'identity';

  @HostBinding('class') componentCssClass;

  isDarkTheme: Observable<boolean>;

  constructor(cordova: CordovaService,
              public overlayContainer: OverlayContainer,
              public identity: IdentityService,
              private themeService: ThemeService) {

    if (cordova.initialized) {
      console.log('Cordova not initialized yet');
    }

  }

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;

    
    // let result = await this.identity.api('https://identity.city-chain.org/api/identity/PHRcZvY4z86XxXey1VykYosy3BecdTDnUi');
    // console.log(result);

    // this.identity.api();
  }

  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }
}
