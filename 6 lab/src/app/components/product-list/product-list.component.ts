import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';


interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  rating: number;
  link: string;
  likes: number;
}

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products: Product[] = [];

  removeProduct(product: Product) {
    this.products = this.products.filter(p => p.id !== product.id);
  }
}







