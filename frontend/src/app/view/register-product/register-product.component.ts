import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/services/modal-services/modal.service';
import { AccountsListModel, AccountsModel } from 'src/app/models/accounts.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product-services/product.service';

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.scss']
})
export class RegisterProductComponent  {

  public idAccount: string | null;
  public listAccounts: AccountsListModel[] = [];
  public account?: AccountsModel;
  public formAccounts: FormGroup = new FormGroup({});
  public existAccount: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.idAccount = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    console.log('Entra');
    this.formAccounts = this.fb.group(this.createControls());

    this.formAccounts.controls['id'].valueChanges.subscribe(
      (selectedValue: string) => {
        console.log(selectedValue);
        this.checkIdAccount(selectedValue);
      }
    );

    if (this.idAccount) {
      this.productService
        .getAccountsById(this.idAccount)
        .subscribe((response: any) => {
          this.account = response;

          this.setControlValues(this.account);
        });
    }

    console.log(this.formAccounts);
  }

  public createControls() {
    const groupControl: any = {};

    groupControl['id'] = [
      {
        value: null,
        disabled: this.idAccount,
      },
      Validators.required,
    ];
    groupControl['name'] = [null, Validators.required];
    groupControl['description'] = [null, Validators.required];
    groupControl['logo'] = [null];
    groupControl['date_release'] = [null, Validators.required];
    groupControl['date_revision'] = [
      {
        value: moment().format('YYYY-MM-DD'),
        disabled: true,
      },
      Validators.required,
    ];

    return groupControl;
  }

  setControlValues(account: any) {
    Object.keys(this.formAccounts?.controls).forEach((key) => {
      this.formAccounts?.controls[key].setValue(account[key]);
    });
  }

  checkIdAccount(idAccount: string) {
    this.productService.verifyAccount(idAccount).subscribe((response: boolean) => {
      debugger;
      this.existAccount = response;
    });
  }

  saveRegistry() {
    debugger;
    const dataForm = this.formAccounts.getRawValue();

    if (this.idAccount) {
      this.productService.putAccounts(dataForm).subscribe((response: any) => {
        this.listAccounts = response;
      });
    } else {
      this.productService.postAccounts(dataForm).subscribe((response: any) => {
        this.listAccounts = response;
      });
    }
  }

  backUrl() {
    this.router.navigateByUrl('/');
  }


}
