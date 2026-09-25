import { Page ,Locator} from "@playwright/test";
export class  Logout {
logout : Locator;
constructor ( page : Page ){ 
  this.logout = page.getByRole('button', { name: 'Logout', exact: true });
 }

 async Logout () { 
    await this.logout.click();
  }


}
