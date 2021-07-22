import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeathRegistredComponent } from './death-registred.component';

describe('DeathRegistredComponent', () => {
  let component: DeathRegistredComponent;
  let fixture: ComponentFixture<DeathRegistredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeathRegistredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeathRegistredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
