import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product-services/product.service';


@Component({
  selector: 'app-produts',
  templateUrl: './produts.component.html',
  styleUrls: ['./produts.component.scss']
})
export class ProdutsComponent implements OnInit {

  dataProduct = [
        {
            id: "dos",
            name: "Cuenta de ahorros",
            description: "Cuenta de ahorrros nomina",
            logo: "textoreferencia",
            date_release: "2025-01-01",
            date_revision: "2025-01-01"
        },
        {
            id: "cuatro",
            name: "Cuenta de nomina",
            description: "Cuenta de ahorrros nomina",
            logo: "textoreferencia",
            date_release: "2025-01-01",
            date_revision: "2025-01-01"
        },
        {
            id: "cinco",
            name: "Tarjeta de credito",
            description: "Membresia VISA",
            logo: "textoreferencia",
            date_release: "2025-01-01",
            date_revision: "2025-01-01"
        }
    ]

  data : any;
  constructor(private productService: ProductService) { 
  }

  ngOnInit(): void {
    this.getProducts();
  }


  getProducts(){
    this.productService.getAllProducts()
    .subscribe((response: any ) =>{
      this.data = response
      console.log(this.data)
    } 
    ) 
  }







}
