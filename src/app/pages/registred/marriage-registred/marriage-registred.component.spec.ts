import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarriageRegistredComponent } from './marriage-registred.component';

describe('MarriageRegistredComponent', () => {
  let component: MarriageRegistredComponent;
  let fixture: ComponentFixture<MarriageRegistredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarriageRegistredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarriageRegistredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
