"use strict";
var AudioGraph = (function () {
    function AudioGraph(name) {
        this.name = "Test";
        this.name = name;
    }
    AudioGraph.prototype.showName = function () {
        alert("My name is " + this.name + ".");
    };
    return AudioGraph;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AudioGraph;
//# sourceMappingURL=c:/Users/Dakota/Development/0-personal/typescript-modules/sb-audio-graph/classes/audio-graph.class.js.map