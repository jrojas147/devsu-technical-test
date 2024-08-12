import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColumnsTable } from 'src/app/components/table/table.model';
import { ToastService } from 'src/app/components/toast/toast.service';
import { AccountsListModel, AccountsModel } from 'src/app/models/accounts.model';
import { ProductService } from 'src/app/services/product-services/product.service';

/**
 * componente Products
 * 
 * Permite visualizar y realizar las actividades de crud para productos financieros, 
 * contiene llamado a componentes nativos creados segun el diseño planteado
 * @author Joan Andres Rojas Ramirez
 */
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

  /**
   * Metodo ciclo de vida de componente realiza la peticion a metodo que consulta dotos los produtos asociados
   */
  public ngOnInit(): void {
    this.loadList();
  }

  /**
   * Metodo que permite consultar todos los productos bancarios asociados, 
   * asigna a variable global listAccounts lista productos
   */
  public loadList(): void {
    this.productService.getAccounts().subscribe((response: AccountsListModel) => {
      this.listAccounts = response.data;
    });
  }

  /**
   * permite redireccionar a url que contiene formulario para adicionar producto
   */
  public addRegistry(): void {
    this.router.navigateByUrl('/registerProduct');
  }

  /**
   * Metodo que recibe data desde componente tabla via output el cual permite realiar la accion deseada
   * @param event parametros que contienen tipo de acciona realiar y data seleccionada desde la tabla
   * 
   * @example
   *  * formato de datos enviados desde componente hijo table
   * {
   *   action: 'delete',
   *   data: this.dataSelected,
   * }
   */
  public emitTable(event: any) {
    if (event.action === 'add') {
      debugger
      this.router.navigateByUrl('/registerProduct');
    }

    if (event.action === 'edit') {
      this.router.navigateByUrl('/registerProduct/' + event.data.id);
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
