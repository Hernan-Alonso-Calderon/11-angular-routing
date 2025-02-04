import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { IOrderResponse } from '../interfaces/order.interface';

@Injectable({
  providedIn: 'root',
})
export class ListOrdersService {
  private http = inject(HttpClient);

  execute(date: string): Observable<IOrderResponse[]> {
    const url = `${environment.apiUrl}/order/by-date`;
    const params = { date };
    return this.http.get<IOrderResponse[]>(url, { params });
  }
}
