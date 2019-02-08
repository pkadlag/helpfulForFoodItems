import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';
import { ProductService } from './products.service';

@Component({
selector:'app-products',
templateUrl: './product-list.component.html' ,
styleUrls: ['./product-list.component.css']
    
})
export class ProductListComponent implements OnInit {
pageTitle: string = 'Product List';
imageWidth: number = 50;
imageMargin: number= 2;
showImage: boolean = false;
//listFilter: string = 'cart';


_listFilter: string;
get listFilter(): string {
    return this._listFilter;
}
set listFilter(value:string) {
   // alert("value "+value);
    this._listFilter = value;
    this.filteredProducts= this.listFilter ? this.performFilter(this.listFilter) : this.products; 
}

filteredProducts: IProduct[];
products: IProduct[] = []; 

constructor(private productService: ProductService) {
    this.listFilter = '';
}

onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;  
}

performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
    product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
}

toggleImage(): void {
    this.showImage= !this.showImage;
}

ngOnInit(): void  {
this.products =this.productService.getProducts();
this.filteredProducts = this.products;
       
}
  
}