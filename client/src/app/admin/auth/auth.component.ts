import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/model/auth.service';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public user!: User;
  public errorMessage!: string;

  constructor(private router: Router,
    private auth: AuthService) { }

  ngOnInit(): void {
    this.user = new User();
    console.log('this.user: ' + this.user)
  }

  // middleware between here and backend
  authenticate(form: NgForm): void {
    if (form.valid) {
      // perform authentication
      this.auth.authenticate(this.user.username, this.user.password)
        .subscribe(response => {
          if (response) {
            console.log('response: ' + response)
            this.router.navigateByUrl("/admin/main");
          }
          this.errorMessage = "Authentication Failed";
        })


    } else {
      this.errorMessage = "Form data invalid"
    }
  }

}
