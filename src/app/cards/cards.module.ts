import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpfGeneratorComponent } from './cpf-generator/cpf-generator.component';
import { SharedModule } from '../shared/shared.module';
import { CpfValidadorComponent } from './cpf-validator/cpf-validator.component';

@NgModule({
  declarations: [CpfGeneratorComponent, CpfValidadorComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    CpfGeneratorComponent,
    CpfValidadorComponent 
  ]
})
export class CardsModule { }
