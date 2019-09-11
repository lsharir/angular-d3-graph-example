import {
    AfterViewInit,
    ChangeDetectorRef,
    // ChangeDetectionStrategy,
    Component,
    HostListener,
    Input,
    OnInit
} from '@angular/core';
import { D3Service } from '../../d3/d3.service';
import { ForceDirectedGraph } from '../../d3/models/force-directed-graph.model';
// import { Node } from '../../d3/models/node.model';
// import { Link } from '../../d3/models/link.model';

@Component({
    selector: 'app-graph',
    templateUrl: './graph.component.html',
    styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements AfterViewInit, OnInit {

    @Input() public nodes;
    @Input() public links;
    public graph: ForceDirectedGraph;
    public windowOptions: { width, height } = {width: 800, height: 600};

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.graph.initSimulation(this.options);
    }

    constructor(/*gggggg()(|I|)()gggggg*/
                private d3Service: D3Service,
                private ref: ChangeDetectorRef
                /*gggggg()(|I|)()gggggg*/) {
    }

    ngOnInit() {
        /** Receiving an initialized simulated graph from our custom d3 service */
        this.graph = this.d3Service.getForceDirectedGraph(this.nodes, this.links, this.options);

        /** Binding change detection check on each tick
         * This along with an onPush change detection strategy should enforce checking only when relevant!
         * This improves scripting computation duration in a couple of tests I've made, consistently.
         * Also, it makes sense to avoid unnecessary checks when we are dealing only with simulations data binding.
         */
        this.graph.ticker.subscribe((d) => {
            this.ref.markForCheck();
        });

        // console.log(
        //     '\n:::::::::::::::::::::::::::::::::::::: GraphComponent ngOnInit :::::::::::::::::::::::::::::::::::::::::::::::::::',
        //     '\n::this::', this,
        //     '\n::this.nodes::', this.nodes,
        //     '\n::this.links::', this.links,
        //     '\n:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::'
        // );
    }

    ngAfterViewInit() {
        this.graph.initSimulation(this.options);
    }

    get options() {
        return this.windowOptions = {
            width: window.innerWidth,
            height: window.innerHeight
        };
    }
}
