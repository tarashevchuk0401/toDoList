import { Component, OnDestroy, OnInit } from '@angular/core';
import { ServerService } from '../services/server.service';
import { Item } from './Item';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {

  itemsList: Item[] = [];
  newText: string = '';
  isDone: any = {
    done: true,
  }
  destroy$ = new Subject<void>();

  constructor(private serverService: ServerService) { }

  ngOnInit(): void {
    this.serverService.getAll().pipe(takeUntil(this.destroy$)).subscribe((d: any) => {
      this.itemsList = d;
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  show() {
    this.serverService.getAll().pipe(takeUntil(this.destroy$)).subscribe((d: any) => this.itemsList = d)
  }

  addItem() {
    if (this.newText.trim())
      this.serverService.addItem(
        {
          id: Math.random(), title: this.newText, done: false,
        }
      ).pipe(takeUntil(this.destroy$)).subscribe((d: any) => this.itemsList = d);
    this.show();
    this.newText = '';
  }

  deleteItem(id: number) {
    this.serverService.deleteItem(id.toString()).pipe(takeUntil(this.destroy$)).subscribe((d: any) => this.itemsList = d)
    this.show();
    console.log(id)
  }

  matchAsDone(id: number) {
    this.serverService.matchAsDone(id.toString(), this.isDone).pipe(takeUntil(this.destroy$)).subscribe((d: any) => this.itemsList = d);
    this.show();
  }

}
