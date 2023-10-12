import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { BrandComponent } from './pages/brand/brand.component';
import { CarModule } from './features/car/car.module';

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    CarModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
