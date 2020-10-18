import {Component, OnInit } from '@angular/core';
import { ItemModel } from 'src/models/item.model';
import {combineLatest, Observable} from 'rxjs';
import {ItemService} from '../../services/item.service';
import {ActivatedRoute} from '@angular/router';
import {FilterModel} from '../../models/filter.model';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  public itemArray$: Observable<ItemModel[]>;
  rowDefs: string[] = ['name', 'type'];
  constructor(
    public itemService: ItemService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.itemArray$ = this.itemService.getDataArray();

    this.itemArray$ = combineLatest([this.getItemArray$(), this.getQueryParams$()])
      .pipe(map(([items, params]) => {
        if (!!params.name || !!params.type) {
          return items.filter(item => item.name.startsWith(params.name) && item.type.startsWith(params.type));
        } else {
          return items;
        }
      }));
  }

  private getItemArray$(): Observable<ItemModel[]> {
    return this.itemService.getDataArray();
  }

  private getQueryParams$(): Observable<FilterModel> {
    return this.route.queryParams as Observable<FilterModel>;
  }
}
