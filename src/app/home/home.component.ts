import { Component, OnInit } from '@angular/core';
declare function require(name: string);

@Component({
    selector: 'home',
    template: `
        <div [innerHTML]="body"></div>
    `
})
export class HomeComponent implements OnInit {
    body: string = require('./../../../README.md');

    constructor() { }

    ngOnInit() { }

}
