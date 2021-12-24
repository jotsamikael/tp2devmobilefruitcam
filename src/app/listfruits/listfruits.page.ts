import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';
import { Article } from 'src/models/article';
import { ArticlesService } from '../service/articles.service';

@Component({
  selector: 'app-listfruits',
  templateUrl: './listfruits.page.html',
  styleUrls: ['./listfruits.page.scss'],
})
export class ListfruitsPage implements OnInit {
  colour= "";
  Articles : Article[];
  public navParams: NavParams;
  

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor(private route: ActivatedRoute,  public navCtrl: NavController,private router: Router, private articleservice: ArticlesService) { 
    this.colour =  this.route.snapshot.paramMap.get('colour')

    this.Articles = [
      {name: 'Dragon fruit', 
      price:100,
      createdAt: new Date(),
      id:1,
      quantity:4,
      pictures:[
        'assets/imgs/product4/dragon1.jpg',
        'assets/imgs/product4/dragon2.jpg',
        'assets/imgs/product4/dragon3.jpg'
      ],
      availability:{
        available:true,
        type:'delivery',
        fee:1000
      },
       info:'dragon fruit, do not be afraid its does not burn', 
       catergory:'danger',
      },
      {name: 'Banana', 
      price:100,
      createdAt: new Date(),
      id:2,
      quantity:54,
      pictures:[
        'assets/imgs/product2/banana1.jpg',
        'assets/imgs/product2/banana2.jpg',
        'assets/imgs/product2/banana3.jpg'
      ],
      availability:{
        available:true,
        type:'delivery',
        fee:1000
      },
       info:'sweet yellowish bananas miam miam', 
       catergory:'warning',
      },
      {name: 'Pear', 
      price:500,
      createdAt: new Date(),
      id:2,
      quantity:14,
      pictures:[
        'assets/imgs/product8/pear1.jpg',
        'assets/imgs/product8/pear2.jpg'
      ],
      availability:{
        available:true,
        type:'delivery',
        fee:1000
      },
       info:'watery riped pears', 
       catergory:'success',
      },
      {name: 'Blueberries', 
      price:75,
      createdAt: new Date(),
      id:14,
      quantity:14,
      pictures:[
        'assets/imgs/product14/blueberry1.jpg',
        'assets/imgs/product14/blueberry2.jpg'
      ],
      availability:{
        available:true,
        type:'delivery',
        fee:1000
      },
       info:'juicy  wild blueberries', 
       catergory:'primary',
      },
      {name: 'fraises', 
      price:50,
      createdAt: new Date(),
      id:8,
      quantity:304,
      pictures:[
        'assets/imgs/product1/straw1.png',
        'assets/imgs/product1/straw2.jpg',
        'assets/imgs/product/straw.jpg'
      ],
      availability:{
        available:true,
        type:'delivery',
        fee:1000
      },
       info:'juicy reddish strawberries', 
       catergory:'danger',
      },
      {name: 'Orange', 
      price:300,
      createdAt: new Date(),
      id:6,
      quantity:4,
      pictures:[
        'assets/imgs/product6/orange1.jpg',
        'assets/imgs/product6/orange2.jpg',
        'assets/imgs/product6/orange3.jpg'
      ],
      availability:{
        available:true,
        type:'delivery',
        fee:1000
      },
       info:'succulent oranges', 
       catergory:'warning',
      },
      {name: 'Kiwi', 
      price:400,
      createdAt: new Date(),
      id:5,
      quantity:4,
      pictures:[
        'assets/imgs/product5/kiwi3.jpg',
        'assets/imgs/product5/kiwi1.jpg',
        'assets/imgs/product5/kiwi3.jpg'
      ],
      availability:{
        available:true,
        type:'delivery',
        fee:1000
      },
       info:'sweet ripe kiwi', 
       catergory:'success',
      },
      
      {name: 'Avocat', 
      price:250,
      createdAt: new Date(),
      id:2,
      quantity:2,
      pictures:[
        'assets/imgs/product7/avo1.jpg',
        'assets/imgs/product7/avo2.jpg',
        'assets/imgs/product7/avo3.jpg',
      ],
      availability:{
        available:false,
        type:'delivery',
        fee:1000
      },
       info:'soft ripe avocado',
        catergory:'success',
      },
      {name: 'Pineapple', 
      price:500,
      createdAt: new Date(),
      id:2,
      quantity:3,
      pictures:[
        'assets/imgs/product3/pine1.jpeg',
        'assets/imgs/product3/pine2.jpg',
        'assets/imgs/product3/pine3.jpeg',
      ],
      availability:{
        available:false,
        type:'delivery',
        fee:1000
      },
       info:'yellowish watery pineapples',
        catergory:'warning',
      },
      {name: 'pawpaw', 
      price:1000,
      createdAt: new Date(),
      id:2,
      quantity:3,
      pictures:[
        'assets/imgs/product11/pawpaw1.jpg',
        'assets/imgs/product11/pawpaw2.jpg',
      ],
      availability:{
        available:false,
        type:'delivery',
        fee:1000
      },
       info:'sweet pawpaw',
        catergory:'success',
      },
      {name: 'green apple', 
      price:350,
      createdAt: new Date(),
      id:2,
      quantity:3,
      pictures:[
        'assets/imgs/product13/greenapple1.jpg',
        'assets/imgs/product13/greenapple2.jpg',
      ],
      availability:{
        available:false,
        type:'delivery',
        fee:1000
      },
       info:'sweet green apple',
        catergory:'success',
      },
      {name: 'peach', 
      price:1400,
      createdAt: new Date(),
      id:9,
      quantity:3,
      pictures:[
        'assets/imgs/product9/peach1.jpg',
        'assets/imgs/product9/peach2.jpg'
      ],
      availability:{
        available:false,
        type:'delivery',
        fee:1000
      },
       info:'succulent peach',
        catergory:'warning',
      },
      {name: 'red apple', 
      price:200,
      createdAt: new Date(),
      id:10,
      quantity:3,
      pictures:[
        'assets/imgs/product10/redapple1.jpg',
        'assets/imgs/product10/redapple2.jpg',
        'assets/imgs/product10/redapple3.jpg',

      ],
      availability:{
        available:false,
        type:'delivery',
        fee:1000
      },
       info:'succulent red apples',
        catergory:'danger',
      },
      {name: 'guava', 
      price:100,
      createdAt: new Date(),
      id:12,
      quantity:3,
      pictures:[
        'assets/imgs/product12/guava1.jpg',
        'assets/imgs/product12/guava2.jpg'

      ],
      availability:{
        available:false,
        type:'delivery',
        fee:1000
      },
       info:'succulent ripe guava',
        catergory:'success',
      }
      
    ]
  }

  ngOnInit() {
  }



  showDetails(article : Article){
    this.articleservice.setData(article.id, article)   
    this.router.navigateByUrl('/details/'+article.id);
    


  }
}
