import { Component, OnInit } from '@angular/core';
import { InMemoryComponent } from './inMemory.component';


@Component({
    selector: 'table-demo',
    templateUrl: './table.component.html',
    directives: [InMemoryComponent]
})
export class TableComponent implements OnInit {
    recentlyRemoveUsers: any[];
    recentlyRemoveUsersPluginServer: any[];
    private userId: number = 0;

    constructor() {
    }

    ngOnInit() { }
}
