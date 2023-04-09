import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../list/Item';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  path: string = ' http://localhost:3000/posts'

  constructor( private serverClient: HttpClient) { }

  getAll(){
    return this.serverClient.get(this.path);
  }

  addItem(newItem: Item){
    return this.serverClient.post(this.path, newItem );
  }

  deleteItem(id:string){
    return this.serverClient.delete(this.path + '/' + id)
  }

  editItem(id:string, editedText: string){
    return this.serverClient.put(this.path + '/' + id, {id: Math.random(), title: editedText, inProgress: true})
  }

}
