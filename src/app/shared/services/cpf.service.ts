import { Injectable } from '@angular/core';
import { StateCPF } from '../models/state-cpf.model';

@Injectable({
  providedIn: 'root'
})
export class CPFService {

  states: StateCPF[] = [
    new StateCPF(-1, 'Any'),
    new StateCPF(2, 'Acre'),
    new StateCPF(4, 'Alagoas'),
    new StateCPF(2, 'Amapá'),
    new StateCPF(2, 'Amazonas'),
    new StateCPF(5, 'Bahia'),
    new StateCPF(3, 'Ceará'),
    new StateCPF(1, 'Distrito Federal'),
    new StateCPF(7, 'Espírito Santo'),
    new StateCPF(1, 'Goiás'),
    new StateCPF(3, 'Maranhão'),
    new StateCPF(1, 'Mato Grosso'),
    new StateCPF(1, 'Mato Grosso do Sul'),
    new StateCPF(6, 'Minas Gerais'),
    new StateCPF(2, 'Pará'),
    new StateCPF(4, 'Paraíba'),
    new StateCPF(9, 'Paraná'),
    new StateCPF(4, 'Pernambuco'),
    new StateCPF(3, 'Piauí'),
    new StateCPF(7, 'Rio de Janeiro'),
    new StateCPF(4, 'Rio Grande do Norte'),
    new StateCPF(0, 'Rio Grande do Sul'),
    new StateCPF(2, 'Rondônia'),
    new StateCPF(2, 'Roraima'),
    new StateCPF(9, 'Santa Catarina'),
    new StateCPF(8, 'São Paulo'),
    new StateCPF(5, 'Sergipe'),
    new StateCPF(1, 'Tocantins'),
  ];

  constructor() { }

  generateCPF(state: StateCPF, masked: boolean = true): string {
    var cpfTemp: number[] = [];

    var validacaoPrimeiroDigito = 10;
    var validacaoSegundoDigito = 11;
    var somaValidacaoPrimeiro = 0;
    var somaValidacaoSegundo = 0;

    for (let i = 0; i < 9; i++) {
      cpfTemp[i] = state.code >= 0 && i == 8 ? state.code : Math.floor(Math.random() * 10);
      
      somaValidacaoPrimeiro += validacaoPrimeiroDigito * cpfTemp[i];
      somaValidacaoSegundo += validacaoSegundoDigito * cpfTemp[i];
  
      validacaoPrimeiroDigito--;
      validacaoSegundoDigito--;
    }

    var restoPrimeiroDV = somaValidacaoPrimeiro % 11;
    
    if(restoPrimeiroDV < 2) {
      cpfTemp.push(0);
    } else {
      cpfTemp.push(11 - restoPrimeiroDV);
    }

    somaValidacaoSegundo += validacaoSegundoDigito * cpfTemp[9];
    
    var restoSegundoDV = somaValidacaoSegundo % 11;

    if(restoSegundoDV < 2) {
      cpfTemp.push(0);
    } else {
      cpfTemp.push(11 - restoSegundoDV);
    }

    let cpf = '';

    cpfTemp.forEach(e => {
      cpf += e;
    });

    return masked ? this.addMaskToCPF(cpf) : cpf;
  }

  validateCPF(cpf: string) {
    cpf = cpf.replace(/\D/g,'');
    var cpfTemp: number[] = [];

    var validacaoPrimeiroDigito = 10;
    var validacaoSegundoDigito = 11;
    var somaValidacaoPrimeiro = 0;
    var somaValidacaoSegundo = 0;

    for (let i = 0; i < 9; i++) {
      cpfTemp[i] = parseInt(cpf.charAt(i), 10);
      
      somaValidacaoPrimeiro += validacaoPrimeiroDigito * cpfTemp[i];
      somaValidacaoSegundo += validacaoSegundoDigito * cpfTemp[i];
  
      validacaoPrimeiroDigito--;
      validacaoSegundoDigito--;
    }

    var restoPrimeiroDV = somaValidacaoPrimeiro % 11;
    
    if(restoPrimeiroDV < 2) {
      cpfTemp.push(0);
    } else {
      cpfTemp.push(11 - restoPrimeiroDV);
    }

    somaValidacaoSegundo += validacaoSegundoDigito * cpfTemp[9];
    
    var restoSegundoDV = somaValidacaoSegundo % 11;

    if(restoSegundoDV < 2) {
      cpfTemp.push(0);
    } else {
      cpfTemp.push(11 - restoSegundoDV);
    }

    let cpfCorreto = '';

    cpfTemp.forEach(e => {
      cpfCorreto += e;
    });

    return cpf == cpfCorreto;
  }

  addMaskToCPF(cpf: string) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }
}
