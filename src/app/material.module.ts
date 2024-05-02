import { NgModule } from "@angular/core";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";

import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTableModule } from "@angular/material/table";
import { MatTooltipModule } from "@angular/material/tooltip";

@NgModule({
  declarations: [],
  imports: [
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MatToolbarModule,
    MatTableModule,
    MatTooltipModule,
  ],
  exports: [
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MatToolbarModule,
    MatTableModule,
    MatTooltipModule,
  ],
  providers: [provideAnimationsAsync()],
})
export class MaterialModule {}
