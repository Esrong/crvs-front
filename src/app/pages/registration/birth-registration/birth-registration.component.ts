import { Component, NgZone, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BirthService } from 'src/app/core/services/birth.service';

@Component({
  selector: 'app-birth-registration',
  templateUrl: './birth-registration.component.html',
  styleUrls: ['./birth-registration.component.scss']
})
export class BirthRegistrationComponent implements OnInit {
  breadCrumbItems: Array<{}>;

  createBirthForm: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    private birthService: BirthService) { 
      this.createBirthForm=this.formBuilder.group({
        id:[''],
        name:[''],
        fname:[''],
        gname:[''],
        gender:[''],
        birthDate:[''],
        age:[''],
        birthPlace:[''],
        birthType:[''],
        birthAid:[''],
        ethnicOrigin:[''],
        citizenship:[''],
        region:[''],
        wereda:[''],
        zone:[''],
        kebele:[''],
        marriage:[''],
        divorce:[''],
        fatherInfo:[''],
        motherInfo:[''],
        otherThanParent:['']
      })

    }

  ngOnInit(): void {  }
  onSubmit():any{
    this.birthService.postBirth(this.createBirthForm.value).subscribe(()=>{
      console.log('Birth is registred successfully')
      this.ngZone.run(()=>this.router.navigateByUrl('/registred/civil-registred'))
    }, (err)=>{
      console.log(err);
    })
  }

}
