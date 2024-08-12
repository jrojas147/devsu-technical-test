import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComponent } from './products.component';
import { ProductService } from 'src/app/services/product-services/product.service';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/components/toast/toast.service';
import { AccountsListModel, AccountsModel } from 'src/app/models/accounts.model';
import { of } from 'rxjs';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let productService: jasmine.SpyObj<ProductService>;
  let router: jasmine.SpyObj<Router>;
  let toastService: jasmine.SpyObj<ToastService>;
  let mockIncidencesService: jasmine.SpyObj<ProductService>

  beforeEach(async () => {
    const bankServiceSpy = jasmine.createSpyObj('BankService', [
      'getAccounts',
      'deleteAccounts',
    ]);
    const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
    const toastServiceSpy = jasmine.createSpyObj('ToastService', ['show']);

    await TestBed.configureTestingModule({
      declarations: [ProductsComponent],
      providers: [
        { provide: productService, useValue: bankServiceSpy },
        { provide: Router, useValue: routerSpy },
        { provide: ToastService, useValue: toastServiceSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    productService = TestBed.inject(ProductService) as jasmine.SpyObj<ProductService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    toastService = TestBed.inject(ToastService) as jasmine.SpyObj<ToastService>;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load list on ngOnInit', () => {
    const mockAccounts: AccountsListModel = {
      data: [
        {
          id: '1',
          name: 'Test',
          logo: '1',
          description: 'Test description',
          date_release: new Date('2024-08-01'),
          date_revision: new Date('2024-08-01'),
        },
      ],
    };
    productService.getAccounts.and.returnValue(of(mockAccounts));

    component.ngOnInit();

    expect(productService.getAccounts).toHaveBeenCalled();
    expect(component.listAccounts).toEqual(mockAccounts.data);
  });

  it('should handle emitTable actions', () => {
    const mockAccount: AccountsModel = {
      id: '1',
          name: 'Test',
          logo: '1',
          description: 'Test description',
          date_release: new Date('2024-08-01'),
          date_revision: new Date('2024-08-01'),
    };

    component.emitTable({ action: 'add' });
    expect(router.navigateByUrl).toHaveBeenCalledWith('/registry');

    component.emitTable({ action: 'edit', data: mockAccount });
    expect(router.navigateByUrl).toHaveBeenCalledWith('/registry/1');

    const mockResponse: AccountsListModel = { data: [] };
    productService.deleteAccounts.and.returnValue(of(mockResponse));
    component.emitTable({ action: 'delete', data: mockAccount });
    expect(productService.deleteAccounts).toHaveBeenCalledWith(mockAccount);
    expect(toastService.show).toHaveBeenCalledWith('Exitoso', '');
    expect(productService.getAccounts).toHaveBeenCalled();
  });
});
