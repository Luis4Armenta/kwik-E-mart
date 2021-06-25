import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from 'src/app/interfaces/product';
import { Sale } from 'src/app/interfaces/sale';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  products: Product[] = [];
  matchProducts: Product[] =[];
  allProducts: Product[] =[];
  shoppingList: Product[] = [];
  total: number = 0;

  constructor(
    private productService: ProductService,
    private snackBar: MatSnackBar
    ) {
    this.getProducts();
  }
  
  ngOnInit(): void {
  }
  
  getProducts() {
    this.productService.getProducts().subscribe(products => {
      this.allProducts = products;
      this.products = this.allProducts;
    });
  }

  seeAllProductss() {
    this.products = this.allProducts;
  }
  seeMatchProducts() {
    this.products = this.matchProducts;
  }
  
  searchProduct(term: string) {
    this.allProducts.forEach(product => {
      if (product.name.toLowerCase().includes(term) || (product._id != undefined && product._id.includes(term))) {
        this.matchProducts.push(product);
      }
    });
    this.seeMatchProducts();
  }

  getTotal() {
    this.total = 0;
    this.shoppingList.forEach(product => {
      this.total += product.price;
    });
  }

  addToShoppingList(product: Product) {
    this.shoppingList.push(product);
    this.getTotal();
  }

  clearShoppingList() {
    this.shoppingList = [];
    this.total = 0;
  }

  doSale() {
    let productsToSale: Product[] = [];
    this.shoppingList.forEach(product => {
      productsToSale.push({...product, quantity: 1})
    });
    const sale: Sale = {
      objectJson: JSON.stringify(productsToSale).replace(/\"/gi, "'"),
      total: this.total
    }
    this.productService.doSale(sale).subscribe(response => {
      if (response.ok) {
        this.clearShoppingList();
        this.snackBar.open('Successful sale', ':D');
      } else {
        this.snackBar.open('Sale error. try later', ':c');
      }
    });
  }



  
}
