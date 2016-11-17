import {Component} from '@angular/core';
import {Client} from './client';
//form
import { NgForm } from '@angular/forms';

@Component({
    selector: 'client-form',
    templateUrl: 'app/html/Formulaire.html',
    styles: [`
         .ng-valid { border-color: green; } 
         .ng-invalid { border-color: red; } 
    `]
})

export class ClientFormComponent {

    private Sexes = [
        {Code: 'H', Libelle: 'Homme'},
        {Code: 'F', Libelle: 'Femme'}
    ];

    public client:Client = new Client();

    constructor() {
        this.client.Nom = "CHAABANE";
        this.client.Prenom = "Ramy";
        this.client.Sexe="H";
        this.client.AdresseMail="test@gmail.com";
    }
    /*

    onClick_Valider(value:Client):void {
        console.log(value);
    }
    */
    onClick_Valider(form:NgForm): void {
        console.log(form.value);
        form.resetForm();
    }

    onClick_Annuler():void {
        console.log("Annuler");
    }

}