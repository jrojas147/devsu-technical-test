import { Component, ElementRef, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalService } from 'src/app/services/modal-services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit {

  @Input() id: string;

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

  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }

  open(): void {
    this.element.style.display = 'block';
  }

  close(): void {
    this.element.style.display = 'none';
  }
}
