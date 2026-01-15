import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-numpad',
  imports: [],
  templateUrl: './numpad.html',
  styleUrl: './numpad.css',
})
export class Numpad {

  result: number[] = [];

  clickNum = (num: number) => {
    this.result.push(num)
  }

  clickBack() {
    this.result.pop();
  }

  showResult() {
      let resultString = ""
      console.log(this.result)
      for (let item of this.result) {
        resultString += item.toString();
      }
      return resultString
    }
  
}
