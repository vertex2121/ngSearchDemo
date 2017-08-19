import { Injectable } from '@angular/core';
import { RESULTS } from './search-mock';
import { Item } from './search/item'

@Injectable()
export class SearchService {

  getSearchResults(query: string): Promise<Item[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(RESULTS), 500);
    });
  }

  getItem(itemId: number): Promise<Item> {
    return new Promise(resolve => {
      setTimeout(() => resolve(RESULTS.find(item => item.id === itemId)), 1000);
    });
  }

}
