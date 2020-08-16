import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import {
  MatButtonModule,
  MatDialogModule,
  MatDrawerContainer,
  MatFormFieldModule,
  MatIconModule,
  MatSelectModule,
  MatSidenavModule,
} from '@angular/material';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { LoginModule } from '../login/login.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    MatDialogModule,
    LoginModule,
  ],
  exports: [LayoutComponent],
  entryComponents: [LoginComponent],
})
export class LayoutModule {}
