import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CpfComponent } from './tools/cpf/cpf.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'cpf', component: CpfComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
