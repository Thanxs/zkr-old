import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import {
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  exports: [LoginComponent],
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class LoginModule {}
