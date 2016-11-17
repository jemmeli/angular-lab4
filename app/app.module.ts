import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//form
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
//component form
import { ClientFormComponent } from './client.form.component';


@NgModule({
    imports: [BrowserModule,FormsModule],
    declarations: [AppComponent,ClientFormComponent],
    bootstrap: [AppComponent],
    providers: []
})
export class AppModule { }