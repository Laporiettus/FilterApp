import { Injectable } from '@angular/core';
import {ItemModel} from '../models/item.model';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {ItemData} from '../datas/item-model';

@Injectable()
export class ItemService {

  constructor(private http: HttpClient) { }

  public getDataArray(): Observable<ItemModel[]> {
    return of(ItemData);
  }
}
