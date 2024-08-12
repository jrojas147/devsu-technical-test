import { environment } from "src/environments/environment";
import { HttpHeaders } from '@angular/common/http';

const httpOptions = { headers: new HttpHeaders() };

httpOptions.headers
  = httpOptions.headers
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json; text/plain');

const Config = {
  api: {
  baseUrl: environment.host,
  options: httpOptions,
  }
};

export { Config };