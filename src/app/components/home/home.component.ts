import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  cafeteria:any[] = [];
  loading:boolean = false;
  constructor(private http:HttpClient){

  }
  ngOnInit(): void {
    this.http.get('https://cafeteria.williamrx777.repl.co/cafeteria/cafeteria-lista/').subscribe((data:any) => {
      this.cafeteria = data;
      this.loading = true; // Marca a carga como concluída
    });
  }





}
