import { Component, Input, OnInit } from '@angular/core';
import { Node } from '../../../d3/models/node.model';

@Component({
    selector: 'g[app-node], app-node',
    templateUrl: './node.component.html',
    styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit {
    @Input() node: Node;

    constructor() {
    }

    ngOnInit() {
    }

}
