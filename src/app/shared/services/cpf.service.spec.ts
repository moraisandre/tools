import { TestBed } from '@angular/core/testing';
import { StateCPF } from '../models/state-cpf.model';
import { CPFService } from './cpf.service';

describe('CpfService', () => {
  let service: CPFService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CPFService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('generateCPF expect to not throw when state is Any',() => {
    expect(() => {
      service.generateCPF(new StateCPF(-1, 'Any'));
    }).not.toThrow();
  });

  it('generateCPF expect to not throw when state is undefined',() => {
    expect(() => {
      service.generateCPF(undefined);
    }).not.toThrow();
  });

  it('generateCPF expect 9th number of CPF to be the same from the state',() => {

    expect(service.generateCPF(new StateCPF(2, 'Acre'), false)[8]).toEqual('2');

    expect(service.generateCPF(new StateCPF(4, 'Alagoas'), false)[8]).toEqual('4');

    expect(service.generateCPF(new StateCPF(2, 'Amapá'), false)[8]).toEqual('2');

    expect(service.generateCPF(new StateCPF(2, 'Amazonas'), false)[8]).toEqual('2');

    expect(service.generateCPF(new StateCPF(5, 'Bahia'), false)[8]).toEqual('5');

    expect(service.generateCPF(new StateCPF(3, 'Ceará'), false)[8]).toEqual('3');

    expect(service.generateCPF(new StateCPF(1, 'Distrito Federal'), false)[8]).toEqual('1');

    expect(service.generateCPF(new StateCPF(7, 'Espírito Santo'), false)[8]).toEqual('7');

    expect(service.generateCPF(new StateCPF(1, 'Goiás'), false)[8]).toEqual('1');

    expect(service.generateCPF(new StateCPF(3, 'Maranhão'), false)[8]).toEqual('3');

    expect(service.generateCPF(new StateCPF(1, 'Mato Grosso'), false)[8]).toEqual('1');

    expect(service.generateCPF(new StateCPF(1, 'Mato Grosso do Sul'), false)[8]).toEqual('1');

    expect(service.generateCPF(new StateCPF(6, 'Minas Gerais'), false)[8]).toEqual('6');

    expect(service.generateCPF(new StateCPF(2, 'Pará'), false)[8]).toEqual('2');

    expect(service.generateCPF(new StateCPF(4, 'Paraíba'), false)[8]).toEqual('4');

    expect(service.generateCPF(new StateCPF(9, 'Paraná'), false)[8]).toEqual('9');

    expect(service.generateCPF(new StateCPF(4, 'Pernambuco'), false)[8]).toEqual('4');

    expect(service.generateCPF(new StateCPF(3, 'Piauí'), false)[8]).toEqual('3');

    expect(service.generateCPF(new StateCPF(7, 'Rio de Janeiro'), false)[8]).toEqual('7');

    expect(service.generateCPF(new StateCPF(4, 'Rio Grande do Norte'), false)[8]).toEqual('4');

    expect(service.generateCPF(new StateCPF(0, 'Rio Grande do Sul'), false)[8]).toEqual('0');

    expect(service.generateCPF(new StateCPF(2, 'Rondônia'), false)[8]).toEqual('2');

    expect(service.generateCPF(new StateCPF(2, 'Roraima'), false)[8]).toEqual('2');

    expect(service.generateCPF(new StateCPF(9, 'Santa Catarina'), false)[8]).toEqual('9');

    expect(service.generateCPF(new StateCPF(8, 'São Paulo'), false)[8]).toEqual('8');

    expect(service.generateCPF(new StateCPF(5, 'Sergipe'), false)[8]).toEqual('5');

    expect(service.generateCPF(new StateCPF(1, 'Tocantins'), false)[8]).toEqual('1');
  });

  it('generateCPF expect 9th number of a masked CPF to be the same from the state',() => {

    expect(service.generateCPF(new StateCPF(2, 'Acre'))[10]).toEqual('2');

    expect(service.generateCPF(new StateCPF(4, 'Alagoas'))[10]).toEqual('4');

    expect(service.generateCPF(new StateCPF(2, 'Amapá'))[10]).toEqual('2');

    expect(service.generateCPF(new StateCPF(2, 'Amazonas'))[10]).toEqual('2');

    expect(service.generateCPF(new StateCPF(5, 'Bahia'))[10]).toEqual('5');

    expect(service.generateCPF(new StateCPF(3, 'Ceará'))[10]).toEqual('3');

    expect(service.generateCPF(new StateCPF(1, 'Distrito Federal'))[10]).toEqual('1');

    expect(service.generateCPF(new StateCPF(7, 'Espírito Santo'))[10]).toEqual('7');

    expect(service.generateCPF(new StateCPF(1, 'Goiás'))[10]).toEqual('1');

    expect(service.generateCPF(new StateCPF(3, 'Maranhão'))[10]).toEqual('3');

    expect(service.generateCPF(new StateCPF(1, 'Mato Grosso'))[10]).toEqual('1');

    expect(service.generateCPF(new StateCPF(1, 'Mato Grosso do Sul'))[10]).toEqual('1');

    expect(service.generateCPF(new StateCPF(6, 'Minas Gerais'))[10]).toEqual('6');

    expect(service.generateCPF(new StateCPF(2, 'Pará'))[10]).toEqual('2');

    expect(service.generateCPF(new StateCPF(4, 'Paraíba'))[10]).toEqual('4');

    expect(service.generateCPF(new StateCPF(9, 'Paraná'))[10]).toEqual('9');

    expect(service.generateCPF(new StateCPF(4, 'Pernambuco'))[10]).toEqual('4');

    expect(service.generateCPF(new StateCPF(3, 'Piauí'))[10]).toEqual('3');

    expect(service.generateCPF(new StateCPF(7, 'Rio de Janeiro'))[10]).toEqual('7');

    expect(service.generateCPF(new StateCPF(4, 'Rio Grande do Norte'))[10]).toEqual('4');

    expect(service.generateCPF(new StateCPF(0, 'Rio Grande do Sul'))[10]).toEqual('0');

    expect(service.generateCPF(new StateCPF(2, 'Rondônia'))[10]).toEqual('2');

    expect(service.generateCPF(new StateCPF(2, 'Roraima'))[10]).toEqual('2');

    expect(service.generateCPF(new StateCPF(9, 'Santa Catarina'))[10]).toEqual('9');

    expect(service.generateCPF(new StateCPF(8, 'São Paulo'))[10]).toEqual('8');

    expect(service.generateCPF(new StateCPF(5, 'Sergipe'))[10]).toEqual('5');

    expect(service.generateCPF(new StateCPF(1, 'Tocantins'))[10]).toEqual('1');
  });

  it('validateCPF expect to not throw',() => {
    expect(() => {
      service.validateCPF('00000000000');
    }).not.toThrow();
  });

  it('validateCPF expect a cpf to be false',() => {
    expect(service.validateCPF('12345678900')).toBe(false);
  });

  it('validateCPF expect a cpf to be true',() => {
    expect(service.validateCPF('00000000000')).toBe(true);
  });

  it('validateCPF expect a masked cpf to be false',() => {
    expect(service.validateCPF('123.456.789-00')).toBe(false);
    expect(service.validateCPF('834.845.367-90')).toBe(false);
  });

  it('validateCPF expect a masked cpf to be true',() => {
    expect(service.validateCPF('000.000.000-00')).toBe(true);
    expect(service.validateCPF('106.218.045-33')).toBe(true);
  });

  it('addMaskToCPF expect to not throw',() => {
    expect(() => {
      service.addMaskToCPF('00011122233');
    }).not.toThrow();
  });

  it('addMaskToCPF expect to add a mask',() => {
    expect(service.addMaskToCPF('00011122233')).toEqual('000.111.222-33');
  });

  it('addMaskToCPF with a CPF with less than 11 characters expect to add a mask',() => {
    expect(service.addMaskToCPF('22233')).toEqual('000.000.222-33');
  });

});
