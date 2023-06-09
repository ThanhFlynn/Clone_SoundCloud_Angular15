import { NgModule } from '@angular/core';
import { ModalComponent } from './modal.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ModalComponent,
      },
    ]),
  ],
  exports: [ModalComponent],
})
export class ModalModule {}
