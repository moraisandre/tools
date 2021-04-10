import { TestBed } from '@angular/core/testing';

import { ToastService } from './toast.service';

describe('ToastService', () => {
  let service: ToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('show should not to throw', () => {
    expect(() => {
      service.show('');
    }).not.toThrow();
  });

  it('show should add a new item on toasts array', () => {

    service.toasts = [];
    service.show(`Copied '000.000.000-00' to the clipboard!`);

    expect(service.toasts.length).toEqual(1);
  });

  it('remove should not to throw', () => {
    expect(() => {
      service.remove('');
    }).not.toThrow();
  });

  it('remove should remove the item on toasts array', () => {
    const text = `Copied '000.000.000-00' to the clipboard!`
    service.toasts = [];
    service.show(text);

    service.remove(service.toasts[0]);

    expect(service.toasts.length).toEqual(0);
  });
});
