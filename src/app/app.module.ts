import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './theme-modules/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthIntercepter, authInterceptorProviders } from './services/auth.interceptor';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ThemeModule.forRoot(),
    NgbModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent],
  providers: [authInterceptorProviders]
})
export class AppModule { }
