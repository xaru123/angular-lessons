import { Component } from '@angular/core';
import {Observable, tap} from 'rxjs';
import {IProduct} from '../../models/products';
import {ProductsService} from '../../services/products.service';
import {ModalService} from '../../services/modal.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  title = 'lesson1';
  // products: IProduct[] = [];
  loading = false;
  products$: Observable<IProduct[]>;
  term = '';

  constructor(
      private productsService: ProductsService,
      public modalService: ModalService) {}

  ngOnInit(): void {
    this.loading = true;

    // this.productsService.getAll().subscribe((products) => {
    //   this.products = products;
    //   this.loading = false;
    // });

    this.products$ = this.productsService.getAll().pipe(
        tap(() => this.loading = false),
    );
  }
}
