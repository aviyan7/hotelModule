import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../services/admin.guard';
import { AdminSideComponent } from './admin-side/admin-side.component';
import { ClientSideComponent } from './client-side/client-side.component';
// import { FeatureModuleComponent } from './feature-module.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home',
        component: ClientSideComponent,
      },
    //   {
    //     path: 'home',
    //     loadChildren: () =>
    //       import('./client-side/client-side.module').then(
    //         (m) => m.ClientSideModule
    //       ),
    //   },
      {
        path: 'admin',
        canActivate: [AdminGuard],
        loadChildren: () =>
          import('./admin-side/admin-side.module').then(
            (m) => m.AdminSideModule
          ),
          runGuardsAndResolvers: 'paramsOrQueryParamsChange',
      },
      {
        path: 'auth',
        loadChildren: () => import('../auth/auth.module').then(m=>m.AuthModule)
    },
      {
        path: '**',
        redirectTo: 'home',
      },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class FeatureRoutingModule {}