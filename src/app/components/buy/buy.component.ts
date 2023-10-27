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
  mensagem:String = ''
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



  confirmarPagamento() {
    if (this.product) {
      // Construa o objeto de dados que você deseja enviar na solicitação POST (pode variar de acordo com os requisitos do seu servidor)
      const dadosParaEnvio = {
        produtoId: this.product.id,
        nome: this.product.nome,
        preco: this.product.preco,
        imagem: this.product.imagem,
        data: this.product.data, // Substitua pelo campo correto do produto
        // Outros dados relacionados à compra, se necessário
      };

      // Realize a solicitação HTTP POST para a URL 'http://localhost:8080/compras-confirmadas'
      this.http.post('http://localhost:8080/compras-confirmas', dadosParaEnvio).subscribe(
        (response) => {
          // Ação a ser realizada em caso de sucesso
          this.mensagem = 'Pagamento feito com sucesso', response;
          // Você pode adicionar aqui o redirecionamento para outra página ou qualquer outra ação necessária após o pagamento ser confirmado.
        },
        (error) => {
          // Ação a ser realizada em caso de erro na solicitação
          this.mensagem = 'Erro ao confirmar pagamento', error;
        }
      );
    }
  }


}
