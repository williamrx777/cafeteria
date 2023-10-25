import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  @Input()
  cafeteria:any[] = [];


  constructor(private http:HttpClient){

  }
  ngOnInit(): void {
    this.http.get('http://localhost:8080/produtos').subscribe((data:any) => {
      this.cafeteria = data;
    });
  }


}
