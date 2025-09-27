import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchView } from './switch-view';

describe('SwitchView', () => {
  let component: SwitchView;
  let fixture: ComponentFixture<SwitchView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
