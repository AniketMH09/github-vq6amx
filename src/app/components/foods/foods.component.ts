import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit {

   category: number = 1;
   food_items = []; 
   added_items = [];
   all_product = [{id:1,
     image_src:'https://cdn.demos.pixelgrade.com/wp-content/uploads/sites/5/2014/06/spice-beef-12-400x400.jpg',
                    title: 'spicy beef and tofu slas',
                    contains: 'fresh  low-carb',
                    price: '34' },
                    {id:2,image_src:'https://cdn.demos.pixelgrade.com/wp-content/uploads/sites/5/2014/06/spice-beef-12-400x400.jpg',
                    title: 'spicy beef and tofu slas',
                    contains: 'fresh low-carb',
                    price: '34' },
                    {id:3,image_src:'https://cdn.demos.pixelgrade.com/wp-content/uploads/sites/5/2014/06/spice-beef-12-400x400.jpg',
                    title: 'spicy beef and tofu slas',
                    contains: 'fresh low-carb',
                    price: '34' },
                    {id:4,image_src:'https://cdn.demos.pixelgrade.com/wp-content/uploads/sites/5/2014/06/spice-beef-12-400x400.jpg',
                    title: 'spicy beef and tofu slas',
                    contains: 'fresh low-carb',
                    price: '34' },
                    {id:5,image_src:'https://cdn.demos.pixelgrade.com/wp-content/uploads/sites/5/2014/06/spice-beef-12-400x400.jpg',
                    title: 'spicy beef and tofu slas',
                    contains: 'fresh low-carb',
                    price: '34' }];
         mains = [{id:1,image_src:'https://cdn.demos.pixelgrade.com/wp-content/uploads/sites/5/2014/06/spice-beef-12-400x400.jpg',
                    title: 'spicy beef and tofu slas',
                    contains: 'fresh  low-carb',
                    price: '34' },
                    {id:2,image_src:'https://cdn.demos.pixelgrade.com/wp-content/uploads/sites/5/2014/06/spice-beef-12-400x400.jpg',
                    title: 'spicy beef and tofu slas',
                    contains: 'fresh low-carb',
                    price: '34' },
                    {id:3,image_src:'https://cdn.demos.pixelgrade.com/wp-content/uploads/sites/5/2014/06/spice-beef-12-400x400.jpg',
                    title: 'spicy beef and tofu slas',
                    contains: 'fresh low-carb',
                    price: '34' }];
          salads = [{id:1,image_src:'https://cdn.demos.pixelgrade.com/wp-content/uploads/sites/5/2014/06/spice-beef-12-400x400.jpg',
                    title: 'spicy beef and tofu slas',
                    contains: 'fresh  low-carb',
                    price: '34' },
                    {id:2,image_src:'https://cdn.demos.pixelgrade.com/wp-content/uploads/sites/5/2014/06/spice-beef-12-400x400.jpg',
                    title: 'spicy beef and tofu slas',
                    contains: 'fresh low-carb',
                    price: '34' }
                    ];
        startes = [{id:1,image_src:'https://cdn.demos.pixelgrade.com/wp-content/uploads/sites/5/2014/06/spice-beef-12-400x400.jpg',
                    title: 'spicy beef and tofu slas',
                    contains: 'fresh  low-carb',
                    price: '34' }
                    
                    ];          
  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.food_items = this.all_product;
    console.log(JSON.parse(localStorage.getItem('added_items')));
    this.route.params.subscribe( params => {
      if(params.id == 2){
      this.food_items = this.mains;
      console.log(this.added_items);
      }else if(params.id == 3) {
       this.food_items = this.salads;
       this.checkAddedItems();
      }else if(params.id == 4) {
       this.food_items = this.startes;
       this.checkAddedItems();
      }
      else {
         this.food_items = this.all_product;
         this.checkAddedItems();
      }
      });
  }

  addtoCart(item) {
    document.getElementById(item.id).innerText = 'PRODUCT ADDED';
    document.getElementById(item.id).disabled = true;
    this.added_items.push(item.id);
    localStorage.setItem('added_items',JSON.stringify(this.added_items));
    
  }

  checkAddedItems() {
    for(let i of this.added_items){
      console.log(this.food_items.indexOf(i));
     if(this.food_items.indexOf(i) !== -1){
       console.log(i);
     }
    }
  }

}