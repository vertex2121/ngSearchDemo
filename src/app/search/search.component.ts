import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service'
import { Item } from './item';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  query = '';
  filteredList = [];

  constructor(private searchService: SearchService) {

  }

  filter(searchresults) {
    if (this.query !== "") {
      this.filteredList = searchresults.filter(function(el) {
        return el.name.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
      }.bind(this));
    } else {
      this.filteredList = [];
    }
  }

  search() {
    this.searchService.getSearchResults(this.query).then(results => this.filter(results));
  }

  select(item) {
    this.query = item;
    this.filteredList = [];
  }

  ngOnInit() {
  }

}
