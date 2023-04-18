import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ServerService } from './server.service';

@Injectable({
  providedIn: 'root'
})
export class ResolverService implements Resolve<any> {

  constructor(private serverService: ServerService) { }

  resolve(){
    return this.serverService.getAll();
  }
}
