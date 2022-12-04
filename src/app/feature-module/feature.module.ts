import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { ClientSideComponent } from './client-side/client-side.component';
import { AdminSideComponent } from './admin-side/admin-side.component';
import { ThemeModule } from '../theme-modules/theme.module';

@NgModule({
    declarations: [
    ClientSideComponent,
    AdminSideComponent
  ],
    imports: [
      CommonModule,
      FeatureRoutingModule,
      ThemeModule.forChild(),
    ]
  })
  export class FeatureModule { }