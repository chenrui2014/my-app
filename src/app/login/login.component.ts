import { Component, OnInit, Input } from '@angular/core';
//import { Routes } from '@angular/router';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() user: User = {
    id: 1,
    name: 'chen',
    password: '123'
  }

  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  onClock() {

    const user = this.userService.login(this.user.name, this.user.password);
  }
}
