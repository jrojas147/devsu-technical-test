import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountsListModel, AccountsModel } from 'src/app/models/accounts.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product-services/product.service';
import { ToastService } from 'src/app/components/toast/toast.service';

/**
 * Register Product
 * 
 */
@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.scss']
})
export class RegisterProductComponent implements OnInit {

  public idAccount: string | null;
  public listAccounts: AccountsModel[] = [];
  public account?: AccountsModel;
  public formAccounts: FormGroup = new FormGroup({});
  public existAccount: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private fb: FormBuilder,
    private router: Router,
    private toastService: ToastService
  ) {
    this.idAccount = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.formAccounts = this.fb.group(this.createControls());
    this.formAccounts.controls['id'].valueChanges.subscribe(
      (selectedValue: string) => {
        this.checkIdAccount(selectedValue);
      }
    );
    if (this.idAccount) {
      this.productService
        .getAccountsById(this.idAccount)
        ?.subscribe((response: any) => {
          this.account = response;
          this.setControlValues(this.account);
        });
    }
  }

  /**
   * Permite la creacion de controles de formularo definiendo validaicones teniedas en cuenta por el Dto ofrecido para simular el servicio
   * @returns Formulario 
   */
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
    groupControl['description'] = [null, [Validators.minLength(6), Validators.required]];
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

  /**
   * Permite cargar valores de formulario
   * @param account datos a cargar
   */
  setControlValues(account: any) {
    Object.keys(this.formAccounts?.controls).forEach((key) => {
      this.formAccounts?.controls[key].setValue(account[key]);
    });
  }

  /**
   * Permite realizar validacion si existe producto mediante el metodo verification
   * y asi definir si habilita o deshabilita visualmente asi como mostrar mensaje de error
   * para evitar ingresar id duplicados
   * @param idAccount id de producto a consultar
   */
  public checkIdAccount(idAccount: string) {
    this.productService.verifyAccount(idAccount).subscribe((response: boolean) => {
      this.existAccount = response;
    });
  }

  /**
   * Permite guardar la informacion de producto, desde la carga de componente se identifica tenemos un param id
   * de ser asi se considera como una edicion, de caso contrario seria adicionar nuevo producto
   * para cada caso de tiene un itervalo de tiempo para visualizar confirmacion de consumo de servicio
   */
  public saveRegistry(): void {
    const dataForm = this.formAccounts.getRawValue();
    if (this.idAccount) {
      this.productService.putAccounts(dataForm)?.subscribe((response: AccountsListModel) => {
        this.listAccounts = response.data;
        this.toastService.show('Actualizado', response.message || '');
        setTimeout(() => {
          this.backUrl();
        }, 1000);

      });
    } else {
      this.productService.postAccounts(dataForm)?.subscribe((response: AccountsListModel) => {
        this.listAccounts = response.data;
        this.toastService.show('Exitoso', response.message || '');
        setTimeout(() => {
          this.backUrl();
        }, 1000);
      });
    }
  }

  /**
   * Permite retornar url prinicipal, pantalla de productos activos
   */
  public backUrl(): void {
    this.router.navigateByUrl('/');
  }
}
