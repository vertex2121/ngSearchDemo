import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location }  from '@angular/common';
import { Item } from '../search/item';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  item:Item;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit() {
    this.route.data
      .subscribe((data: { item: Item }) => {
        this.item = data.item;
      });
  }

  goBack(): void {
    this.location.back();
  }

}
