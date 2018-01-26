﻿class Cashier {

    public fullName: string;
    private _cinemaName: string;
    private _age: number;

    //***********way 1 -  to create a setter and a getter function*********

    //get - will return the value of the private member
    //will allways return the member type, and will never get parameters
    public getCinemaName(): string {
        return this._cinemaName;
    }

    //set - will change the value of the private member
    //will allways return void, and will get a single parameter with the member type
    public setCinemaName(cinemaName: string): void {
        if (cinemaName == "YesPlanet" || cinemaName == "CinemaCity") {
            this._cinemaName = cinemaName;
        }

    }


    //***********way 2 -  to create a setter and a getter property*********
    public get age(): number {
        return this._age;
    }


    public set age(ageProp: number) {
        if (ageProp >= 17 && ageProp <= 80)
            this._age = ageProp;
    }


    //default value for parameter
    public setAllProperties(ageProp: number = 18,
        CinemaName: string = "CinemaCity",
        fullName: string = "Bob"): void {
        this.age = ageProp;
        this.setCinemaName(CinemaName);
        this.fullName = fullName;

        document.write(`---------- Cashier Info setAllProperties-------<br/>`);
        document.write(`age: ${this.age}<br/>`);
        document.write(`CinemaName: ${this.getCinemaName()}<br/>`);
        document.write(`fullName: ${this.fullName}<br/>`);
    }


    //optional parameter
    public setSomeProperties(ageProp: number,
        fullName?: string): void {
        this.age = ageProp;
        this.fullName = fullName;

        document.write(`---------- Cashier Info setSomeProperties-------<br/>`);
        document.write(`age: ${this.age}<br/>`);
        document.write(`fullName: ${this.fullName}<br/>`);
    }


}