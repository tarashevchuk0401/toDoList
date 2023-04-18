import { Component, OnInit } from '@angular/core';
import { ServerService } from '../services/server.service';
import { Item } from '../list/Item';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-done-tasks',
  templateUrl: './done-tasks.component.html',
  styleUrls: ['./done-tasks.component.css']
})
export class DoneTasksComponent implements OnInit{

  doneItems: Item[] =[];
  allItems: Item[] = [];
  testItems: Item[] = [];

  constructor(private serverService: ServerService){}

  ngOnInit(): void {
    this.serverService.getAll().subscribe((d: any) => this.allItems = d );
    setTimeout(() => {this.show()},100)
    // this.serverService.getAll().pipe(filter((item: any) => item.done === true)).subscribe((d: any) => this.allItems = d );
  }

  show(){
    this.doneItems = this.allItems.filter(item => item.done === true );

  }
}
