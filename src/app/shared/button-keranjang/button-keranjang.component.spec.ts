import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonKeranjangComponent } from './button-keranjang.component';

describe('ButtonKeranjangComponent', () => {
  let component: ButtonKeranjangComponent;
  let fixture: ComponentFixture<ButtonKeranjangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonKeranjangComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonKeranjangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
