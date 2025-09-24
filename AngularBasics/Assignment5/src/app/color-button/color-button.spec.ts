import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorButton } from './color-button';

describe('ColorButton', () => {
  let component: ColorButton;
  let fixture: ComponentFixture<ColorButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
