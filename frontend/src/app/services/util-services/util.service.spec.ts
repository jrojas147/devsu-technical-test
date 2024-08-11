import { TestBed } from '@angular/core/testing';
import { UtilService } from './util.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('UtilService', () => {
  let service: UtilService;
  let http: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        HttpClient,
        HttpHandler,
        UtilService
      ]
    });
    service = TestBed.inject(UtilService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  beforeEach(() => {
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should services method get product', () => {
    const urlServices = 'http://localhost:3000/products';
    const responseGetProducts = {
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
    service.buildRequest(urlServices, 'get').subscribe(response => {
      expect(response).toEqual(responseGetProducts);
    });
    const req = httpMock.expectOne({
      method: 'get',
      url: urlServices
    });
    expect(req.request.headers.has('Access-Control-Allow-Origin')).toBeTrue();
    req.flush(responseGetProducts);
  });

});