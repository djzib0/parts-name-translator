import { Component } from '@angular/core';
import { Numpad } from "../numpad/numpad";
import { ChildComponent } from "../child-component/child-component";

@Component({
  selector: 'app-parent-component',
  imports: [Numpad, ChildComponent],
  templateUrl: './parent-component.html',
  styleUrl: './parent-component.css',
})
export class ParentComponent {

  nozzleDiameter: number = 0;
  parentTestValue = "this is parent test value"

  receiveValue(newValue: number): void {
    this.nozzleDiameter = newValue;
  }

  onChildClicked(newValue: string): void {
    this.parentTestValue = newValue
  }

}
