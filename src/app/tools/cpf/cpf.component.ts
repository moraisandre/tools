import { Component, OnInit } from '@angular/core';
import { CPFService } from 'src/app/shared/services/cpf.service';

@Component({
  selector: 'app-cpf',
  templateUrl: './cpf.component.html',
  styleUrls: ['./cpf.component.css']
})
export class CpfComponent implements OnInit {

  cpf = '';

  constructor(private cpfService: CPFService) { }

  ngOnInit(): void {
    this.generateCPF();
  }

  generateCPF(){
    this.cpf = this.cpfService.generateCPF();
  }

  

}
