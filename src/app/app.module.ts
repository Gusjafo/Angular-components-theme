import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';

import { SlideToggleComponent } from './shared/slide-toggle/slide-toggle.component';
import { ButtonExampleComponent } from './shared/button-example/button-example.component';
import { CardComponent } from './shared/card/card.component';
import { SeparatorComponent } from './shared/separator/separator.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideToggleComponent,
    ButtonExampleComponent,
    CardComponent,
    SeparatorComponent,
    ToolbarComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
