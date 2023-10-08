import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {
  // Declarar propiedades para almacenar los datos del formulario
  nombre: string = '';
  cantidadCompradores: number = 0;
  tieneTarjetaCineco: boolean = false;
  cantidadBoletos: number = 0;
  valorPagar: number = 0;

  // Función para procesar el formulario
  procesarFormulario(formulario: any) {
    // Realiza cualquier lógica de procesamiento necesaria aquí
    // Puedes acceder a las propiedades del formulario (nombre, cantidadCompradores, etc.) dentro de esta función.

    // Ejemplo: Calcular el valor a pagar en base a la cantidad de boletos
    this.valorPagar = this.cantidadBoletos * 10; // Suponiendo un costo fijo de $10 por boleto

}
}
