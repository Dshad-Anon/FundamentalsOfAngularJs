import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivideResult } from './divide-result';

describe('DivideResult', () => {
  let component: DivideResult;
  let fixture: ComponentFixture<DivideResult>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivideResult]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivideResult);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
