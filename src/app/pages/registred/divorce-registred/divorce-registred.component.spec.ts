import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivorceRegistredComponent } from './divorce-registred.component';

describe('DivorceRegistredComponent', () => {
  let component: DivorceRegistredComponent;
  let fixture: ComponentFixture<DivorceRegistredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivorceRegistredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivorceRegistredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
