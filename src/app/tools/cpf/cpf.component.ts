import { Component, OnInit } from '@angular/core';
import { StateCPF } from 'src/app/shared/models/state-cpf.model';
import { CPFService } from 'src/app/shared/services/cpf.service';
import * as copy from 'copy-to-clipboard';
import { ToastService } from 'src/app/shared/services/toast/toast.service';

@Component({
  selector: 'app-cpf',
  templateUrl: './cpf.component.html',
  styleUrls: ['./cpf.component.css'],
})
export class CpfComponent implements OnInit {
  cpf = '';
  cpfWithoutMask = '';
  states = this.cpfService.states;

  selectedState = this.states[0];
  selectedStateWithoutMask = this.states[0];

  constructor(private cpfService: CPFService, public toastService: ToastService) {}

  ngOnInit(): void {
    this.generateCPFWithoutMask();
    this.cpf = this.cpfService.addMaskToCPF(this.cpfWithoutMask);
  }

  generateCPF() {
    this.cpf = this.cpfService.generateCPF(this.selectedState);
  }

  generateCPFWithoutMask() {
    this.cpfWithoutMask = this.cpfService.generateCPF(this.selectedStateWithoutMask, false);
  }

  copyCPF(masked: boolean = true) {
    var document = masked ? this.cpf : this.cpfWithoutMask;

    var text = `Copied '${document}' to the clipboard!`;

    this.toastService.show(text);

    copy(document);
  }
}
