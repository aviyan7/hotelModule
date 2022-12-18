import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import { AdminSideComponent } from './admin-side.component';
import {ThemeModule} from "../../theme-modules/theme.module";
import {HomeComponent} from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PasswordComponent } from './password/password.component';
import { AdminSideRoutingModule } from './admin-side-routing.module';
import { RoomComponent } from './room/room.component';

@NgModule({
  declarations: [
    AdminSideComponent
    HomeComponent,
    DashboardComponent,
    PasswordComponent,
    RoomComponent
  ],
  imports: [CommonModule, AdminSideRoutingModule, ThemeModule.forChild()],
})
export class AdminSideModule {
}