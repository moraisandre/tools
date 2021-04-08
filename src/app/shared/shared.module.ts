import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextMaskModule } from 'angular2-text-mask';
import { NgBrazil } from 'ng-brazil';
import { CPFService } from './services/cpf.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ClipboardModule } from 'ngx-clipboard';
import { NgbAlertModule, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from './services/toast/toast.service';
import { ToastsContainer } from './services/toast/toasts-container.component';
@NgModule({
  declarations: [ToastsContainer],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    NgBrazil,
    ClipboardModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
  ],
  exports: [
    FormsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    NgBrazil,
    ClipboardModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    // Components
    ToastsContainer,
  ],
  providers: [
    CPFService,
    ToastService,
  ]
})
export class SharedModule { }
