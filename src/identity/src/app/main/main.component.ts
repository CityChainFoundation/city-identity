import { Component } from '@angular/core';
import { IdentityService } from 'src/shared/identity.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  constructor(public identity: IdentityService) {
    this.identity.loadIdentity('PHRcZvY4z86XxXey1VykYosy3BecdTDnUi');
  }
}
