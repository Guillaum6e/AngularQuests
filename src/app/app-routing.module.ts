import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlockComponent } from './sign-up/block.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', title: 'Home', component: UserComponent },
  { path: 'sign-up', title: 'Sign-up', component: BlockComponent },
  { path: 'user', title: 'User', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
