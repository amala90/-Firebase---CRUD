import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: any;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    let user = localStorage.getItem('user');
    const userStored = JSON.parse(user as string);
    this.user = userStored;
  }
  signOut() {
    this.authService.SignOut();
  }
}

