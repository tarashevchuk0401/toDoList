import { Component, OnInit } from '@angular/core';
import { ServerService } from '../services/server.service';
import { Item } from './Item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  itemsList: Item[] = [];
  newText: string = '';
  isDone: any = {
    done: true,
  }

  constructor(private serverService: ServerService) { }

  ngOnInit(): void {
    this.serverService.getAll().subscribe((d: any) => {
      this.itemsList = d;
      console.log(d)
    })

  }

  show() {
    this.serverService.getAll().subscribe((d: any) => this.itemsList = d)
  }

  addItem() {
    if (this.newText.trim())
      this.serverService.addItem(
        {
          id: Math.random(), title: this.newText, done: false,
        }
      ).subscribe((d: any) => this.itemsList = d);
    this.show();
    this.newText = '';
  }

  deleteItem(id: number) {
    this.serverService.deleteItem(id.toString()).subscribe((d: any) => this.itemsList = d)
    this.show();
    console.log(id)
  }

  matchAsDone(id: number) {
    this.serverService.matchAsDone(id.toString(), this.isDone).subscribe((d: any) => this.itemsList = d);
    this.show();
  }

}
