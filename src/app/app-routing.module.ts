import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './guards/auth.guard';
import {NoAuthGuard} from './guards/no-auth.guard';

const routes: Routes = [
  { path: '', loadChildren: './pages/dashboard/tabs/tabs.module#TabsPageModule', canActivate: [AuthGuard] },
  { path: 'sign-in', loadChildren: './pages/sign-in/sign-in.module#SignInModule', canActivate: [NoAuthGuard] },
  { path: 'sign-up', loadChildren: './pages/sign-up/sign-up.module#SignUpPageModule', canActivate: [NoAuthGuard] }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
