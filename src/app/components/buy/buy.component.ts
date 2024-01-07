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

    this.http.get(`https://65a5b08c-fc5e-4d0d-968b-df555e27f114-00-5cf6k32har2s.riker.replit.dev/api/cafeteria/${this.productId}/`).subscribe((data:any) => {
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
        created_at: this.product.created_at,
        updated_at: this.product.updated_at
        // Substitua pelo campo correto do produto
        // Outros dados relacionados à compra, se necessário
      };

      // Realize a solicitação HTTP POST para a URL 'http://localhost:8080/compras-confirmadas'
      this.http.post('https://65a5b08c-fc5e-4d0d-968b-df555e27f114-00-5cf6k32har2s.riker.replit.dev/api/confirmarCompra', dadosParaEnvio).subscribe(
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
