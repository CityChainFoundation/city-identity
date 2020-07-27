import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
   providedIn: 'root'
})
export class ThemeService {
   private _darkTheme: Subject<boolean> = new Subject<boolean>();
   isDarkTheme = this._darkTheme.asObservable();

   setDarkTheme(isDarkTheme: boolean) {
      this._darkTheme.next(isDarkTheme);
      this.saveTheme(isDarkTheme);
   }

   saveTheme(isDarkTheme: boolean) {
      localStorage.setItem('dark-mode', isDarkTheme ? 'true' : 'false');
   }

   loadTheme() {
      let isDarkMode = localStorage.getItem('dark-mode') === 'true';
      this._darkTheme.next(isDarkMode);
   }
}
