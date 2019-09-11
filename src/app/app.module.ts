import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { D3Service } from './d3/d3.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphComponent } from './visuals/graph/graph.component';
import { NodeComponent } from './visuals/shared/node/node.component';
import { LinkComponent } from './visuals/shared/link/link.component';
import { DraggableDirective } from './d3/directives/draggable.directive';
import { ZoomableDirective } from './d3/directives/zoomable.directive';

@NgModule({
    declarations: [
        AppComponent,
        GraphComponent,
        NodeComponent,
        LinkComponent,
        DraggableDirective,
        ZoomableDirective

    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [D3Service],
    bootstrap: [AppComponent]
})
export class AppModule {
}
