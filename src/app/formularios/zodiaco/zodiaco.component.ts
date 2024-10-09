import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-zodiaco',
  templateUrl: './zodiaco.component.html',
  styleUrls: ['./zodiaco.component.css']
})
export class ZodiacoComponent implements OnInit {
  formulario!: FormGroup;
  resultado: string = '';
  signoChinoUrl: string = '';  

  constructor() {}

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellidoPaterno: new FormControl('', Validators.required),
      apellidoMaterno: new FormControl('', Validators.required),
      dia: new FormControl('', Validators.required),
      mes: new FormControl('', Validators.required),
      anio: new FormControl('', Validators.required),
      sexo: new FormControl('hombre', Validators.required)
    });
  }

  calcularEdad(anio: number, mes: number, dia: number): number {
    const fechaNacimiento = new Date(anio, mes - 1, dia);
    const hoy = new Date();
    
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mesActual = hoy.getMonth();
    const diaActual = hoy.getDate();
    
    // Si aún no ha cumplido años este año, restamos 1
    if (mesActual < mes - 1 || (mesActual === mes - 1 && diaActual < dia)) {
      edad--;
    }
    
    return edad;
  }

  imprimirDatos(): void {
    const nombre = this.formulario.get('nombre')?.value;
    const apellidoPaterno = this.formulario.get('apellidoPaterno')?.value;
    const apellidoMaterno = this.formulario.get('apellidoMaterno')?.value;
    const dia = this.formulario.get('dia')?.value;
    const mes = this.formulario.get('mes')?.value;
    const anio = this.formulario.get('anio')?.value;
    const sexo = this.formulario.get('sexo')?.value;

    const signosChinos = [
      'Rata', 'Buey', 'Tigre', 'Conejo', 'Dragón', 'Serpiente', 'Caballo', 'Cabra', 'Mono', 'Gallo', 'Perro', 'Cerdo'
    ];
    const signoIndex = (anio - 4) % 12;
    const signoChino = signosChinos[signoIndex];
    const edad = this.calcularEdad(anio, mes, dia);
    
    const imagenesSignos: {[key: string]: string} = {
      'Rata': 'https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Rata-768x657-1.jpg',
      'Buey': 'https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Buey-768x657-1.jpg',
      'Tigre': 'https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Tigre-768x657-1.jpg',
      'Conejo': 'https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Conejo-768x657-1.jpg',
      'Dragón': 'https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Dragon-768x657-1.jpg',
      'Serpiente': 'https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Serpiente-768x657-1.jpg',
      'Caballo': 'https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Caballo-768x657-1.jpg',
      'Cabra': 'https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Cabra-768x657-1.jpg',
      'Mono': 'https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Mono-768x657-1.jpg',
      'Gallo': 'https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Gallo-768x657-1.jpg',
      'Perro': 'https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Perro-768x657-1.jpg',
      'Cerdo': 'https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Cerdo-768x657-1.jpg'
    };

    this.signoChinoUrl = imagenesSignos[signoChino]; 

    this.resultado = `Nombre Completo: ${nombre} ${apellidoPaterno} ${apellidoMaterno} <br>
    Fecha de Nacimiento: ${dia}/${mes}/${anio} <br>
    Sexo: ${sexo} <br>
    Edad: ${edad} años <br>
    Signo Chino: ${signoChino}`;

  }
}
