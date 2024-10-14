import { NgClass, CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms'
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgClass, ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

 

  loginFormData = new FormGroup({
    userRole : new FormControl('',[Validators.required]),
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)])
  })

  setUserRole(role:string){
    this.loginFormData.get('userRole')?.setValue(role)
  }

  onSubmit(){
    console.log("login submitted")
  }

}
