import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ColumnsTable } from './table.model';
import { AccountsModel } from 'src/app/models/accounts.model';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnChanges   {

  @Output() emmitAction: EventEmitter<any> = new EventEmitter<any>();
  @Input() columns: ColumnsTable[];
  @Input() dataRow: AccountsModel[] = [];
  public filterCharacters: string;

  public filteredProductos: any[] = [];
  public paginatedProductos: any[] = [];
  public itemsPerPageOptions: number[] = [5, 10, 20];

  public selectedItem?: any;

  public itemsPerPage = 5;
  public currentPage = 1;
  public totalPages = 1;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dataRow'] && changes['dataRow'].currentValue) {
      this.filteredProductos = this.dataRow;
      this.calculateTotalPages();
    }
  }

  public calculateTotalPages() {
    this.totalPages = Math.ceil(this.dataRow.length / this.itemsPerPage);
  }

  applyFilter() {
    if (this.filterCharacters) {
      this.filteredProductos = this.dataRow.filter((item) =>
        Object.values(item).some((value) =>
          value
            .toString()
            .toLowerCase()
            .includes(this.filterCharacters.toLowerCase())
        )
      );
    } else {
      this.filteredProductos = this.dataRow;
    }
    this.currentPage = 1; // Reset to first page after filter
    this.calculateTotalPages();
  }

  get paginatedItems() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.filteredProductos.slice(start, end);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  onItemsPerPageChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.itemsPerPage = +select.value;
    this.currentPage = 1; // Reset to first page
    this.calculateTotalPages();
  }

  showTooltip(item: any) {
    this.selectedItem = item;
  }

  closeTooltip() {
    this.selectedItem = undefined;
  }

  public actionBtn(action: string, data?: AccountsModel) {
    this.emmitAction.emit({
      action: action,
      data: data,
    });
  }

}
