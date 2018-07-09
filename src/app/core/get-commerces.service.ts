import { Injectable } from '@angular/core';
import { Commerce } from '../shared/commerce';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetCommercesService {

  private url:
  // tslint:disable-next-line:max-line-length
  'https://data.ratp.fr/api/records/1.0/search/?dataset=liste-des-commerces-de-proximite-agrees-ratp&sort=code_postal&facet=tco_libelle&facet=code_postal';

  private _collectionCommercesObs: Observable<Commerce[]>;

   myObserver = {
    next: _collectionCommerces => {console.log(_collectionCommerces)
    }
    };

  constructor( private http: HttpClient) {
    this._collectionCommercesObs = this.http.get<Commerce[]>(this.url);
  }


  public getCommerces(): Observable<Commerce[]> {
   return this.http.get<any>(this.url);


  }




}
