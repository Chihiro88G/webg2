import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../model/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent {

  constructor(private auth: AuthService,
    private router: Router) { }

  logout(): void {
    this.auth.logout();
    this.router.navigateByUrl('/');
  }
}
