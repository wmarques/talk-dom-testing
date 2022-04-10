import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      conditions: [false, Validators.requiredTrue]
    }, {
      validators: [this.validatePassword]
    });
  }

  validatePassword(f: FormGroup) {
    if (f.value.password === '' || f.value.confirmPassword === '') {
      return null;
    }
    if (f.value.password === f.value.confirmPassword) {
      return null;
    }

    return {passwordDoNotMatch: true}

  }


}
