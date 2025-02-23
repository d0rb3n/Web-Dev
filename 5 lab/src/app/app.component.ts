import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';


interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  rating: number;
  link: string;
  likes: number;
}

interface Category {
  name: string;
  image: string;
  products: Product[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories: Category[] = [
    { name: 'Продукты Iphone', 
     image: 'https://static.toiimg.com/thumb/msid-108177902,width-400,resizemode-4/108177902.jpg',
     products: [
      { id: 1, 
        name: 'iPhone 13 white', 
        description: 'Apple iPhone 13 с 128 ГБ памяти.', 
        image: 'https://sanmi.kz/upload/iblock/120/apple-iphone-13-128gb-belyj-102298420-1.jpg',
        rating: 4.8, 
        likes: 0, 
        link: 'http://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/' 
      },
      { id: 2, 
        name: 'iPhone 16', 
        description: 'Смартфон Apple iPhone 16 Pro Max 256Gb черный', 
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium', 
        rating: 4.9, 
        likes: 0, 
        link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000' 
      },
      { id: 3, 
        name: 'iPhone 15', 
        description: 'Смартфон Apple iPhone 15 128Gb голубой', 
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h01/h5f/86303746293790.jpg?format=gallery-medium', 
        rating: 4.4, 
        likes: 0, 
        link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-goluboi-113137929/?c=750000000' 
      },
      { id: 4, 
        name: 'Ноутбук Apple MacBook Air 13', 
        description: 'Ноутбук Apple MacBook Air 13 2022 13.6" / 8 Гб / SSD 256 Гб / macOS / MLXW3', 
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=gallery-medium', 
        rating: 4.57, 
        likes: 0, 
        link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/?c=750000000' 
      },
      { id: 5, 
        name: 'Apple MacBook Pro 14', 
        description: 'Ноутбук Apple MacBook Pro 14 2024 / 24 Гб / SSD 512 Гб / macOS / MX2H3', 
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pb6/p44/15673150.png?format=gallery-medium', 
        rating: 4.75, 
        likes: 0, 
        link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2024-24-gb-ssd-512-gb-macos-mx2h3-132140624/?c=750000000' 
        }
    ]},
    { name: 'Аксессуары для телефона', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQCO_x3DaZPCqgjmInAmkG0xMUeFIhH7OnwQ&s',
      products: [
      { id: 6, name: 'Наушники OEM', description: 'Наушники OEM P9 серебристый', image: 'https://resources.cdn-kaspi.kz/img/m/p/h07/h7a/84985846595614.jpg?format=gallery-medium', rating: 4.3, likes: 0, link: 'https://kaspi.kz/shop/p/oem-p9-serebristyi-116112464/?c=750000000' },
      { id: 7, name: 'Apple Watch', description: 'Смарт-часы Apple Watch SE GPS Gen.2 2024 S/M 40 мм бежевый', image: 'https://resources.cdn-kaspi.kz/img/m/p/p55/p9b/5542335.png?format=gallery-medium', rating: 4.8, likes: 0, link: 'https://kaspi.kz/shop/p/apple-watch-se-gps-gen-2-2024-s-m-40-mm-bezhevyi-129172890/?c=750000000' },
      { id: 8, name: 'Чехол', description: 'Чехол Для Apple iPhone 15 Pro прозрачный', image: 'https://resources.cdn-kaspi.kz/img/m/p/hfe/hea/83724869828638.jpg?format=gallery-medium', rating: 4.4, likes: 0, link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/?c=750000000' },
      { id: 9, name: 'AirPods Pro 2', description: 'Наушники Apple AirPods Pro 2 with Type-C/Wireless Charging белый', image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium', rating: 4.9, likes: 0, link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-with-type-c-wireless-charging-belyi-113677582/?c=750000000' },
      { id: 10, name: 'Apple EarPods', description: 'Наушники Apple EarPods Lightning белый', image: 'https://resources.cdn-kaspi.kz/img/m/p/hff/h5c/63764029243422.jpg?format=gallery-medium', rating: 4.1, likes: 0, link: 'https://kaspi.kz/shop/p/apple-earpods-lightning-belyi-4801876/?c=750000000' }
    ]},
    { name: 'Бытовая техника для дома', 
      image: 'https://good-bt.ru/wa-data/public/site/images/blog/1080h1920_01-1-1024x57gg.jpg',
      products: [
      { id: 11, name: 'Стиральная машина LG', description: 'Стиральная машина LG F2J3NS0W белый', image: 'https://resources.cdn-kaspi.kz/img/m/p/hd4/h94/63804412854302.jpg?format=gallery-medium', rating: 5, likes: 0, link: 'https://kaspi.kz/shop/p/lg-f2j3ns0w-belyi-3601511/?c=750000000' },
      { id: 12, name: 'Пылесос Samsung', description: 'Пылесос Samsung VCC4520S36/XEV синий', image: 'https://resources.cdn-kaspi.kz/img/m/p/h92/h53/63761733746718.jpg?format=gallery-medium', rating: 4.5, likes: 0, link: 'https://kaspi.kz/shop/p/samsung-vcc4520s36-xev-sinii-3701056/?c=750000000' },
      { id: 13, name: 'Робот-пылесос', description: 'Робот-пылесос Xiaomi Robot Vacuum S20 BHR8629EU белый', image: 'https://resources.cdn-kaspi.kz/img/m/p/hb1/had/86299588788254.jpg?format=gallery-medium', rating: 4.4, likes: 0, link: 'https://kaspi.kz/shop/p/xiaomi-robot-vacuum-s20-bhr8629eu-belyi-120489305/?c=750000000' },
      { id: 14, name: 'Пароочиститель Denx', description: 'Пароочиститель Denx SE8620 желтый', image: 'https://resources.cdn-kaspi.kz/img/m/p/p0f/pe6/25941750.JPG?format=gallery-medium', rating: 4.35, likes: 0, link: 'https://kaspi.kz/shop/p/denx-se8620-zheltyi-130443158/?c=750000000' },
      { id: 15, name: 'Пылесос Deerma', description: 'Пылесос Deerma DX115C черный', image: 'https://resources.cdn-kaspi.kz/img/m/p/h93/hcf/63791470936094.jpg?format=gallery-medium', rating: 4.5, likes: 0, link: 'https://kaspi.kz/shop/p/deerma-dx115c-chernyi-3701430/?c=750000000' }
    ]},
    { name: 'Бытовая техника для кухни', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-pP5HE0ieyubi8IHfxa6yWjyUoPr9bH7Ekg&s',
      products: [
      { id: 16, name: 'Кухонный комбайн', description: 'Кухонный комбайн KENWOOD KCL95.004SI Cooking Chef XL серебристый', image: 'https://resources.cdn-kaspi.kz/img/m/p/h72/he4/63921091969054.jpg?format=gallery-medium', rating: 4.2, likes: 0, link: 'https://kaspi.kz/shop/p/kenwood-kcl95-004si-cooking-chef-xl-serebristyi-100883789/?c=750000000' },
      { id: 17, name: 'Электрочайник', description: 'Электрочайник NEG YD-2035 бежевый', image: 'https://resources.cdn-kaspi.kz/img/m/p/pef/pf2/12006101.png?format=gallery-medium', rating: 4.8, likes: 0, link: 'https://kaspi.kz/shop/p/elektrochainik-neg-yd-2035-bezhevyi-121703269/?c=750000000' },
      { id: 18, name: 'Кофемашина', description: 'Кофемашина SOKANY SK-6862 серебристый', image: 'https://resources.cdn-kaspi.kz/img/m/p/p78/p3b/7463539.jpg?format=gallery-medium', rating: 4.45, likes: 0, link: 'https://kaspi.kz/shop/p/kofemashina-sokany-sk-6862-serebristyi-109791914/?c=750000000' },
      { id: 19, name: 'Микроволновая печь Hansa', description: 'Микроволновая печь Hansa AMMF19M1SH серебристый', image: 'https://resources.cdn-kaspi.kz/img/m/p/h37/h44/87138526232606.jpg?format=gallery-medium', rating: 4.4, likes: 0, link: 'https://kaspi.kz/shop/p/hansa-ammf19m1sh-serebristyi-123644190/?c=750000000' },
      { id: 20, name: 'Блендер Slaouwo', description: 'Блендер Slaouwo HB-2075 черный', image: 'https://resources.cdn-kaspi.kz/img/m/p/hfe/ha1/67141660606494.jpg?format=gallery-medium', rating: 4.5, likes: 0, link: 'https://kaspi.kz/shop/p/slaouwo-hb-2075-chernyi-108151055/?c=750000000' }
    ]}
  ];

  selectedCategory: { name: string; products: Product[] } | null = null;


  selectCategory(category: Category) {
    this.selectedCategory = category;
  }
}
