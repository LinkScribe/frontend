import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkScribeService } from "../services/link-scribe.service";
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule, MatPrefix, matFormFieldAnimations} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { Router } from "@angular/router";
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule,CommonModule,MatInputModule,MatFormFieldModule,FormsModule, 
    MatDividerModule, MatButtonModule, MatProgressBarModule, MatListModule, MatIconModule, MatToolbarModule, MatSidenavModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  showFiller = false;
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
  reloadPage() {
    window.location.reload();
  }

  
 
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

    this.linkService.getImage(link).subscribe(imageBlob => {
        const reader = new FileReader();
        reader.onload = (event: any) => {
          this.image = event.target.result;
        };
        reader.readAsDataURL(imageBlob);
      });
   

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
