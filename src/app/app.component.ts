import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalService } from './components/modal/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  textSearch = '';

  isLogin: boolean = false;

  constructor(protected modalService: ModalService) {}

  onSubmit = (forms: NgForm) => {
    console.log(forms.controls['textSearch'].value);
  };
}
