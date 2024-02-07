import { Component, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CrudService } from '../../Service/crud.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { register } from '../../model/register';


@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: 'registration.component.html',
  styleUrls: ['registration.component.css'],
})
export class RegistrationComponent {

  reg = {
    fName: '',
    lName: '',
    username: '',
    email: '',
    password: '',
    cnfrmPassword: '',
  };
  private flag: boolean = false;

  constructor(private router: Router, private crudServ: CrudService) {}

  private isEmailValid(email: string): boolean {
    // Use a more comprehensive email validator
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }

  onSubmit(reg:register) {
    if (!this.isEmailValid(this.reg.email)) {
      alert('Invalid email format.');
      return; // Stop further execution if email format is invalid
    } else {
      if (this.reg.password !== this.reg.cnfrmPassword) {
        alert('Passwords do not match.');
        return; // Stop further execution if passwords do not match
      } else {
        console.log(this.reg);

        console.log(reg)
    this.crudServ.registerUser(reg).subscribe(data=>{
      console.log(reg.fName + reg.lName)
      alert("Registration Successful")
      this.router.navigateByUrl('/');
    },
    error=>alert(" User is not registerd as Username Already Exists")
    )

  }
}
  }
}