import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product

  constructor(private service: ProductService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.readProductById(id).subscribe(product => {
      this.product = product
    })
  }

  deleteProduct(): void {
    
    this.service.deleteProduct(this.product.id).subscribe(() => {
      this.service.showMessage('Produto Removido com Sucesso')
      this.cancel()
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
