import { Component, OnInit } from '@angular/core';
import { IesService } from './ies.service';

@Component({
  selector: 'app-ies',
  templateUrl: './ies.page.html',
  styleUrls: ['./ies.page.scss'],
})
export class IesPage implements OnInit {

  private universidades = [];

  constructor(private iesservices: IesService) { }

  ngOnInit() {
    this.universidades = this.iesservices.getUniversidades();
  }

  ionViewWillEnter(){
    this.universidades = this.iesservices.getUniversidades();
  }

}
