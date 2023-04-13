import { Component, OnInit } from '@angular/core';
import { Item } from '../list/Item';
import { ServerService } from '../services/server.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css']
})
export class ItemPageComponent implements OnInit {

  itemResult: Item[] = [];
  curentId: string = '';
  changedText: string = '';
  saved: boolean = false;
    

  constructor(private serverService: ServerService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
     this.curentId = this.activatedRoute.snapshot.params['id'];

    this.serverService.getAll().subscribe((item: any) => {
      let result = item.find((item: any) => item.id === +this.curentId);
      this.itemResult.push(result);
    })
  }

  editItem(){
    

    this.serverService.editItem(this.curentId, this.changedText).subscribe((item: any) => {
      this.editItem = item;
      
    })

    this.saved = true;
  }

}
