import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


export const ROUTES: Routes = [
  { path: 'users', loadChildren: () => import('./users/users.module').then(module => module.UsersModule)},
  { path: '**', redirectTo: '/users' },
  { path: '', pathMatch: 'full', redirectTo: '/users' },
];
@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
