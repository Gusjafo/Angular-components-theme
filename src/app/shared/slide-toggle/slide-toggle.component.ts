import { Component, EventEmitter, Output } from "@angular/core";
import { CommunicationService } from "../../communication.service";

@Component({
  selector: "app-slide-toggle",
  template: `
    <mat-slide-toggle
      [(ngModel)]="darkMode"
      (change)="toggleDarkMode()"></mat-slide-toggle>
  `,
  styles: ``,
})
export class SlideToggleComponent {
  darkMode = false;

  constructor(private communication: CommunicationService) {}

  toggleDarkMode() {
    this.communication.darkMode = this.darkMode;
  }
}
