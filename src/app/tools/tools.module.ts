import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpfComponent } from './cpf/cpf.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CpfComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ToolsModule { }
