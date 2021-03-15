import { Component, OnInit } from '@angular/core';
import { MASKS, NgBrazilValidators } from 'ng-brazil';
import { utilsBr, fakerBr } from 'js-brasil';
import { CPFService } from 'src/app/shared/services/cpf.service';

@Component({
  selector: 'app-cpf-validator',
  templateUrl: './cpf-validator.component.html',
  styleUrls: ['./cpf-validator.component.css']
})
export class CpfValidadorComponent implements OnInit {
  public MASKS = utilsBr.MASKS;
  public cpfText = '';
  public cpfValid = false;
  public enableMessage = false;


  constructor(private cpfService: CPFService) { }

  ngOnInit(): void {
  }

  validateCPF(){
    if (!this.cpfText) {
      this.enableMessage = false;
      return;  
    }
    this.enableMessage = true;
    this.cpfValid = this.cpfService.validateCPF(this.cpfText);
  }

  reset() {
    this.cpfText = '';
    this.cpfValid = false;
    this.enableMessage = false;
  }

}
