import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-product',
  templateUrl: './our-product.component.html',
  styleUrls: ['./our-product.component.css'],
})
export class OurProductComponent implements OnInit {
  product:ProductModel = new ProductModel();
  ngOnInit(): void {
    
  }

  
}

export class OurProductModel {
  showPrice: boolean|undefined;
  showButton: boolean|undefined;
  showTitle: boolean|undefined;
  showDescription: boolean|undefined;
  products: ProductModel[]|undefined;
}

export class ProductModel {
  image: ProductImageModel | undefined;
  title: string | undefined;
  description: number | undefined;
  price: string | undefined;
}

export class ProductImageModel {
  url: string | undefined;
}

export class TextStyleModel {
  alignment: string | undefined;
  size: string | undefined;
  fontType: string | undefined;
  gradiant: GradientModel | undefined;
}

export class GradientModel {
  fromColor: string | undefined;
  toColor: string | undefined;
  direction: string | undefined;
}
