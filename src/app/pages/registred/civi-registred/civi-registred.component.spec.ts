import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiviRegistredComponent } from './civi-registred.component';

describe('CiviRegistredComponent', () => {
  let component: CiviRegistredComponent;
  let fixture: ComponentFixture<CiviRegistredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiviRegistredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiviRegistredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
