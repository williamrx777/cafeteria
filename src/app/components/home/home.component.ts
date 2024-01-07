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
    this.http.get('https://65a5b08c-fc5e-4d0d-968b-df555e27f114-00-5cf6k32har2s.riker.replit.dev/api/cafeteria').subscribe((data:any) => {
      this.cafeteria = data;
      this.loading = true; // Marca a carga como concluída
    });
  }





}
