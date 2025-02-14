import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from './routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularmaterialModule } from './angularmaterial.module';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularmaterialModule
  ]
})
export class UsersModule { }
