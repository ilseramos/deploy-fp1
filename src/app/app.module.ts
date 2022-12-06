import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Auth0
import { AuthModule } from '@auth0/auth0-angular';
import { PublicComponent } from './components/public/public.component';
import { PrivateComponent } from './components/private/private.component';
import { ProductoComponent } from './components/producto/producto.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { HttpClientModule } from '@angular/common/http';
import { PRegistComponent } from './components/p-regist/p-regist.component';
import { CRegistComponent } from './components/c-regist/c-regist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module} from 'ng-recaptcha';
import { environment } from 'src/environments/environment';
import { ActualizarComponent } from './components/actualizar/actualizar.component';


@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    PrivateComponent,
    ProductoComponent,
    CarritoComponent,
    PRegistComponent,
    CRegistComponent,
    ActualizarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Auth0
    AuthModule.forRoot({
      domain: 'dev-gogh0cidq00twi8r.us.auth0.com',
      clientId: 'AEqrhOqTIupyfDPefIKl4J27HzNHAR5i',
      // Opcionales
      cacheLocation: 'localstorage',
      useRefreshTokens: true,
    }),
    RecaptchaV3Module,
   HttpClientModule,
   ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  providers: [{
    provide: RECAPTCHA_V3_SITE_KEY,
    useValue: environment.recaptcha.siteKey,
}],
  bootstrap: [AppComponent]
})
export class AppModule { }
