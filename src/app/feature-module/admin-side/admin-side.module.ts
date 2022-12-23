import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import { AdminSideComponent } from './admin-side.component';
import {ThemeModule} from "../../theme-modules/theme.module";
import {HomeComponent} from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PasswordComponent } from './password/password.component';
import { AdminSideRoutingModule } from './admin-side-routing.module';


@NgModule({
  declarations: [
    AdminSideComponent,
    HomeComponent,
    DashboardComponent,
    PasswordComponent
  ],
  imports: [CommonModule, AdminSideRoutingModule, ThemeModule.forChild()]
})
export class AdminSideModule {
}