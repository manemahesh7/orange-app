import { Component, OnInit } from '@angular/core';
import { faAirFreshener } from '@fortawesome/free-solid-svg-icons';
import {} from '@fortawesome/free-regular-svg-icons';

import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public faAirFreshener = faAirFreshener;
  public uiInvalidCredential = false;

  public fbFormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {}

  loginProcessHere() {
    const data = this.fbFormGroup.value;
    console.log(data);

    // ajax call
    if (data.username === 'angular' && data.password === 'admin') {
      sessionStorage.setItem('sid', 'true');
      this.router.navigate(['home']);
    } else {
      this.uiInvalidCredential = true;
    }
  }
}
