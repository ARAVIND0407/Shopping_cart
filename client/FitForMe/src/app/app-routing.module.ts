import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './user/notfound/notfound.component';

const routes: Routes = [
  {
    path: '', 
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
