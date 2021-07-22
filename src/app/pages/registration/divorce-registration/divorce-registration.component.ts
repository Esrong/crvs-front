import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-divorce-registration',
  templateUrl: './divorce-registration.component.html',
  styleUrls: ['./divorce-registration.component.scss']
})
export class DivorceRegistrationComponent implements OnInit {
// bread crumb items
breadCrumbItems: Array<{}>;

constructor() { }

ngOnInit() {
  this.breadCrumbItems = [{ label: 'Forms' }, { label: 'Form Wizard', active: true }];
}

}
