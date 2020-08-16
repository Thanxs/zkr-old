import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  private opened = false;

  constructor(private dialog: MatDialog) {}

  private openLoginForm(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      data: {
        title: 'Форма входа',
      },
      width: '420px',
    });
  }
}
