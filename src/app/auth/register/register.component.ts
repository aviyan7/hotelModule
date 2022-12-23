import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userForm: FormGroup = new FormGroup({});

  // used in form
  user: User = new User();

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  get forms(): { [key: string]: AbstractControl } {
    return this.userForm.controls;
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      username: [undefined, Validators.required],
      password: [undefined, Validators.required],
      fullName: [undefined, Validators.required],
      address: [undefined, Validators.required],
      gender: ['male'],
      email: [
        undefined,
        Validators.compose([Validators.required, Validators.email]),
      ],
      phone: [
        undefined,
        Validators.compose([Validators.required, Validators.maxLength(10)]),
      ],
    });
  }

  registerUser(user: any) {
    console.log("registerUser0"+this.userForm);
    if (this.userForm.valid) {
      console.log("registerUser"+user);
      this.userService.addNewUser(user).subscribe(
        (response: any) => {
          console.log("registerUser1"+user);
          // Swal.fire(
          //   'Success',
          //   'User <b>' +
          //     response.username +
          //     '</b> registered successfully!!!<br/><i>Redirecting to home page</i>.',
          //   'success'
          // ).then(() => {
          //   this.router.navigate(['/']);
          // });
        },
        (error: any) => {
          console.log("error vayo");
          // Swal.fire(
          //   'Error !!!',
          //   'Something went wrong. Try again !!!',
          //   'error'
          // );
        }
      );
    }
  }

}
