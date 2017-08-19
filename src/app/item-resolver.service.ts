import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { SearchService } from './search.service';
import { Item } from './search/item';

@Injectable()
export class ItemResolver implements Resolve<Item> {
  constructor(private searchService: SearchService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Item> {
    let id = +route.paramMap.get('id');

    return this.searchService.getItem(id).then(item => {
      if (item) {
        return item;
      } else {
        this.router.navigate(['/search']);
        return null;
      }
    });
  }
}
