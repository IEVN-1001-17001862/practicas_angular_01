import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent {
  num1: string = '';
  num2: string = '';
  resultado: number = 0;
  radioButton: string = '';

  calcular() {
    const num1 = parseFloat(this.num1);
    const num2 = parseFloat(this.num2);

    switch (this.radioButton) {
      case 'Sumar':
        this.resultado = num1 + num2;
        break;
      case 'Restar':
        this.resultado = num1 - num2;
        break;
      case 'Multiplicar':
        this.resultado = num1 * num2;
        break;
      case 'Dividir':
        if (num2 !== 0) {
          this.resultado = num1 / num2;
        } else {
          this.resultado = NaN; 
        }
        break;
      default:
        this.resultado = 0;
        break;
    }
  }
}