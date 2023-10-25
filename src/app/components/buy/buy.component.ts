import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit{
  productId:any;
  product: any ;
  constructor(private route: ActivatedRoute, private http:HttpClient) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id');
    });

    this.http.get(`http://localhost:8080/produtos/${this.productId}`).subscribe((data:any) => {
      this.product = data;
    },
    (error) => {
      console.log('Erro ao buscar produto', error);
    });

  }


}
