import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YesterdayWeather } from './yesterday-weather';

describe('YesterdayWeather', () => {
  let component: YesterdayWeather;
  let fixture: ComponentFixture<YesterdayWeather>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YesterdayWeather]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YesterdayWeather);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
