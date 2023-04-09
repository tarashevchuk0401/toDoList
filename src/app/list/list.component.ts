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

  constructor(private serverService: ServerService) { }

  ngOnInit(): void {
    this.serverService.getAll().subscribe((d: any) => this.itemsList = d)

  }

  show() {
    this.serverService.getAll().subscribe((d: any) => this.itemsList = d)
  }

  addItem() {
    if(this.newText.trim())
    this.serverService.addItem(
      {
       id: Math.random(), title: this.newText, inProgress: true 
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

}
