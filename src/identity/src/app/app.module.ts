import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';

import { OverlayModule} from '@angular/cdk/overlay';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatSlideToggleModule,
    OverlayModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: MainComponent, pathMatch: 'full' },
      // { path: 'registry', component: RegistryComponent },
      // { path: 'view/:address', component: RegistryComponent },
      // { path: 'register', component: RegisterComponent },
      // { path: 'register/verify', component: RegisterVerifyComponent },
      // { path: 'register/sign', component: RegisterSignComponent },
      // { path: 'register/payment', component: RegisterPaymentComponent },
      // { path: 'announcements', component: AnnouncementsComponent },
      // { path: 'announcements/:number', component: AnnouncementsComponent },
      { path: 'about', component: AboutComponent },
    ], { onSameUrlNavigation: 'reload' })
  ],
  exports: [MatSliderModule,
    MatButtonModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatIconModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
