import {
  Component,
  ComponentRef,
  ViewContainerRef,
  viewChild,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  vcr: any = viewChild('container', { read: ViewContainerRef });
  #componentRef: ComponentRef<ProductCardComponent> | any;

  onCrateButtonClick() {
    this.#componentRef = this.vcr()?.createComponent(ProductCardComponent);

    this.#componentRef.setInput('productName', 'Apple');
    // this.#componentRef.setInput('productType', ProductType.FRUIT);

    this.#componentRef.instance.onCloseProductCard.subscribe((value: any) => {
      if (value) this.#componentRef?.destroy();
    });
  }

  onDestroyButtonClick() {
    this.vcr().clear();
  }
}
