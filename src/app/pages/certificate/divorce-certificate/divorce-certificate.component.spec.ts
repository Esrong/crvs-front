import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivorceCertificateComponent } from './divorce-certificate.component';

describe('DivorceCertificateComponent', () => {
  let component: DivorceCertificateComponent;
  let fixture: ComponentFixture<DivorceCertificateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivorceCertificateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivorceCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
