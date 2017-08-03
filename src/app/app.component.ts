import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
        <h1>ngClass demo</h1>
          <div [ngClass]="{bold:isBold, strike:isStrike, highlight:isHighlight}">
            Hello, NgMigrate!!
          </div>
          <hr/>
          <div>
            <h3>Input via checkbox</h3>
            <p>
              Click each of the checkboxes to see the effect
            </p>
            <label><input type="checkbox" [(ngModel)]="isBold">Bold</label>
            <label><input type="checkbox" [(ngModel)]="isStrike">Strike</label>
            <label><input type="checkbox" [(ngModel)]="isHighlight">Highlight</label>
          </div>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    isBold = false;
    isStrike = false;
    isHighlight = false;


}
