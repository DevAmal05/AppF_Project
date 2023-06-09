import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signInForm: FormGroup;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

ngOnInit(): void {
this.initForm();
}
initForm() {
this.signInForm = this.formBuilder.group(  {
email: ['', [Validators.required, Validators.email]],
password: ['', [Validators.required, Validators.minLength(6)]]
});
}

onSubmit() {
const email= this.signInForm.get('email').value;
const password= this.signInForm.get('password').value;
this.authService.signInUser(email, password).then(
() => {
this.router.navigate(['/admin/dashboard']);
},
(error) => {
this.errorMessage=error
alert("email invalide. verifier votre mail et mot de passe");

}
);


}

}

