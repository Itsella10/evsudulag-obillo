import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularmaterialModule } from './angularmaterial.module';
import { RoutingModule } from './routing.module';
import { ProfileComponent } from './pages/profile/profile.component';



@NgModule({
  declarations: [LoginComponent, ProfileComponent],
  imports: [
    CommonModule,
    RoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularmaterialModule
  ]
})
export class UsersModule { }
