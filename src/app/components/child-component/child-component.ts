import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  imports: [],
  templateUrl: './child-component.html',
  styleUrl: './child-component.css',
})
export class ChildComponent {

  @Input() passedDiameter = 0;
  @Output() valueChanged = new EventEmitter<number>();

  private nozzleDiameter = 0;

  increase() {
    this.nozzleDiameter++
    this.valueChanged.emit(this.nozzleDiameter)
  }

  decrease() {
    this.nozzleDiameter--
    this.valueChanged.emit(this.nozzleDiameter)
  }

 }
