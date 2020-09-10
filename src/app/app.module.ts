import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageComponent } from './image/image.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ImageCropperModule } from 'ngx-image-cropper';
import { SignaturedComponent } from './signatured/signatured.component';
import { SignaturePadModule } from 'angular2-signaturepad';



@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    SignaturedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ImageCropperModule,
    SignaturePadModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
