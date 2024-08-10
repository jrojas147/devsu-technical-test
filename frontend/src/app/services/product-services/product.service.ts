import { Injectable } from '@angular/core';
import * as URL from '../../utils/url.config';
import { UtilService } from '../util-services/util.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private utilService: UtilService) { }

  /**
   * metodo que consulta todos los productos almacenados
   */
  public getAllProducts(): any{
    const rute = URL.GET_PRODUCTS;
    return  this.utilService.buildRequest(rute, 'get')
  }

}
