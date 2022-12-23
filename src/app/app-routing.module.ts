import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: ''
    },
    {
        path: '',
        loadChildren: () => import('./feature-module/feature.module').then(m => m.FeatureModule)
    },
    // {
    //     path: 'auth',
    //     loadChildren: () => import('./auth/auth.module').then(m=>m.AuthModule)
    // },
    {
        path: '**',
        redirectTo: ''
        }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true, anchorScrolling: 'enabled', onSameUrlNavigation: 'reload', scrollPositionRestoration: 'enabled'})],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}
