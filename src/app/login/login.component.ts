import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    userid: ['', Validators.required],
    password: ['', Validators.required],
  });

  user: any = {};
  usernameAlert: boolean = false;
  constructor( private fb: FormBuilder, private router: Router,) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if (this.loginForm.invalid) {
      this.usernameAlert = true;
      return;
    }else{
      this.router.navigate(['/main-dashboard']);
    }
    console.log(this.loginForm.value)
    this.user = Object.assign(this.user, this.loginForm.value)
    // localStorage.setItem('User', JSON.stringify(this.user))
  }

}
