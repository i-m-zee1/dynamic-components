import { Component, OnInit, input, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent implements OnInit {
  productName = input('Mountain Bicycle');
  productDescription = input(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  );

  // productType = input<ProductType>(ProductType.BIKE);
  onCloseProductCard = output<boolean>();

  showMessage: boolean = false;
  imageUri: string = '';

  ngOnInit(): void {
    // this.setImageURI(this.productType());
  }

  onClickCloseButton() {
    this.onCloseProductCard.emit(true);
  }
}
