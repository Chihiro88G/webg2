import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/model/auth.service';

import { User } from 'src/app/model/user.model';

@Component({
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
    public user?: User;
    public errorMessage?: string;

  constructor(private router: Router,
    private auth: AuthService) { }

  ngOnInit(): void {
    this.user = new User();
  }

  createUser(form: NgForm) {
    if(form.valid){
    this.auth.register(this.user!).subscribe(data => {
        // perform registration
        if(data.success)
        {
            console.log(data);
            this.auth.storeUserData(data.token, data.user);
            this.router.navigateByUrl('admin/auth')
        }
    });
}
    else{
        this.errorMessage = "Invalid registration"
    }
  }
}