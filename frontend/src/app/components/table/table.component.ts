import { Component, Input, OnInit } from '@angular/core';
import { ColumnComponent } from './column.component';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent   {

  /**
   * Parametro de entrada para asignarle un encabezado al elemento tabla.
   */
  @Input() description = '';

  /**
   * Parametro de entrada para asignarle un id al elemento th.
   */
  @Input() id = 'default-toggle' + '-' + 25;

  /**
   * Arreglo inicial que permite la interracion con la tabla
   * y su respectivo despliegue en el HTML.
   */
  @Input() public items: any[] | undefined;

  /**
   * Variable que define el numero de datos a mostrar en la tabla.
   */
  @Input() public pageSize;

  /**
   * Variable que define el numero de pagina en la tabla.
   */
  @Input() public currentPage;

  /**
   * Variable inicializada ColumnComponent que da los valores de las columnas
   * y las ordena en la tabla.
   */
  public columns: ColumnComponent[] = [];

  /**
   * Funcion que agrega las columnas a las tablas
   */
  public addColumn(column: ColumnComponent) {
    this.columns.push(column);
  }

  /**
   * Funcion que recorre las columnas y ordena la respuesta
   * junto con las filas.
   */
  public getData(col: any, row: any) {
    let item = row;
    col.forEach((index: string | number) => {
      if (item[index] !== undefined && item[index] !== null) {
        item = item[index];
      } else {
        item = '';
      }
    });
    return item;
  }
}
