import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userClaims: any;
  username: string;
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserClaims().subscribe((data: any) => {
      this.userClaims = data;
      localStorage.setItem('UserName', data.UserName);
      // this.username = data.UserName;
      this.userService.currentMessage.subscribe(message => this.username = message);
      this.userService.changeMessage(data.UserName);
    });
  }

  Logout() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }
}
