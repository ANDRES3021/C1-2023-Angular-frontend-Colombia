import { DataService } from './../../../../main/services/data/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-narvar',
  templateUrl: './narvar.component.html',
  styleUrls: ['./narvar.component.scss']
})
export class NarvarComponent implements OnInit {

  mensaje : string = 'Home'
  constructor(private dataService :DataService) { }

  ngOnInit(): void {
    this.dataService.nombreEvento.subscribe( texto => {
      this.mensaje = texto;
      console.log('Home:', texto);
    });
  }

}
