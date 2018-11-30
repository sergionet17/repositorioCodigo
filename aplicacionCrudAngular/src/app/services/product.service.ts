import { Injectable } from '@angular/core';
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import {Product} from '../models/product'; 

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productList: AngularFireList<any>;
  selectedProduct : Product = new Product();

  constructor(private fireBase: AngularFireDatabase) { }

  getProducts(){
    return this.productList = this.fireBase.list('products'); 
  }

  insertProduct(product: Product){
    this.productList.push({
      name : product.name,
      category : product.category,
      location : product.location
    });
  }
  updateProduct(product : Product){
    this.productList.update(product.$key,{
      name : product.name,
      category : product.category,
      location : product.location
    }) 
  }

  deleteProduct($key: string){
    this.productList.remove($key);
  }


}
