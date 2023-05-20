import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './user/notfound/notfound.component';
import { UserHomePageComponent } from './user/user-home-page/user-home-page.component';

const routes: Routes = [
  {
    path: '', component:UserHomePageComponent
  },
  {
    path: 'user', 
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: '**', 
    component:NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
