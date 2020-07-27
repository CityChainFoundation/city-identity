import { Injectable } from '@angular/core';

@Injectable({
   providedIn: 'root'
})
export class CordovaService {

   public initialized = false;

   constructor() {

      let onDeviceReady = () => {
         // platformBrowserDynamic().bootstrapModule(AppModule);
         console.log('CORDOVA READY!');
         this.initialized = true;
      };

      document.addEventListener('deviceready', onDeviceReady, false);
   }
}
