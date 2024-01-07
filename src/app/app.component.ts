// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  inputNumber!: number;
  outputText!: string;

  convertNumber() {
    this.outputText = this.convertDigitsToText(this.inputNumber);
  }

  convertDigitsToText(number: number): string {
    const units = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    const teens = ['Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const tens = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

    if (number === 0) {
      return 'Zero';
    }

    if (number < 0 || number > 999999) {
      return 'Invalid Input';
    }

    let result = '';

    if (Math.floor(number / 100000) > 0) {
      result += this.convertDigitsToText(Math.floor(number / 100000)) + ' Lakh ';
      number %= 100000;
    }

    if (Math.floor(number / 1000) > 0) {
      result += this.convertDigitsToText(Math.floor(number / 1000)) + ' Thousand ';
      number %= 1000;
    }

    if (Math.floor(number / 100) > 0) {
      result += units[Math.floor(number / 100)] + ' Hundred ';
      number %= 100;
    }

    if (number > 0) {
      if (number < 10) {
        result += units[number];
      } else if (number < 20) {
        result += teens[number - 11];
      } else {
        result += tens[Math.floor(number / 10)];
        if (number % 10 > 0) {
          result += ' ' + units[number % 10];
        }
      }
    }

    return result.trim();
  }
}
