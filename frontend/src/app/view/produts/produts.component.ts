import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product-services/product.service';


@Component({
  selector: 'app-produts',
  templateUrl: './produts.component.html',
  styleUrls: ['./produts.component.scss']
})
export class ProdutsComponent implements OnInit {


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
