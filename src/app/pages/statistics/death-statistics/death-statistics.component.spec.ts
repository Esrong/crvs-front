import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeathStatisticsComponent } from './death-statistics.component';

describe('DeathStatisticsComponent', () => {
  let component: DeathStatisticsComponent;
  let fixture: ComponentFixture<DeathStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeathStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeathStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
