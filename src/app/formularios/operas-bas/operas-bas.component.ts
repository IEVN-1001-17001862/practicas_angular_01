import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent {
  grados: string = '';
  resultado: number = 0;
  radioButton: string = '';

  calcular() {
    const grados = parseFloat(this.grados);


    switch (this.radioButton) {
      case 'Celsius':
        this.resultado = (grados * 9/5) + 32;
        break;
      case 'Farenheit':
        this.resultado = parseFloat(((grados - 32) * 5/9).toFixed(2));
        break;
      default:
        this.resultado = 0;
        break;
    }
  }
}
