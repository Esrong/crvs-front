import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { BirthService } from 'src/app/core/services/birth.service';

@Component({
  selector: 'app-civi-registred',
  templateUrl: './civi-registred.component.html',
  styleUrls: ['./civi-registred.component.scss']
})
export class CiviRegistredComponent implements OnInit {
  breadCrumbItems: Array<{}>;

  Birth:any=[];
  constructor(

    private birthService: BirthService ) { }

  ngOnInit(): void { 
    this.birthService.GetBirth().subscribe(res=>{
      console.log(res)
      this.Birth=res;
    });
  }
  deleteCivil(id: string) {
    const birth = this.Birth.find(x => x.id === id);
    birth.isDeleting = true;
    this.birthService.deletBirth(id)
        .pipe(first())
        .subscribe(() => {
            this.Birth = this.Birth.filter(x => x.id !== id) 
        });
}

  // delete(id:any, i:any) {
  //   console.log(id);
  //   if(window.confirm('Do you want to go ahead?')) {
  //     this.birthService.deletBirth(id).subscribe((res) => {
  //       console.log(res)
  //       this.Birth.splice(i, 1);
  //     })
  //   }
  // }

}
