import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
// import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
   userLoginForm: FormGroup = new FormGroup({});
   errorMessage: string = '';
   submitted: boolean = false;
   title: string = 'Sign in to continue !';
  loading: boolean[] = [false,false];
   passwordLength: number = 2;
  btnStatus: string = 'Sign In';
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  get forms(): { [key: string]: AbstractControl } {
    return this.userLoginForm.controls;
  }

  loginUser(userData: any) {
    if (this.userLoginForm.valid) {
      this.loginService.generateToken(userData).subscribe(
        (data: any) => {
          // Login...
          this.loginService.loginUser(data.token);

          this.loginService.getCurrentUser().subscribe((user: any) => {
            this.loginService.setUser(user);
            if (this.loginService.getUserRole() == 'ADMIN') {
              console.log(this.loginService.getUserRole());
              this.router.navigateByUrl('/admin');
              this.loginService.loginStatusSubject.next(true);
            } else if (this.loginService.getUserRole()) {
              this.router.navigateByUrl('/user');
              this.loginService.loginStatusSubject.next(true);
            } else {
              this.loginService.logout();
            }
          });
        },
        (error) => {
          console.log('Error: ', error);
          // Swal.fire('Invalid Details', 'Something went wrong !!!', 'error');
        }
      );
    }
  }

  initForm() {
    this.userLoginForm = this.formBuilder.group({
      username: [undefined, Validators.required],
      password: [undefined, Validators.compose([Validators.required, Validators.minLength(2)])],
    });
  }
}
