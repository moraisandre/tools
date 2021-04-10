import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateCpfComponent } from './validate-cpf.component';

describe('ValidateCpfComponent', () => {
  let component: ValidateCpfComponent;
  let fixture: ComponentFixture<ValidateCpfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidateCpfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateCpfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('validateCPF should not to throw', () => {
    expect(() => {
      component.validateCPF();
    }).not.toThrow();
  });

  it('validateCPF should to be true with a valid CPF', () => {
    component.cpfText = '000.000.000-00';
    component.validateCPF();

    expect(component.cpfValid).toEqual(true);

    component.cpfText = '00000000000';
    component.validateCPF();

    expect(component.cpfValid).toEqual(true);
  });

  it('validateCPF should to be false with an invalid CPF', () => {
    component.cpfText = '000.000.000-01';
    component.validateCPF();

    expect(component.cpfValid).toEqual(false);

    component.cpfText = '00000000001';
    component.validateCPF();

    expect(component.cpfValid).toEqual(false);
  });

  it('reset should not to throw', () => {
    expect(() => {
      component.reset();
    }).not.toThrow();
  });


});
