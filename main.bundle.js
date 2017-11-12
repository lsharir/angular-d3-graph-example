webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<graph [nodes]=\"nodes\" [links]=\"links\"></graph>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__d3__ = __webpack_require__("../../../../../src/app/d3/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent() {
        this.nodes = [];
        this.links = [];
        var N = __WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* default */].N, getIndex = function (number) { return number - 1; };
        /** constructing the nodes array */
        for (var i = 1; i <= N; i++) {
            this.nodes.push(new __WEBPACK_IMPORTED_MODULE_2__d3__["d" /* Node */](i));
        }
        for (var i = 1; i <= N; i++) {
            for (var m = 2; i * m <= N; m++) {
                /** increasing connections toll on connecting nodes */
                this.nodes[getIndex(i)].linkCount++;
                this.nodes[getIndex(i * m)].linkCount++;
                /** connecting the nodes before starting the simulation */
                this.links.push(new __WEBPACK_IMPORTED_MODULE_2__d3__["c" /* Link */](i, i * m));
            }
        }
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var CONFIG = {
    N: 100,
    SPECTRUM: [
        // "rgb(222,237,250)"
        "rgb(176,212,243)",
        "rgb(128,186,236)",
        "rgb(77,158,228)",
        "rgb(38,137,223)",
        "rgb(0,116,217)",
        "rgb(0,106,197)"
        // "rgb(0,94,176)"
        // "rgb(0,82,154)"
        // "rgb(0,60,113)"
    ]
};
/* harmony default export */ __webpack_exports__["a"] = (CONFIG);


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__d3__ = __webpack_require__("../../../../../src/app/d3/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__visuals_graph_graph_component__ = __webpack_require__("../../../../../src/app/visuals/graph/graph.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__visuals_shared__ = __webpack_require__("../../../../../src/app/visuals/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__visuals_graph_graph_component__["a" /* GraphComponent */]
            ].concat(__WEBPACK_IMPORTED_MODULE_7__visuals_shared__["a" /* SHARED_VISUALS */], __WEBPACK_IMPORTED_MODULE_4__d3__["b" /* D3_DIRECTIVES */]),
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__d3__["a" /* D3Service */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/d3/d3.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__("../../../../../src/app/d3/models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3__ = __webpack_require__("../../../../d3/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var D3Service = (function () {
    /** This service will provide methods to enable user interaction with elements
      * while maintaining the d3 simulations physics
      */
    function D3Service() {
    }
    /** A method to bind a pan and zoom behaviour to an svg element */
    D3Service.prototype.applyZoomableBehaviour = function (svgElement, containerElement) {
        var svg, container, zoomed, zoom;
        svg = __WEBPACK_IMPORTED_MODULE_2_d3__["h" /* select */](svgElement);
        container = __WEBPACK_IMPORTED_MODULE_2_d3__["h" /* select */](containerElement);
        zoomed = function () {
            var transform = __WEBPACK_IMPORTED_MODULE_2_d3__["b" /* event */].transform;
            container.attr('transform', 'translate(' + transform.x + ',' + transform.y + ') scale(' + transform.k + ')');
        };
        zoom = __WEBPACK_IMPORTED_MODULE_2_d3__["i" /* zoom */]().on('zoom', zoomed);
        svg.call(zoom);
    };
    /** A method to bind a draggable behaviour to an svg element */
    D3Service.prototype.applyDraggableBehaviour = function (element, node, graph) {
        var d3element = __WEBPACK_IMPORTED_MODULE_2_d3__["h" /* select */](element);
        function started() {
            /** Preventing propagation of dragstart to parent elements */
            __WEBPACK_IMPORTED_MODULE_2_d3__["b" /* event */].sourceEvent.stopPropagation();
            if (!__WEBPACK_IMPORTED_MODULE_2_d3__["b" /* event */].active) {
                graph.simulation.alphaTarget(0.3).restart();
            }
            __WEBPACK_IMPORTED_MODULE_2_d3__["b" /* event */].on('drag', dragged).on('end', ended);
            function dragged() {
                node.fx = __WEBPACK_IMPORTED_MODULE_2_d3__["b" /* event */].x;
                node.fy = __WEBPACK_IMPORTED_MODULE_2_d3__["b" /* event */].y;
            }
            function ended() {
                if (!__WEBPACK_IMPORTED_MODULE_2_d3__["b" /* event */].active) {
                    graph.simulation.alphaTarget(0);
                }
                node.fx = null;
                node.fy = null;
            }
        }
        d3element.call(__WEBPACK_IMPORTED_MODULE_2_d3__["a" /* drag */]()
            .on('start', started));
    };
    /** The interactable graph we will simulate in this article
    * This method does not interact with the document, purely physical calculations with d3
    */
    D3Service.prototype.getForceDirectedGraph = function (nodes, links, options) {
        var sg = new __WEBPACK_IMPORTED_MODULE_1__models__["a" /* ForceDirectedGraph */](nodes, links, options);
        return sg;
    };
    D3Service = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], D3Service);
    return D3Service;
}());



/***/ }),

/***/ "../../../../../src/app/d3/directives/draggable.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DraggableDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__("../../../../../src/app/d3/models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__d3_service__ = __webpack_require__("../../../../../src/app/d3/d3.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DraggableDirective = (function () {
    function DraggableDirective(d3Service, _element) {
        this.d3Service = d3Service;
        this._element = _element;
    }
    DraggableDirective.prototype.ngOnInit = function () {
        this.d3Service.applyDraggableBehaviour(this._element.nativeElement, this.draggableNode, this.draggableInGraph);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])('draggableNode'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models__["c" /* Node */])
    ], DraggableDirective.prototype, "draggableNode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])('draggableInGraph'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models__["a" /* ForceDirectedGraph */])
    ], DraggableDirective.prototype, "draggableInGraph", void 0);
    DraggableDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Directive */])({
            selector: '[draggableNode]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__d3_service__["a" /* D3Service */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */]])
    ], DraggableDirective);
    return DraggableDirective;
}());



/***/ }),

/***/ "../../../../../src/app/d3/directives/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3_DIRECTIVES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__zoomable_directive__ = __webpack_require__("../../../../../src/app/d3/directives/zoomable.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__draggable_directive__ = __webpack_require__("../../../../../src/app/d3/directives/draggable.directive.ts");
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */




var D3_DIRECTIVES = [
    __WEBPACK_IMPORTED_MODULE_0__zoomable_directive__["a" /* ZoomableDirective */],
    __WEBPACK_IMPORTED_MODULE_1__draggable_directive__["a" /* DraggableDirective */]
];


/***/ }),

/***/ "../../../../../src/app/d3/directives/zoomable.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZoomableDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__d3_service__ = __webpack_require__("../../../../../src/app/d3/d3.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ZoomableDirective = (function () {
    function ZoomableDirective(d3Service, _element) {
        this.d3Service = d3Service;
        this._element = _element;
    }
    ZoomableDirective.prototype.ngOnInit = function () {
        this.d3Service.applyZoomableBehaviour(this.zoomableOf, this._element.nativeElement);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])('zoomableOf'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */])
    ], ZoomableDirective.prototype, "zoomableOf", void 0);
    ZoomableDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Directive */])({
            selector: '[zoomableOf]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__d3_service__["a" /* D3Service */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */]])
    ], ZoomableDirective);
    return ZoomableDirective;
}());



/***/ }),

/***/ "../../../../../src/app/d3/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__d3_service__ = __webpack_require__("../../../../../src/app/d3/d3.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__d3_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__("../../../../../src/app/d3/models/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__models__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__models__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives__ = __webpack_require__("../../../../../src/app/d3/directives/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__directives__["a"]; });





/***/ }),

/***/ "../../../../../src/app/d3/models/force-directed-graph.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForceDirectedGraph; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__link__ = __webpack_require__("../../../../../src/app/d3/models/link.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3__ = __webpack_require__("../../../../d3/index.js");



var FORCES = {
    LINKS: 1 / 50,
    COLLISION: 1,
    CHARGE: -1
};
var ForceDirectedGraph = (function () {
    function ForceDirectedGraph(nodes, links, options) {
        this.ticker = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.nodes = [];
        this.links = [];
        this.nodes = nodes;
        this.links = links;
        this.initSimulation(options);
    }
    ForceDirectedGraph.prototype.connectNodes = function (source, target) {
        var link;
        if (!this.nodes[source] || !this.nodes[target]) {
            throw new Error('One of the nodes does not exist');
        }
        link = new __WEBPACK_IMPORTED_MODULE_1__link__["a" /* Link */](source, target);
        this.simulation.stop();
        this.links.push(link);
        this.simulation.alphaTarget(0.3).restart();
        this.initLinks();
    };
    ForceDirectedGraph.prototype.initNodes = function () {
        if (!this.simulation) {
            throw new Error('simulation was not initialized yet');
        }
        this.simulation.nodes(this.nodes);
    };
    ForceDirectedGraph.prototype.initLinks = function () {
        if (!this.simulation) {
            throw new Error('simulation was not initialized yet');
        }
        this.simulation.force('links', __WEBPACK_IMPORTED_MODULE_2_d3__["e" /* forceLink */](this.links)
            .id(function (d) { return d['id']; })
            .strength(FORCES.LINKS));
    };
    ForceDirectedGraph.prototype.initSimulation = function (options) {
        if (!options || !options.width || !options.height) {
            throw new Error('missing options when initializing simulation');
        }
        /** Creating the simulation */
        if (!this.simulation) {
            var ticker_1 = this.ticker;
            this.simulation = __WEBPACK_IMPORTED_MODULE_2_d3__["g" /* forceSimulation */]()
                .force('charge', __WEBPACK_IMPORTED_MODULE_2_d3__["f" /* forceManyBody */]()
                .strength(function (d) { return FORCES.CHARGE * d['r']; }))
                .force('collide', __WEBPACK_IMPORTED_MODULE_2_d3__["d" /* forceCollide */]()
                .strength(FORCES.COLLISION)
                .radius(function (d) { return d['r'] + 5; }).iterations(2));
            // Connecting the d3 ticker to an angular event emitter
            this.simulation.on('tick', function () {
                ticker_1.emit(this);
            });
            this.initNodes();
            this.initLinks();
        }
        /** Updating the central force of the simulation */
        this.simulation.force('centers', __WEBPACK_IMPORTED_MODULE_2_d3__["c" /* forceCenter */](options.width / 2, options.height / 2));
        /** Restarting the simulation internal timer */
        this.simulation.restart();
    };
    return ForceDirectedGraph;
}());



/***/ }),

/***/ "../../../../../src/app/d3/models/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node__ = __webpack_require__("../../../../../src/app/d3/models/node.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__node__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__link__ = __webpack_require__("../../../../../src/app/d3/models/link.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__link__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__force_directed_graph__ = __webpack_require__("../../../../../src/app/d3/models/force-directed-graph.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__force_directed_graph__["a"]; });





/***/ }),

/***/ "../../../../../src/app/d3/models/link.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Link; });
var Link = (function () {
    function Link(source, target) {
        this.source = source;
        this.target = target;
    }
    return Link;
}());



/***/ }),

/***/ "../../../../../src/app/d3/models/node.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Node; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");

var Node = (function () {
    function Node(id) {
        var _this = this;
        this.linkCount = 0;
        this.normal = function () {
            return Math.sqrt(_this.linkCount / __WEBPACK_IMPORTED_MODULE_0__app_config__["a" /* default */].N);
        };
        this.id = id;
    }
    Object.defineProperty(Node.prototype, "r", {
        get: function () {
            return 50 * this.normal() + 10;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "fontSize", {
        get: function () {
            return (30 * this.normal() + 10) + 'px';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "color", {
        get: function () {
            var index = Math.floor(__WEBPACK_IMPORTED_MODULE_0__app_config__["a" /* default */].SPECTRUM.length * this.normal());
            return __WEBPACK_IMPORTED_MODULE_0__app_config__["a" /* default */].SPECTRUM[index];
        },
        enumerable: true,
        configurable: true
    });
    return Node;
}());



/***/ }),

/***/ "../../../../../src/app/visuals/graph/graph.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/visuals/graph/graph.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__d3__ = __webpack_require__("../../../../../src/app/d3/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GraphComponent = (function () {
    function GraphComponent(d3Service, ref) {
        this.d3Service = d3Service;
        this.ref = ref;
        this._options = { width: 800, height: 600 };
    }
    GraphComponent.prototype.onResize = function (event) {
        this.graph.initSimulation(this.options);
    };
    GraphComponent.prototype.ngOnInit = function () {
        var _this = this;
        /** Receiving an initialized simulated graph from our custom d3 service */
        this.graph = this.d3Service.getForceDirectedGraph(this.nodes, this.links, this.options);
        /** Binding change detection check on each tick
         * This along with an onPush change detection strategy should enforce checking only when relevant!
         * This improves scripting computation duration in a couple of tests I've made, consistently.
         * Also, it makes sense to avoid unnecessary checks when we are dealing only with simulations data binding.
         */
        this.graph.ticker.subscribe(function (d) {
            _this.ref.markForCheck();
        });
    };
    GraphComponent.prototype.ngAfterViewInit = function () {
        this.graph.initSimulation(this.options);
    };
    Object.defineProperty(GraphComponent.prototype, "options", {
        get: function () {
            return this._options = {
                width: window.innerWidth,
                height: window.innerHeight
            };
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])('nodes'),
        __metadata("design:type", Object)
    ], GraphComponent.prototype, "nodes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])('links'),
        __metadata("design:type", Object)
    ], GraphComponent.prototype, "links", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* HostListener */])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], GraphComponent.prototype, "onResize", null);
    GraphComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'graph',
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ChangeDetectionStrategy */].OnPush,
            template: "\n    <svg #svg [attr.width]=\"_options.width\" [attr.height]=\"_options.height\">\n      <g [zoomableOf]=\"svg\">\n        <g [linkVisual]=\"link\" *ngFor=\"let link of links\"></g>\n        <g [nodeVisual]=\"node\" *ngFor=\"let node of nodes\"\n            [draggableNode]=\"node\" [draggableInGraph]=\"graph\"></g>\n      </g>\n    </svg>\n  ",
            styles: [__webpack_require__("../../../../../src/app/visuals/graph/graph.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__d3__["a" /* D3Service */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */]])
    ], GraphComponent);
    return GraphComponent;
}());



/***/ }),

/***/ "../../../../../src/app/visuals/shared/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SHARED_VISUALS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_visual_node_visual_component__ = __webpack_require__("../../../../../src/app/visuals/shared/node-visual/node-visual.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__link_visual_link_visual_component__ = __webpack_require__("../../../../../src/app/visuals/shared/link-visual/link-visual.component.ts");
/* unused harmony namespace reexport */




var SHARED_VISUALS = [
    __WEBPACK_IMPORTED_MODULE_0__node_visual_node_visual_component__["a" /* NodeVisualComponent */],
    __WEBPACK_IMPORTED_MODULE_1__link_visual_link_visual_component__["a" /* LinkVisualComponent */]
];


/***/ }),

/***/ "../../../../../src/app/visuals/shared/link-visual/link-visual.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".link {\n    stroke-width: 0.25;\n    stroke: rgb(222,237,250);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/visuals/shared/link-visual/link-visual.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkVisualComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__d3__ = __webpack_require__("../../../../../src/app/d3/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LinkVisualComponent = (function () {
    function LinkVisualComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])('linkVisual'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__d3__["c" /* Link */])
    ], LinkVisualComponent.prototype, "link", void 0);
    LinkVisualComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '[linkVisual]',
            template: "\n    <svg:line\n        class=\"link\"\n        [attr.x1]=\"link.source.x\"\n        [attr.y1]=\"link.source.y\"\n        [attr.x2]=\"link.target.x\"\n        [attr.y2]=\"link.target.y\"\n    ></svg:line>\n  ",
            styles: [__webpack_require__("../../../../../src/app/visuals/shared/link-visual/link-visual.component.css")]
        })
    ], LinkVisualComponent);
    return LinkVisualComponent;
}());



/***/ }),

/***/ "../../../../../src/app/visuals/shared/node-visual/node-visual.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".node {\n    cursor: pointer;\n    transition: stroke-width 0.1s ease-out,\n        fill 0.1s ease-out,\n        stroke 0.1s ease-out;\n\n    stroke: white;\n    stroke-width: 0.25;\n}\n\n.node-name {\n  font-family: 'Lato';\n  text-anchor: middle;\n  alignment-baseline: central;\n  font-weight: 300;\n  fill: white;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/visuals/shared/node-visual/node-visual.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeVisualComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__d3__ = __webpack_require__("../../../../../src/app/d3/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NodeVisualComponent = (function () {
    function NodeVisualComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])('nodeVisual'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__d3__["d" /* Node */])
    ], NodeVisualComponent.prototype, "node", void 0);
    NodeVisualComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '[nodeVisual]',
            template: "\n    <svg:g [attr.transform]=\"'translate(' + node.x + ',' + node.y + ')'\">\n      <svg:circle\n          class=\"node\"\n          [attr.fill]=\"node.color\"\n          cx=\"0\"\n          cy=\"0\"\n          [attr.r]=\"node.r\">\n      </svg:circle>\n      <svg:text\n          class=\"node-name\"\n          [attr.font-size]=\"node.fontSize\">\n        {{node.id}}\n      </svg:text>\n    </svg:g>\n  ",
            styles: [__webpack_require__("../../../../../src/app/visuals/shared/node-visual/node-visual.component.css")]
        })
    ], NodeVisualComponent);
    return NodeVisualComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map