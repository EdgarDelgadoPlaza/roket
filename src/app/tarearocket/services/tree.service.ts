import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MarkerTree, Tree } from '../interfaces/tareatocket.interfaces';
import { environment } from 'src/environments/environments';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TreeService {
   /**
   * Servicio principal, usado para consumir la API solicitada.
   * Se usan variables de ambiente para centralizado de credenciales.
   */

  private baseUrl: string = environment.baseUrl;
  private token: string = environment.token;
  
  constructor( private http: HttpClient ) { }

  getTreeList (): Observable<Tree[]> {
    /**
   * Método principal del servicio, usado para consumir la API solicitada y mapear su respuesta.
   * Retorna un Observable de tipo array Tree.
   * Se usan variables de ambiente para centralizado de credenciales.
   */
    const headers = new HttpHeaders()
      .set('X-token', this.token );

    return this.http.get<Response>( this.baseUrl, { headers } )
      .pipe(
        map( (resp:any) => resp.objetos ),
        catchError( err => of(err.error.msg) )
      );
  }
}
