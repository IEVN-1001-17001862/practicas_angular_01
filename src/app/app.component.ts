import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = '';
  cantidadCompradores: number = 0;
  tieneTarjetaCineco: boolean = false;
  cantidadBoletos: number = 0;
  valorPagar: number = 0;

  procesarFormulario() {
    if (this.cantidadBoletos > 7) {
      console.log("No se pueden comprar más de 7 boletas por persona.");
      return;
    }

    let valorSinDescuento = this.cantidadBoletos * 12000;

    if (this.cantidadBoletos > 5) {
      valorSinDescuento *= 0.85;
    } else if (this.cantidadBoletos >= 3) {
      valorSinDescuento *= 0.9;
    }

    if (this.tieneTarjetaCineco) {
      valorSinDescuento *= 0.9;
    }

    this.valorPagar = valorSinDescuento;
    alert("Nombre: "+this.nombre +"\nCantidad De Boletos: "+this.cantidadBoletos+"\nTiene tarjeta Cineco: "+(this.tieneTarjetaCineco ? 'Si' : 'No') + "\nValor por pagar: $"+this.valorPagar )
   
  }
}
