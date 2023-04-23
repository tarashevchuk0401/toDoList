import { Component, OnDestroy, OnInit } from '@angular/core';
import { Item } from '../list/Item';
import { ServerService } from '../services/server.service';
import { ActivatedRoute } from '@angular/router';
import { Subject, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css']
})
export class ItemPageComponent implements OnInit, OnDestroy {

  itemResult: Item[] = [];
  curentId: string = '';
  changedText: string = '';
  saved: boolean = false;
  destroyed$ = new Subject<void>();
    

  constructor(private serverService: ServerService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
     this.curentId = this.activatedRoute.snapshot.params['id'];

    this.serverService.getAll().pipe(takeUntil(this.destroyed$)).subscribe((item: any) => {
      let result = item.find((item: any) => item.id === +this.curentId);
      this.itemResult.push(result);
    })
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  editItem(){
    this.serverService.editItem(this.curentId, this.changedText).pipe(takeUntil(this.destroyed$)).subscribe((item: any) => {
      this.editItem = item;  
    })
    this.saved = true;
  }

}
