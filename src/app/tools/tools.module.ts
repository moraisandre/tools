import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpfComponent } from './cpf/cpf.component';
import { SharedModule } from '../shared/shared.module';
import { StringSanitizerComponent } from './string-sanitizer/string-sanitizer.component';
import { ValidateCpfComponent } from './validate-cpf/validate-cpf.component';

@NgModule({
  declarations: [CpfComponent, StringSanitizerComponent, ValidateCpfComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ToolsModule { }
