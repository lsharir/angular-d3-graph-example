import { Component, Input, OnInit } from '@angular/core';
import { Link } from '../../../d3/models/link.model';

@Component({
    selector: 'g[app-link], app-link',
    templateUrl: './link.component.html',
    styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {
    @Input() link: Link;

    constructor() {
    }

    ngOnInit() {

    }

}
