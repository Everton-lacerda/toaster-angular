import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast/toast.component';
import { ToasterComponent } from './toaster.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ToastComponent,
    ToasterComponent
  ],
  exports: [ToastComponent, ToasterComponent],
})
export class ToastModule {}
