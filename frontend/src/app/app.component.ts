import { Component } from '@angular/core';
import { HeaderComponent } from './view/shared/header/header.component';
import { ModalService } from './services/modal-services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {


  constructor( public modalService: ModalService){

  }


  modal(){
    debugger
    this.modalService.open('testmodal');
  }



}
