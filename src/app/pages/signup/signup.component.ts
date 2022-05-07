import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Location} from "@angular/common";
import {AuthService} from "../../shared/services/auth.service";
import {User} from "../../shared/models/User";
import {UserService} from "../../shared/services/user.service";
import {STEPPER_GLOBAL_OPTIONS} from "@angular/cdk/stepper";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})
export class SignupComponent implements OnInit {

  // @ts-ignore
  firstFormGroup: FormGroup;
  // @ts-ignore
  secondFormGroup: FormGroup;
  // @ts-ignore
  thirdFormGroup: FormGroup;

  constructor(private location: Location, private _formbuilder: FormBuilder, private authService: AuthService, private userService: UserService) {
  }

  ngOnInit(): void {
    this.firstFormGroup = this._formbuilder.group({
      emailCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formbuilder.group({
      passCtrl: ['', Validators.required],
      rePassCtrl: ['', Validators.required],
    });
    this.thirdFormGroup = this._formbuilder.group({
      firstNameCtrl: ['', Validators.required],
      lastNameCtrl: ['', Validators.required],
    });
  }

  onSubmit() {
    if(this.secondFormGroup.get('passCtrl')?.value === (this.secondFormGroup.get('rePassCtrl')?.value)){
      this.authService.signup(this.firstFormGroup.get('emailCtrl')?.value, this.secondFormGroup.get('passCtrl')?.value).then(cred => {
        console.log(cred);
        const user: User = {
          id: cred.user?.uid as string,
          email: this.firstFormGroup.get('emailCtrl')?.value,
          username: this.firstFormGroup.get('emailCtrl')?.value.split('@')[0],
          name: {
            firstname: this.thirdFormGroup.get('firstNameCtrl')?.value,
            lastname: this.thirdFormGroup.get('lastNameCtrl')?.value
          }
        };
        this.userService.create(user).then(_ => {
          console.log('User added successfully!');
        }).catch(error => {
          console.log(error);
        });
      }).catch(error => {
        console.log(error);
      });
    }

  }

  goBack(){
    this.location.back();
  }
}
