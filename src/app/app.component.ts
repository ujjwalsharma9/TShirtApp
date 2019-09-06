import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  showDetails=false;
  buyButton=false;

  products = [];
  
  tshirtdetails: any;

  addtocart(t){
    this.tshirtdetails=t;
    this.showDetails=true;
    this.buyButton=true;
  }

cancel(d){
  this.showDetails=false;
  this.buyButton=false;

}

update(d):void{
  console.log(d.Id);
  this.showDetails=false;
this.buyButton=false;
}
  ngOnInit() {
    this.products = this.getProducts();
    console.log(this.products);
  }
  // getURL(p){
  //   if(this.showImage){
  //     return p.imageUrlFront
  //   }
  //   else{
  //     return p.imageUrlBack
  //   }
  // }

  // showBack(event,p){
  //   event.target.src=p.imageUrlBack;
  // }

  // showFront(event,p){
  //   event.target.src=p.imageUrlFront;
  // }
  // getColor(p){
  //   if(p.Instock<25){
  //     return "red"
  //   }
  //   else{
  //     return "green"
  //   }
  // }

 



  getProducts() {
    return [
      {
        "Id": 100,
        "name":"Men's Sport's Shirt",
        "description": "Lion's Club International Club Official T shirt.",
        "price": 199.5,
        "color": "white",
        "imageUrlFront": "https://github.com/ujjwalsharma9/TShirtApp/blob/master/src/assets/images/tshirt1b.jpg?raw=true",
        "imageUrlBack": "https://github.com/ujjwalsharma9/TShirtApp/blob/master/src/assets/images/tshirt1f.jpg?raw=true",
        "Instock": 30,
        "imggsrc":"",
        "releaseDate":"09-07-2019"
      },
      {
        "Id": 200,
        "name":"Men's Sport's Shirt",
        "description": "CMAC Club Official T shirt.",
        "price": 205.0,
        "color": "blue",
        "imageUrlFront": "https://github.com/ujjwalsharma9/TShirtApp/blob/master/src/assets/images/tshirt2f.jpg?raw=true",
        "imageUrlBack": "https://github.com/ujjwalsharma9/TShirtApp/blob/master/src/assets/images/tshirt2b.jpg?raw=true",
        "Instock": 20,
        "imggsrc":"",
        "releaseDate":"22-06-2019"
      },

      {
        "Id": 400,
        "name":"Men's Casual Shirt",
        "description": "Plain T shirt.",
        "price":  185.0,
        "color": "Navy blue",
        "imageUrlFront": "https://github.com/ujjwalsharma9/TShirtApp/blob/master/src/assets/images/tshirt4f.jpg?raw=true",
        "imageUrlBack": "https://github.com/ujjwalsharma9/TShirtApp/blob/master/src/assets/images/tshirt4b.jpg?raw=true",
        "Instock": 35,
        "imggsrc":"",
        "releaseDate":"31-08-2019"
      },
      {
        "Id": 500,
        "name":"Men's Outdoor Shirt",
        "description": "Kirby Ai T shirt.",
        "price":  190.0,
        "color": "Olive green",
        "imageUrlFront": "https://github.com/ujjwalsharma9/TShirtApp/blob/master/src/assets/images/tshirt5f.jpg?raw=true",
        "imageUrlBack": "https://github.com/ujjwalsharma9/TShirtApp/blob/master/src/assets/images/tshirt5b.jpg?raw=true",
        "Instock": 24,
        "imggsrc":"",
        "releaseDate":"16-07-2019"
      },
      {
        "Id": 600,
        "name":"Men's Outdoor Shirt",
        "description": "Hunter T shirt.",
        "price":  220.0,
        "color": "Dark green",
        "imageUrlFront": "https://github.com/ujjwalsharma9/TShirtApp/blob/master/src/assets/images/tshirt6f.jpg?raw=true",
        "imageUrlBack": "https://github.com/ujjwalsharma9/TShirtApp/blob/master/src/assets/images/tshirt6b.jpg?raw=true",
        "Instock": 45,
        "imggsrc":"",
        "releaseDate":"17-08-2019"
      }
    ]

  }
}
