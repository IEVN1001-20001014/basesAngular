import { Component } from '@angular/core';
import { IProductos } from '../productos';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  imageWidth:number=300;
  imageMargin:number=3;
  muestraImg:boolean=true;
  listFilter:string='';
  mostrarImagen():void{
    this.muestraImg=!this.muestraImg
  }

  productos:IProductos[]=[
    {
      "ProductoId":1,
      "Modelo":"Sentra",
      "Descripcion":"2 puertas",
      "Year":"febrero 2 2020",
      "Precio":20000,
      "Color":"Azul",
      "Marca":"AUDI",
      "ImageUrl":"https://www.nissan.com.mx/content/dam/Nissan/mexico/assets/sentra/my24/vap/nissan-2024-sentra_sense_tm-d.jpg.ximg.l_12_m.smart.jpg"
    },
    {
      "ProductoId":2,
      "Modelo":"A4",
      "Descripcion":"4 puertas",
      "Year":"marzo 12 2021",
      "Precio":120000,
      "Color":"Blanco",
      "Marca":"NISSAN",
      "ImageUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVekYGBMRWkH4-dsoCa5rAoHQwiFoIm5VD8w&s"
    },
    {
      "ProductoId":3,
      "Modelo":"Rio",
      "Descripcion":"2 puertas",
      "Year":"febrero 2 2005",
      "Precio":70000,
      "Color":"Rojo",
      "Marca":"BMW",
      "ImageUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ63xVtaNERfxeg6Oi5NipBB5HCg90tnrzYHw&s"
    },
  ]
}
