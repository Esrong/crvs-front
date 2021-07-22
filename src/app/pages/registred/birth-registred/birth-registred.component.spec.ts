import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthRegistredComponent } from './birth-registred.component';

describe('BirthRegistredComponent', () => {
  let component: BirthRegistredComponent;
  let fixture: ComponentFixture<BirthRegistredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirthRegistredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthRegistredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
