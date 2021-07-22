import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarriageStatisticsComponent } from './marriage-statistics.component';

describe('MarriageStatisticsComponent', () => {
  let component: MarriageStatisticsComponent;
  let fixture: ComponentFixture<MarriageStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarriageStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarriageStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
