import { Component, OnInit } from '@angular/core';
import { ServerService } from '../services/server.service';
import { Item } from '../list/Item';
import { filter, map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-done-tasks',
  templateUrl: './done-tasks.component.html',
  styleUrls: ['./done-tasks.component.css']
})
export class DoneTasksComponent implements OnInit {

  doneItems: Item[] = [];
  allItems: Item[] = [];
  testItems: Item[] = [];

  constructor(private serverService: ServerService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.allItems = this.activatedRoute.snapshot.data['doneTask'];
    this.doneItems = this.allItems.filter(item => item.done === true);
  }


}
