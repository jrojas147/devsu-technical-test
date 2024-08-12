import { Component, ElementRef, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalService } from 'src/app/services/modal-services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit {


  /* Id del modal que quiera abrir */
  @Input() id: string;
  /* Elemento del HTML */
  private element: any;

  constructor(
    private modalService: ModalService, 
    private elementRef: ElementRef) {
    this.element = elementRef.nativeElement;
  }

  ngOnInit(): void {
    if (!this.id) {
      return;
    }
    document.body.appendChild(this.element);
    this.modalService.add(this);
  }

  /* Remover el modal cuando el servicio es destruido */
  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }

  /* Abrir el modal */
  open(): void {
    this.element.style.display = 'block';
  }

  /* Cerrar el modal */
  close(): void {
    this.element.style.display = 'none';
  }


}
