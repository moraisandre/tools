import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CPFService {

  constructor() { }

  generateCPF(): string {
    var cpfTemp: number[] = [];

    var validacaoPrimeiroDigito = 10;
    var validacaoSegundoDigito = 11;
    var somaValidacaoPrimeiro = 0;
    var somaValidacaoSegundo = 0;

    for (let i = 0; i < 9; i++) {
      cpfTemp[i] = Math.floor(Math.random() * 10);
      
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

    return cpf;

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
}
