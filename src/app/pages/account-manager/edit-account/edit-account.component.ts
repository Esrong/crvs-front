import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/core/services/account.service';
import { AlertService } from 'src/app/core/services/alert.service';
import { environment } from 'src/environments/environment';
import { finalize, first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/core/services/auth.service';


@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.scss']
})
export class EditAccountComponent implements OnInit {
 
  resetForm: FormGroup;
  submitted = false;
  error = '';
  success = '';
  loading = false;
  breadCrumbItems: Array<{}>;


  // set the currenr year
  year: number = new Date().getFullYear();

  // tslint:disable-next-line: max-line-length
  constructor(  private alertService: AlertService, private accountService: AccountService,private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    document.body.removeAttribute('data-layout');
    document.body.classList.add('auth-body-bg');

    this.resetForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngAfterViewInit() {
  }

  // convenience getter for easy access to form fields
  get f() { return this.resetForm.controls; }

  /**
   * On submit form
   */
  onSubmit() {
    this.success = '';
    this.submitted = true;

    // stop here if form is invalid
    if (this.resetForm.invalid) {
      return;
    } else
    if (environment.defaultauth === 'firebase') {
      this.authenticationService.resetPassword(this.f.email.value)
        .catch(error => {
          this.error = error ? error : '';
        });
    }
    else{
      this.loading=true;
      // this.accountService.forgotPassword(this.f.email.value)  
      this.accountService.forgotPassword(this.f.email.value)
      .pipe(first())
      .pipe(finalize(()=>this.loading=false))
      .subscribe({
        next: () => this.alertService.success('Please check your email for password reset instructions'),
        
        error: error => this.alertService.error(error)
       
    });
      
    }
  }
}
