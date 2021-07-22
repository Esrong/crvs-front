import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { mustMatchValidator } from 'src/app/core/helpers';
import { AccountService } from 'src/app/core/services/account.service';
import { AlertService } from 'src/app/core/services/alert.service';

@Component({
  selector: 'app-birth-certificate',
  templateUrl: './birth-certificate.component.html',
  styleUrls: ['./birth-certificate.component.scss']
})
export class BirthCertificateComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  loading=false;
  breadCrumbItems: Array<{}>;

  constructor(  

    private alertService: AlertService,
    private router: Router,
    private accountService: AccountService,
   ) { }

  ngOnInit(): void {
    document.body.removeAttribute('data-layout');
    document.body.classList.add('auth-body-bg');

      this.form = new FormGroup({
        'firstName': new FormControl('', [
          Validators.required
        ]),
        'lastName': new FormControl('', [
          Validators.required
        ]),
        'date': new FormControl('', [
          Validators.required
        ]),
        'role': new FormControl('', [
          Validators.required
        ]),
        'wereda': new FormControl('', [
          Validators.required,
          Validators.minLength(10)
        ]),
        'zone': new FormControl('', [
          Validators.required,
          Validators.minLength(10)
        ]),
        'region': new FormControl('', [
          Validators.required,
        ]),
        'kebele': new FormControl('', [
          Validators.required,

        ]),
        'email': new FormControl('', [
          Validators.required,

        ]),
        'phone': new FormControl('', [
 

        ]),
       'acceptTerms': new FormControl( '', [Validators.requiredTrue]),
        'password': new FormControl('', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(16)
        ]),
        'confirmPassword': new FormControl(''),
      },{ validators: mustMatchValidator });
    }
    get f() { return this.form.controls; }
  
  onSubmit() {
    // this.success = '';
    this.submitted = true;
    this.loading=true;

      this.accountService
      .create(this.form.value)
      .subscribe((res) => {
        this.router.navigate(['/edit-account']);
      });


  }
  get firstName(): AbstractControl {
    return this.form.get('fistName');
  }

  get lastName(): AbstractControl {
    return this.form.get('lastName');
  }

  get date(): AbstractControl {
    return this.form.get('date');
  }
  get role(): AbstractControl{
    return this.form.get('role');
  }

  get region(): AbstractControl {
    return this.form.get('region');
  }

  get zone(): AbstractControl {
    return this.form.get('zone');
  }

  get wereda(): AbstractControl {
    return this.form.get('wereda');
  }

  get kebele(): AbstractControl {
    return this.form.get('kebele');
  }

  get email(): AbstractControl {
    return this.form.get('email');
  }

  get phone(): AbstractControl {
    return this.form.get('phone');
  }

  get password(): AbstractControl {
    return this.form.get('password');
  }

  get confirmPassword(): AbstractControl {
    return this.form.get('confirmPassword');
  }
  get acceptTerms(): AbstractControl{
    return this.form.get('acceptTerms');
  }

}
