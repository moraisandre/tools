import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpfValidadorComponent } from './cpf-validator.component';

describe('CpfValidadorComponent', () => {
  let component: CpfValidadorComponent;
  let fixture: ComponentFixture<CpfValidadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpfValidadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpfValidadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
