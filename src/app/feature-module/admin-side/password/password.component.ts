import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  submitted: boolean = false;
  passwordUpdateForm: FormGroup = new FormGroup({});
  confirmPasswordMessage = 'The passwords do not match.';
    invalidPasswordMessage = 'Must contain at least 1 number, 1 uppercase letter, 1 lowercase letter and at least 8 characters.';
  // used in form
  // user: User = new User();

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  get forms(): { [key: string]: AbstractControl } {
    return this.passwordUpdateForm.controls;
  }

  initForm() {
    this.passwordUpdateForm = this.formBuilder.group({
      currentpassword: [undefined, Validators.required],
      newpassword: [undefined, Validators.required],
      repassword: [undefined, Validators.required]
      // fullName: [undefined, Validators.required],
      // address: [undefined, Validators.required],
      // gender: ['male'],
      // email: [
      //   undefined,
      //   Validators.compose([Validators.required, Validators.email]),
      // ],
      // phone: [
      //   undefined,
      //   Validators.compose([Validators.required, Validators.maxLength(10)]),
      // ],
    });
  }

  updatePassword(user: any) {
    console.log("registerUser0"+this.passwordUpdateForm);
    if (this.passwordUpdateForm.valid) {
      // console.log("registerUser"+user);
      this.userService.updatePassword(user).subscribe(
        (response: any) => {
          console.log("updatepassword1"+user);
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

  // up() {
  //   this.userService.updatePassword().subscribe((response: any) =>{
  //     console.log("chalyo ni");
  //   },
  //   (error: any)=> {
  //     console.log("error sala");
  //   })
  // }
}
