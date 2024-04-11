import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'; 
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { RessourceListComponent } from './Ressource/components/ressource-list/ressource-list.component'; 



@NgModule({
  declarations: [
    AppComponent,
    RessourceListComponent,
   
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
