import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER } from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutMainComponent } from './layouts/layout-main/layout-main.component';
import { LayoutErrorComponent } from './layouts/layout-error/layout-error.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutMainComponent,
    LayoutErrorComponent
  ],
  imports: [
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
  bootstrap: [AppComponent]
})
export class AppModule { }
