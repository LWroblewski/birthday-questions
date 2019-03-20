import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {URL_PAGES} from './services/pages.service';
import {environment} from '../environments/environment';
import {HomeModule} from './home/home.module';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PageModule} from './page/page.module';
import {SharedModule} from './shared/shared.module';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HomeModule,
    PageModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    { provide: URL_PAGES, useValue: environment.urlPages }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
