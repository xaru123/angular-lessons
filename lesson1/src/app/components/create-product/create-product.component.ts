import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductsService} from '../../services/products.service';
import {ModalService} from '../../services/modal.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent {

  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor(
      public productService: ProductsService,
      private modalService: ModalService,
  ) {}

  get title() {
    return this.form.controls.title as FormControl;
  }

  submit() {
    this.productService.create({
      'title': this.form.value.title as string,
      'price': 100,
      'category': 'Desc',
      'description': 'Cat',
      'image': 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      'rating': {
        'rate': 40,
        'count': 1,
      },
    }).subscribe(() => {
      this.modalService.close();
    });
  }
}
