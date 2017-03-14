import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>hello</h1>
    <fa-databinding></fa-databinding>
    <app-lifecycle *ngIf="!delete" [bindable]="boundValue">
      <p #boundContent>{{test}}</p>
    </app-lifecycle>
    <br/>
    <button (click)="delete = true">Click to Delete</button>
    <button (click)="test = 'Changed value'">Click to Change Content</button>
    <button (click)="boundValue = 2000">Click to Change Binding</button>
  `
})
export class AppComponent {
  delete = false;
  test = "Starting Value";
  boundValue = 1000;
}
