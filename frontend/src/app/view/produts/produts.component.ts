import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product-services/product.service';


@Component({
  selector: 'app-produts',
  templateUrl: './produts.component.html',
  styleUrls: ['./produts.component.scss']
})
export class ProdutsComponent implements OnInit {

  constructor(private productService: ProductService) { 
    const data = this.productService.getAllProducts()
  }

  ngOnInit(): void {
  }
}
