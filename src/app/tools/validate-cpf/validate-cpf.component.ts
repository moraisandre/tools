import { Component, OnInit } from '@angular/core';
import { utilsBr } from 'js-brasil';
import { CPFService } from 'src/app/shared/services/cpf.service';

@Component({
  selector: 'app-validate-cpf',
  templateUrl: './validate-cpf.component.html',
  styleUrls: ['./validate-cpf.component.css']
})
export class ValidateCpfComponent implements OnInit {

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
