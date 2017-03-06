import { Directive, Input, ElementRef } from '@angular/core';
import { D3Service } from '../';

@Directive({
    selector: '[zoomableOf]'
})
export class ZoomableDirective {
    @Input('zoomableOf') containerElement: ElementRef;

    constructor(private d3Service: D3Service, private _element: ElementRef) {}

    ngOnInit() {
        this.d3Service.applyZoomableBehaviour(this.containerElement, this._element.nativeElement);
    }
}