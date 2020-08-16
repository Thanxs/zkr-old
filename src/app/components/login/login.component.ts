import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailRegexp } from '../../shared/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  private readonly form: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(emailRegexp)]],
      password: ['', Validators.required],
    });
  }

  public ngOnInit(): void {
  }

  private showRegistrationForm(): any {

  }

  private submit(): any {
    console.log(this.form);
  }
}
