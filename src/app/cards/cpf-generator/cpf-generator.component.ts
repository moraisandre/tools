import { Component, OnInit } from '@angular/core';
import { CPFService } from 'src/app/shared/services/cpf.service';

@Component({
  selector: 'app-cpf-generator',
  templateUrl: './cpf-generator.component.html',
  styleUrls: ['./cpf-generator.component.css']
})
export class CpfGeneratorComponent implements OnInit {

  cpf = '';
  cpfMasked = '';

  constructor(private cpfService: CPFService) { }

  ngOnInit(): void {
    this.cpf = this.cpfService.generateCPF();
    this.cpfMasked = this.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }

  generateCPF(){
    this.cpf = this.cpfService.generateCPF();
    this.cpfMasked = this.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }

}
