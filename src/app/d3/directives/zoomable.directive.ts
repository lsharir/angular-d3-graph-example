import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { D3Service } from '../d3.service';

@Directive({
    selector: 'g[appZoomable],appZoomable'
})
export class ZoomableDirective implements OnInit {
    @Input() zoomableOf: ElementRef;

    constructor(/*::::::::::||{/\}||::::::::::*/
                private d3Service: D3Service,
                private elementRef: ElementRef,
                /*::::::::::||{/\}||::::::::::*/) {
    }

    ngOnInit() {
        this.d3Service.applyZoomableBehaviour(this.zoomableOf, this.elementRef.nativeElement);
    }
}
