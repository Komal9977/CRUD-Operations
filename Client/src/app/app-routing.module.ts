import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { MainToolComponent } from './main-tool/main-tool.component';

const routes: Routes = [  
  { path: 'maintool', component: MainToolComponent},
  { path: 'signup', component: SignupComponent},
  { path: '**', redirectTo:"maintool"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
