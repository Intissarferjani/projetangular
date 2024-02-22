import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { RegisterComponent } from './register/register.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ContactComponent } from './contact/contact.component';
import { ProductdetaillesComponent } from './productdetailles/productdetailles.component';




const routes: Routes = [
  //la permiére page home

  { path: 'login', component: LoginComponent },
 
  { path: 'register', component: RegisterComponent },
  { path: 'resetpassword', component: ResetpasswordComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'productdetailles', component:ProductdetaillesComponent},
  
  
 
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
