import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BodyComponent } from './portfolio/body/body.component';
import { HeaderComponent } from './portfolio/header/header.component';
import { BodyTextComponent } from './portfolio/body/body-text/body-text.component';
import { BodyImageComponent } from './portfolio/body/body-image/body-image.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PortfolioComponent,
    BodyComponent,
    BodyTextComponent,
    BodyImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
