import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpfGeneratorComponent } from './cpf-generator.component';

describe('CpfGeneratorComponent', () => {
  let component: CpfGeneratorComponent;
  let fixture: ComponentFixture<CpfGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpfGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpfGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
