import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { CookieService } from "ngx-cookie-service";
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';


export const appConfig: ApplicationConfig = {


  providers: [provideRouter(routes), provideAnimationsAsync(), CookieService, 
    provideHttpClient(), MatSidenavModule]

};


