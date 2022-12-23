import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { ClientSideComponent } from './client-side/client-side.component';
import { ThemeModule } from '../theme-modules/theme.module';
import { AuthModule } from '../auth/auth.module';

@NgModule({
    declarations: [
    ClientSideComponent
  ],
    imports: [
      CommonModule,
      FeatureRoutingModule,
      ThemeModule.forChild(),
      AuthModule
    ]
  })
  export class FeatureModule { }