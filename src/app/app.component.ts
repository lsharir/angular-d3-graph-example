import { Component } from '@angular/core';
import APP_CONFIG from './app.config';
import { Link } from './d3/models/link.model';
import { Node } from './d3/models/node.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    nodes: Node[] = [];
    links: Link[] = [];

    constructor() {
        const N = APP_CONFIG.N;
        const getIndex = nodeNumber => nodeNumber - 1;
        /** constructing the nodes array */
        for (let i = 1; i <= N; i++) {
            this.nodes.push(new Node(i));
        }

        for (let i = 1; i <= N; i++) {
            for (let m = 2; i * m <= N; m++) {
                /** increasing connections toll on connecting nodes */
                this.nodes[getIndex(i)].linkCount++;
                this.nodes[getIndex(i * m)].linkCount++;

                /** connecting the nodes before starting the simulation */
                this.links.push(new Link(i, i * m));
            }
        }
    }
}
