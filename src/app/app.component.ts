import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HttpClient } from "@angular/common/http";
import {MatIconModule} from '@angular/material/icon';
import {MatSidenav, MatSidenavContainer } from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent,MatIconModule,MatToolbarModule, MatSidenavContainer],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild('drawer') drawer!: MatSidenav;

  title = 'link-scribe';
  toggleMenu() {
    this.drawer.toggle();

  }
}
