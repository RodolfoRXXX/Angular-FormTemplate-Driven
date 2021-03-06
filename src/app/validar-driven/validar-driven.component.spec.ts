import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarDrivenComponent } from './validar-driven.component';

describe('ValidarDrivenComponent', () => {
  let component: ValidarDrivenComponent;
  let fixture: ComponentFixture<ValidarDrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidarDrivenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidarDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
