import { TestBed } from '@angular/core/testing';
import { ProductService } from './product.service';
import { HttpClient } from '@angular/common/http';
import { UtilService } from '../util-services/util.service';
import { of } from 'rxjs';

describe('ProductService', () => {
  let service: ProductService;
  let utilService: jasmine.SpyObj<UtilService>;




  beforeEach(() => {
    const spy = jasmine.createSpyObj('UtilService', ['buildRequest']);
    TestBed.configureTestingModule({
      providers: [
        ProductService,
        { provide: UtilService, 
          useValue: spy 
        }
      ]
    });
    service = TestBed.inject(ProductService);
    utilService = TestBed.inject(UtilService) as jasmine.SpyObj<UtilService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call metoth buildRequest', () => {
    const responseProducts = {
      data: [
          {
              id: "uno",
              name: "Tarjeta de credito",
              description: "Membresia VISA",
              logo: "assets-1.png",
              date_release: "2025-01-01",
              date_revision: "2025-01-01"
          },
          {
              id: "dos",
              name: "Cuenta nomina",
              description: "Cuenta nomina",
              logo: "assets-1.png",
              date_release: "2025-02-11",
              date_revision: "2026-02-11"
          },
          {
              id: "tres",
              name: "CDT plazo",
              description: "CDT plazo fijo",
              logo: "assets-1.png",
              date_release: "2025-02-11",
              date_revision: "2026-02-11"
          },
          {
              id: "cuatro",
              name: "CDT variable",
              description: "CDT plazo no definido",
              logo: "assets-1.png",
              date_release: "2025-02-11",
              date_revision: "2026-02-11"
          },
          {
              id: "cinco",
              name: "Inverision momeda",
              description: "Inversion moneda extrangera",
              logo: "assets-1.png",
              date_release: "2025-02-11",
              date_revision: "2026-02-11"
          }
      ]
  }
    const urlServices = 'http://localhost:3002/bp/products';
    utilService.buildRequest.and.returnValue(of(responseProducts));
    service.getAllProducts().subscribe(response => {
      expect(response).toEqual(responseProducts);
    });
    expect(utilService.buildRequest).toHaveBeenCalledWith(urlServices, 'get');
  });

});
