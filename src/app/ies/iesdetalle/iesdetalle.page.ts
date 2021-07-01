import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { IesService } from '../ies.service';

import { Ies } from '../ies.model';

import { AlertController } from '@ionic/angular';



@Component({

  selector: 'app-iesdetalle',

  templateUrl: './iesdetalle.page.html',

  styleUrls: ['./iesdetalle.page.scss'],

})

export class IesdetallePage implements OnInit {



  private universidad: Ies;



  constructor(private activateRoute: ActivatedRoute, private ieservice: IesService, private alertControl: AlertController, private router: Router) { }



  ngOnInit() {

    this.activateRoute.paramMap.subscribe(paramMap => {

      const recibirId = paramMap.get('id')

      this.universidad = this.ieservice.getUniversidad(recibirId);

    })



  }



  async eliminarIes() {

    const alertElement = await this.alertControl.create({

      header: '¿Está seguro de eliminar el registro?',

      message: 'Esta acción eliminará el registro de la BBDD',

      buttons: [

        {

          text: 'Cancelar',

          role: 'cancel'

        },

        {

          text: 'Eliminar',

          handler: () => {

            this.ieservice.delUniversidad(this.universidad.id);

            this.router.navigate(['/ies'])



          }

        }

      ]

    });



    await alertElement.present();




  }



}