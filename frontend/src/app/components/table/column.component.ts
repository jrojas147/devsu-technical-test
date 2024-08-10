import { Component, TemplateRef, ContentChild, Input } from '@angular/core';
import { TableComponent } from './table.component';

@Component({
    selector: 'app-column',
    template: '',

})
export class ColumnComponent {

    /**
     * Valiable tipo string que obtiene el valor de la columna.
     */
    @Input() value: string | undefined;

    /**
     * Valiable tipo string que obtiene al cabecera de la columna.
     */
    @Input() header: string | undefined;

    /**
     * Valiable tipo TemplateRef que obtiene un template en caso de
     * que el usuario quiera insertar dentro de la cabecera de la tabla un componente especifico.
     */
    @ContentChild('tableHeaderTemplate') headerTemplate: TemplateRef<any> | undefined;

    /**
     * Valiable tipo TemplateRef que obtiene un template en caso de
     * que el usuario quiera insertar dentro de cada columna de la tabla un componente especifico.
     */
    @ContentChild('tableBodyTemplate') bodyTemplate: TemplateRef<any> | undefined;

    /**
     * Inicializa los servicios utilizados por el componente menu.
     * @param table   Funcion que agrega las columnas en la tabla.
     */
    constructor(public table: TableComponent) {
        table.addColumn(this);
    }

}
