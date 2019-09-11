import { Directive, Input, ElementRef, OnInit } from '@angular/core';
import { Node } from '../models/node.model';
import { ForceDirectedGraph } from '../models/force-directed-graph.model';
import { D3Service } from '../d3.service';

@Directive({
    selector: 'g[appDraggable],appDraggable',
    // inputs: ['draggableNode: Node', 'draggableInGraph: ForceDirectedGraph'],
})
export class DraggableDirective implements OnInit {

    @Input() draggableNode: Node;
    @Input() draggableInGraph: ForceDirectedGraph;

    constructor(/*::::::::::||{/\}||::::::::::*/
                private d3Service: D3Service,
                private elementRef: ElementRef
                /*::::::::::||{/\}||::::::::::*/) {
    }

    ngOnInit() {
        this.d3Service.applyDraggableBehaviour(this.elementRef.nativeElement, this.draggableNode, this.draggableInGraph);
        // console.log(
        //     '\n:::::::::::::::::::::::::::::::::::::: DraggableDirective ngOnInit :::::::::::::::::::::::::::::::::::::::::::::::::::',
        //     '\n::this::', this,
        //     '\n::this.draggableNode::', this.draggableNode,
        //     '\n::this.draggableInGraph::', this.draggableInGraph,
        //     '\n:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::'
        // );
    }

}
