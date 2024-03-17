import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  forms = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    email: new FormControl('')
  })
  constructor() { }

  http:HttpClient = inject(HttpClient);

  handleSubmit(){
    this.http.post('http://localhost:8000/api/users', this.forms.value).subscribe((data:any) => {
      if(data && data.createdUser){
        alert(`Hello ${data.createdUser.name}..You have registered successfully.`)
      }
      else{
        alert(`Error: ${data.message}`)
      }
    })
  }
}
