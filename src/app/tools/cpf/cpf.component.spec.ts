import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpfComponent } from './cpf.component';

describe('CpfComponent', () => {
  let component: CpfComponent;
  let fixture: ComponentFixture<CpfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit should not to throw', () => {
    expect(() => {
      component.ngOnInit();
    }).not.toThrow();
  });

  it('ngOnInit should generate a CPF', () => {
    component.ngOnInit();
    expect(component.cpf).not.toEqual('');
  });

  it('generateCPF should not to throw', () => {
    expect(() => {
      component.generateCPF();
    }).not.toThrow();
  });

  it('generateCPF should generate a CPF', () => {
    component.generateCPF();
    expect(component.cpf).not.toEqual('');
  });

  it('generateCPFWithoutMask should not to throw', () => {
    expect(() => {
      component.generateCPFWithoutMask();
    }).not.toThrow();
  });

  it('generateCPFWithoutMask should generate a CPF without mask', () => {
    component.generateCPFWithoutMask();
    expect(component.cpfWithoutMask).not.toEqual('');
  });

  it('copyCPF should not to throw', () => {
    expect(() => {
      component.copyCPF();
    }).not.toThrow();
  });

  it('copyCPF should not to throw if is not masked', () => {
    expect(() => {
      component.copyCPF(false);
    }).not.toThrow();
  });

});
