import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkScribeService } from "../services/link-scribe.service";
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule, matFormFieldAnimations} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule,CommonModule,MatInputModule,MatFormFieldModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  mostrar: boolean = false;
  title: any;
  link:any;
  image:any;
  valoresRespuesta!: any[];
  prediccion!: any[];
  valorImagen!: any[];
  summary: any;
 
  //Se crea el servicio
  constructor(public linkService: LinkScribeService, public router: Router) {}
  
  getInfo() {
    //Se envía la información
    const link = {
        "inURL": this.link 
    };
    this.mostrar = true;
    this.linkService.getTittle(link).subscribe(
      data => {
        this.title = data; // Establecer el título obtenido en la respuesta
        this.valoresRespuesta = Object.values(data);
        this.mostrar = true;
      },
      error => {
        console.log(error);
      }
    );

    this.linkService.getImage(link).subscribe(
      data => {
        this.image = data; // Establecer el título obtenido en la respuesta
        this.valorImagen = Object.values(data);
        //this.mostrar = true;
      },
      error => {
        console.log(error);
      }
    );

    this.linkService.predict(link).subscribe(
      (data: any[]) => {
        this.prediccion = Object.values(data);
        //this.mostrar = true;
      },
      error => {
        console.log(error);
      }
    );

      
  }
  
}
