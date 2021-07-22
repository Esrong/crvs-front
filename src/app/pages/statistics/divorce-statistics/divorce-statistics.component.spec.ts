import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivorceStatisticsComponent } from './divorce-statistics.component';

describe('DivorceStatisticsComponent', () => {
  let component: DivorceStatisticsComponent;
  let fixture: ComponentFixture<DivorceStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivorceStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivorceStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
