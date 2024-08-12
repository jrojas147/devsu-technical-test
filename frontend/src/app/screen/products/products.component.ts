import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColumnsTable } from 'src/app/components/table/table.model';
import { ToastService } from 'src/app/components/toast/toast.service';
import { AccountsListModel, AccountsModel } from 'src/app/models/accounts.model';
import { ProductService } from 'src/app/services/product-services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public listAccounts: AccountsModel[] = [];
  public filterCharacters: string;
  public columns: ColumnsTable[] = [
    {
      label: 'logo',
      title: 'Logo',
    },
    {
      label: 'name',
      title: 'Nombre del producto',
    },
    {
      label: 'description',
      title: 'Descripción',
    },
    {
      label: 'date_release',
      title: 'Fecha de liberación',
    },
    {
      label: 'date_revision',
      title: 'Fecha de reestrucutación',
    },
  ];

  constructor(
    private productService: ProductService,
    private router: Router,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    console.log('Entra');
    this.loadList();
  }

  loadList() {
    this.productService.getAccounts().subscribe((response: AccountsListModel) => {
      this.listAccounts = response.data;
    });
  }

  public addRegistry() {
    this.router.navigateByUrl('/registry');
  }

  public emitTable(event: any) {
    if (event.action === 'add') {
      this.router.navigateByUrl('/registry');
    }

    if (event.action === 'edit') {
      this.router.navigateByUrl('/registry/' + event.data.id);
    }

    if (event.action === 'delete') {
      this.productService
        .deleteAccounts(event.data)
        .subscribe((response: AccountsListModel) => {
          this.toastService.show('Exitoso', response.message || '');

          this.loadList();
        });
    }
  }
}
