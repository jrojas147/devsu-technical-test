import { Injectable } from '@angular/core';
import { UtilService } from '../util-services/util.service';
import { buildRoute, ServicesRoutes } from 'src/app/utils/services-routes';
import { AccountsModel } from 'src/app/models/accounts.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private utilService: UtilService){

  }

  public getAccounts(): any {
    return this.utilService.buildRequest(ServicesRoutes.getAccounts, 'get');
  }

  public getAccountsById(idAccount: string): any {
    return this.utilService.buildRequest(buildRoute(ServicesRoutes.getAccountsById, {idAccount: idAccount}), 'get');
  }

  public postAccounts(data: AccountsModel): any {
    return this.utilService.buildRequest(ServicesRoutes.postAccounts, 'post', data);
  }

  public putAccounts(data: AccountsModel): any {
    return this.utilService.buildRequest(buildRoute(ServicesRoutes.putAccounts, {idAccount: data.id}), 'put', data);
  }

  public deleteAccounts(data: AccountsModel): any {
    return this.utilService.buildRequest(buildRoute(ServicesRoutes.deleteAccounts, {idAccount: data.id}), 'delete');
  }

  public verifyAccount(idAccount: string): any {
    return this.utilService.buildRequest(buildRoute(ServicesRoutes.verificationAccounts, {idAccount: idAccount}), 'get');
  }

}
