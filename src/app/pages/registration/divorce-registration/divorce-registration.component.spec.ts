import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivorceRegistrationComponent } from './divorce-registration.component';

describe('DivorceRegistrationComponent', () => {
  let component: DivorceRegistrationComponent;
  let fixture: ComponentFixture<DivorceRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivorceRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivorceRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
