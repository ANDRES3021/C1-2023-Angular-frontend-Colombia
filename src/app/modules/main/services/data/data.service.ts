import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  nombreEvento = new EventEmitter<string>();

  constructor() { }
}
