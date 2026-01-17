import { Component, Input, signal, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-numpad',
  imports: [],
  templateUrl: './numpad.html',
  styleUrl: './numpad.css',
})
export class Numpad {

  @Input() passedValue: number = 0;
  @Output() changeDiameter = new EventEmitter<number>();
  @Output() showChildMessage = new EventEmitter<void>();

  showMessage(): void {
    console.log('child button clicked')
    this.showChildMessage.emit();
  }

  internalValue: number[] = []


  clickNum = (num: number): void => {
      this.internalValue.push(num)
      this.changeDiameter.emit(Number(this.internalValue.join('')))
  }

  clickBack(): void {
      this.internalValue.pop();
      this.changeDiameter.emit(Number(this.internalValue.join('')))
  }

  showPrivateResult() {
    return Number(this.internalValue.join(''))
  }

  showResult(): void {
      this.changeDiameter.emit(Number(this.internalValue.join('')))
  }

  

}
