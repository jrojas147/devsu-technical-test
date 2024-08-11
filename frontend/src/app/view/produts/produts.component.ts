import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product-services/product.service';


@Component({
  selector: 'app-produts',
  templateUrl: './produts.component.html',
  styleUrls: ['./produts.component.scss']
})
export class ProdutsComponent implements OnInit {


  valueSearch: any;


  dataProduct: any;
  constructor(private productService: ProductService) {
  }

   ngOnInit(): void {
     this.getProducts();
   }

  /**
   * Metodo que permite consultar todos los productos
   */
  getProducts() {
    this.productService.getAllProducts()
      .subscribe((response: any) => {
        this.dataProduct = response.data
      }, error => {
      })
  }

  searchProduct() {
    if(this.valueSearch === undefined|| this.valueSearch === ''){
      this.getProducts();
    } else {
    debugger
    let filter =  this.dataProduct.filter(item => item.name === this.valueSearch);
    this.dataProduct  = filter;
    }
  }







}
