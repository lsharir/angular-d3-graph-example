import { Node } from './node.model';
import * as d3 from 'd3';

export class Link implements d3.SimulationLinkDatum<Node> {
    // Optional - defining optional implementation properties - required for relevant typing assistance
    index?: number;

    // Must - defining enforced implementation properties
    source: Node | string | number;
    target: Node | string | number;

    constructor(source, target) {
        this.source = source;
        this.target = target;
    }
}
