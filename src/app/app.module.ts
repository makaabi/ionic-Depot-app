import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogRef, MatDialogModule,MAT_DIALOG_DATA } from '@angular/material/dialog';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, BrowserAnimationsModule,    MatDialogModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },{ provide: MAT_DIALOG_DATA, useValue: {} ,},{ provide: MatDialogRef, useValue: {} }],
  bootstrap: [AppComponent],
})
export class AppModule {}
