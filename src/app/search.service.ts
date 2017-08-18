import { Injectable } from '@angular/core';
import { RESULTS } from './search-mock';
import { Item } from './search/item'

@Injectable()
export class SearchService {

  getSearchResults(query: string): Promise<Item[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(RESULTS), 2000);
    });
  }

}
