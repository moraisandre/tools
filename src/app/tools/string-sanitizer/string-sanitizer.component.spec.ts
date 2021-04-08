import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringSanitizerComponent } from './string-sanitizer.component';

describe('StringSanitizerComponent', () => {
  let component: StringSanitizerComponent;
  let fixture: ComponentFixture<StringSanitizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringSanitizerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StringSanitizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
