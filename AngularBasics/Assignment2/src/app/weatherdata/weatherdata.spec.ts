import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Weatherdata } from './weatherdata';

describe('Weatherdata', () => {
  let component: Weatherdata;
  let fixture: ComponentFixture<Weatherdata>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Weatherdata]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Weatherdata);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
