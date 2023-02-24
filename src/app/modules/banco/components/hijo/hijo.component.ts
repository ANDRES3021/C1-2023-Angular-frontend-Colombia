import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/modules/main/services/data/data.service';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {
  mensaje: string = 'Mensaje';
  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
    this.dataservice.nombreEvento.subscribe( texto => {
      console.log('hijo:', texto);
      this.mensaje = texto;
    });
  }

}
