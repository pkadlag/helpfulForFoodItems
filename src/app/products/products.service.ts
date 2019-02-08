import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IProduct } from './product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
//     private productUrl = 'api/products/products.json';
//     constructor(private http: HttpClient) {}
getProducts(): IProduct[] {
//   getProducts(): Observable<IProduct[]> {
//     return this.http.get<IProduct[]>(this.productUrl).pipe(
// tap(data => console.log('All: ' + JSON.stringify(data))),
// catchError(this.handleError)
//     );
// }

// private handleError(err: HttpErrorResponse) {
//     let errorMessage = '';
// if(err.error instanceof ErrorEvent) {
//     errorMessage = 'An error occured: ${err.error.message}';
// } else {
//     errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}1;
// }
// console.error(errorMessage);
// return throwError(errorMessage);
// }


// }

    return [
        {
            "productId": 2,
            "productName": "pizza",
             "productCode":"GDN-0023",
             "releaseDate": "March 18, 2018",
             "description": "Punam kadlag",
             "price": 200.00,
             "starRating": 5.0,
             "imageUrl": "https://www.capgemini.com/in-en/wp-content/uploads/sites/6/2017/08/people_and_talent_bpo.jpg"
        },
        {
    
            "productId":3,
            "productName":"gulabjamun",
             "productCode":"GDN-0023",
             "releaseDate":"March 30, 2018",
             "description":"Poonam paraskar",
             "price": 100.00,
             "starRating": 5.0,
             "imageUrl": "https://avatars1.githubusercontent.com/u/1049773?v=3&amp;s=400"
        },
        {
            "productId": 4,
            "productName": "rasmalai",
             "productCode":"mnk-0523",
             "releaseDate": "March 11, 2018",
             "description": "Vinayak kadlag",
             "price": 450.00,
             "starRating": 5.0,
             "imageUrl": "https://www.capgemini.com/in-en/wp-content/uploads/sites/6/2017/08/people_and_talent_bpo.jpg"
        },
        {
    
            "productId":5,
            "productName":"haidarabadi-biryani",
             "productCode":"GDN-0023",
             "releaseDate":"March 30, 2018",
             "description":"Bandi bhanus biryani",
             "price": 80.00,
             "starRating": 5.0,
             "imageUrl": "https://avatars1.githubusercontent.com/u/1049773?v=3&amp;s=400"
        },
        {
            "productId": 6,
            "productName": "pav-bhaji",
             "productCode":"mnk-0523",
             "releaseDate": "March 11, 2018",
             "description": "Vinayak kadlag",
             "price": 450.00,
             "starRating": 5.0,
             "imageUrl": "https://www.capgemini.com/in-en/wp-content/uploads/sites/6/2017/08/people_and_talent_bpo.jpg"
        },
        {
    
            "productId":7,
            "productName":"pakoda",
             "productCode":"pbk-0023",
             "releaseDate":"March 01, 2018",
             "description":"ha ha ha bhanus special dish",
             "price": 80.00,
             "starRating": 5.0,
             "imageUrl": "https://avatars1.githubusercontent.com/u/1049773?v=3&amp;s=400"
        },
        {
    
            "productId":8,
            "productName":"vada-pav",
             "productCode":"skk-0023",
             "releaseDate":"March 07, 2018",
             "description":"mumbai dish",
             "price": 30.00,
             "starRating": 5.0,
             "imageUrl": "https://avatars1.githubusercontent.com/u/1049773?v=3&amp;s=400"
        }




    ];
}
}