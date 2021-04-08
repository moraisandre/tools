import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CpfComponent } from './tools/cpf/cpf.component';
import { StringSanitizerComponent } from './tools/string-sanitizer/string-sanitizer.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'cpf', component: CpfComponent },
  { path: 'string-sanitizer', component: StringSanitizerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
