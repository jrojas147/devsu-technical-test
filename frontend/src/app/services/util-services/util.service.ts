import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Config } from 'src/app/utils/intex';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

/**
 * servicio que permite centralizar todas las peticiones de la aplciacion
 * @autor Joan Rojas
 */
export class UtilService {
  constructor(private http: HttpClient) { }

  /**
   * metodo que permite centralizar las peticiones htttp recibiendo como parametro
   * url que consume, tipo de peticion y data a enviar
   * @param endpoint url de peticion
   * @param method tipo de peticion
   * @param data body
   * @returns respuesta de servicio
   * @author Joan Andres Rojas Ramirez
   */
  public buildRequest(endpoint: any, method: string, data?: any) {
    const headers = Config.api.options;

    if (endpoint.needsAuth) {
      headers.headers = headers.headers.set(
        'Authorization',
        'Bearer ' + sessionStorage.getItem('token')
      );
    } else {
      headers.headers = headers.headers.delete('Authorization');
    }

    switch (method) {
      case 'delete':
        if (data) {
          const customHeader = {
            body: data,
            headers: headers.headers,
          };

          return this.http.request('delete', endpoint.url, customHeader);
        }

        return this.http.delete<any>(endpoint.url, headers);
      case 'get':
        const options = {
          headers: headers.headers,
          params: data || null,
        };

        return this.http.get<any>(endpoint.url, options);
      case 'post':
        return this.http.post<any>(endpoint.url, data, headers);
      case 'put':
        return this.http.put<any>(endpoint.url, data, headers);
      default:
        return null;
    }
  }

}
