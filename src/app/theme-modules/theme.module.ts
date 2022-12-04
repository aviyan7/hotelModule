import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule, ModuleWithProviders} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
 import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
 //import {NgSelectModule} from "@ng-select/ng-select";
// import {AngularEditorModule} from "@kolkov/angular-editor";
import {BaseLayoutComponent} from "./base-layout/base-layout.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatDrawerContainer, MatSidenavModule} from "@angular/material/sidenav";
import {MatMenuModule} from "@angular/material/menu";
import {MatDividerModule} from "@angular/material/divider";
import {HeaderComponent} from "./header/header.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {MatButtonModule} from "@angular/material/button";
// import {RichEditorComponent} from "../core/common/components/rich-editor/rich-editor.component";
import {MatButtonToggle, MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatCardModule} from "@angular/material/card";
// import {PipesModule} from "../core/pipes/pipes.module";
// import { StatusFilterComponent } from '../core/common/components/status-filter/status-filter.component';

const BASE_MODULES: Array<any> = [
   NgbModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
   //NgSelectModule,
  // AngularEditorModule,
  // PipesModule,
];

const MAT_MODULES: Array<any> = [
  MatSidenavModule,
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatDividerModule,
  MatListModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
];

const COMPONENTS: Array<any> = [
  HeaderComponent,
  SidebarComponent,
  BaseLayoutComponent,
  // RichEditorComponent,
  // StatusFilterComponent
];

const ENTRY_COMPONENTS: Array<any> = [];

const PIPES: Array<any> = [];

const DIRECTIVES: Array<any> = [];

@NgModule({
  imports: [CommonModule, ...BASE_MODULES, ...MAT_MODULES, RouterModule],
  exports: [...BASE_MODULES, ...MAT_MODULES, ...COMPONENTS, ...PIPES, ...DIRECTIVES],
  declarations: [...COMPONENTS, ...PIPES, ...DIRECTIVES, HeaderComponent, SidebarComponent],
  entryComponents: [...ENTRY_COMPONENTS]
})

export class ThemeModule {
  static forRoot(): ModuleWithProviders<ThemeModule> {
    return <ModuleWithProviders<ThemeModule>>{
      ngModule: ThemeModule,
      providers: []
    };
  }

  static forChild(): ModuleWithProviders<ThemeModule> {
    return {
      ngModule: ThemeModule,
      providers: []
    };
  }
}

