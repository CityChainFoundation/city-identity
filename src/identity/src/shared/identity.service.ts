import { Injectable, ComponentFactoryResolver } from '@angular/core';

@Injectable({
   providedIn: 'root'
})
export class IdentityService {

   public initialized = false;

   public identity: any;

   constructor() {

   }

   public api<T>(url: string, method: string = 'GET', data?: any): Promise<T> {
      return fetch(url, {
         method,
         body: JSON.stringify(data)
      })
         .then(response => {
            if (!response.ok) {
               throw new Error(response.statusText);
            }
            return response.json() as Promise<T>;
         });
   }

   public async loadIdentity(id: string)
   {
      let result = await this.api('https://identity.city-chain.org/api/identity/' + id);
      this.identity = result;
      console.log(this.identity);
   }
}
