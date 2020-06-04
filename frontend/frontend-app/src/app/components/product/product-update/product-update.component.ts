import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product

  constructor(private service: ProductService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.readProductById(id).subscribe(product => {
      this.product = product
    })
  }

  updateProduct(): void {
    this.service.updateProduct(this.product).subscribe(() => {
      this.service.showMessage('Produto Alterado com Sucesso')
      this.cancel()
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}
