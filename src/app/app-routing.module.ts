import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CpfComponent } from './tools/cpf/cpf.component';
import { ValidateCpfComponent } from './tools/validate-cpf/validate-cpf.component';
import { StringSanitizerComponent } from './tools/string-sanitizer/string-sanitizer.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'generate-cpf', component: CpfComponent },
  { path: 'validate-cpf', component: ValidateCpfComponent },
  { path: 'string-sanitizer', component: StringSanitizerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
