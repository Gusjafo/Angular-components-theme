import { Component } from "@angular/core";
import { CommunicationService } from "./communication.service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrl: "app.component.scss",
})
export class AppComponent {
  title = "component-theme";
  darkTheme: boolean = false;

  constructor(private communication: CommunicationService) {}

  ngOnInit() {
    this.communication.darkMode.subscribe({
      next: (v) => (this.darkTheme = v),
      error: (e) => console.error(e),
      complete: () => console.info("complete"),
    });
  }
}
