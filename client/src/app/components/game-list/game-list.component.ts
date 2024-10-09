import { Component,OnInit,HostBinding  } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit{

  noticias: any[] = [];
  secciones: string[] = ['business', 'technology', 'health'];
  seccionSeleccionada: string = 'technology'; // Sección por def

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getNoticias(); 

}

getNoticias() {
  const apiKey = 'b073c116789b49fdbf89d59c1b7d6079';
  const apiUrl = `https://newsapi.org/v2/top-headlines?country=US&category=${this.seccionSeleccionada}&apiKey=${apiKey}`;

  this.http.get(apiUrl).subscribe((data: any) => {
    this.noticias = data.articles;
  });
}
cambiarSeccion(seccion: string) {
  this.seccionSeleccionada = seccion;
  this.getNoticias();
}

}

