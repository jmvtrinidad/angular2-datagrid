import { Component, OnInit } from '@angular/core';
import { NgDataGridModel } from './../datagrid/ng-datagrid.model';
import { PaginationComponent } from './../datagrid/pagination.component';
import { User } from './inMemory.model';
import './../utils/array.extensions';

@Component({
    selector: 'in-memory-demo',
    templateUrl: 'inMemory.component.html',
    directives: [ PaginationComponent ]
})
export class InMemoryComponent implements OnInit {
    table: NgDataGridModel<User>;
    recentlyRemoveUsers: any[];
    private userId: number = 0;

    constructor() {
        this.table = new NgDataGridModel<User>([]);
        for (this.userId = 0; this.userId < 150; this.userId++) {
            this.table.items.push(new User(this.userId, `user ${this.userId}`,
                                        `username${this.userId}`));
        }
    }

    ngOnInit() { }

    addRecordPlugin() {
        let userId = this.userId++;
        this.table.items.push(new User(userId, `user ${userId}`, `username${userId}`));
    }

    removeRecordPlugin(item) {
        this.recentlyRemoveUsers = this.table.items.remove(item);
    }

    removeAllEvenIdPlugin() {
        this.recentlyRemoveUsers = this.table.items
            .remove(item => item.userId % 2 === 0);
    }

    changedActiveStatus(e: any) {
        if (confirm('Do you want to include all filtered items?')) {
            this.table.itemsFiltered.forEach(user => user.active = e.target.checked);
        } else {
            this.table.itemsOnCurrentPage.forEach(user => user.active = e.target.checked);
        }
    }
}
