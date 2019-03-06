import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  isLoginErr: Boolean = false;
  constructor(private userService: UserService, private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit() {
  }

  OnSubmit(userName, password) {
    this.spinner.show();
    this.userService.userAuthentication(userName, password).subscribe((data: any) => {
      localStorage.setItem('userToken', data.access_token);
      localStorage.setItem('userRoles', data.role);
      this.spinner.hide();
      this.router.navigate(['/home']);
    },
    (err: HttpErrorResponse) => {
      this.spinner.hide();
      this.isLoginErr = true;
    });
  }

}
