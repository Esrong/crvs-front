import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthStatisticsComponent } from './birth-statistics.component';

describe('BirthStatisticsComponent', () => {
  let component: BirthStatisticsComponent;
  let fixture: ComponentFixture<BirthStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirthStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
