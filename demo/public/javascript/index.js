function applyMixin(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
var NodeType;
(function (NodeType) {
    NodeType[NodeType["Unknown"] = 0] = "Unknown";
    NodeType[NodeType["Oscillator"] = 1] = "Oscillator";
    NodeType[NodeType["Buffer"] = 2] = "Buffer";
    NodeType[NodeType["BufferSource"] = 3] = "BufferSource";
    NodeType[NodeType["ElementSource"] = 4] = "ElementSource";
    NodeType[NodeType["StreamSource"] = 5] = "StreamSource";
    NodeType[NodeType["BiquadFilter"] = 6] = "BiquadFilter";
    NodeType[NodeType["Convolver"] = 7] = "Convolver";
    NodeType[NodeType["Delay"] = 8] = "Delay";
    NodeType[NodeType["Compressor"] = 9] = "Compressor";
    NodeType[NodeType["Gain"] = 10] = "Gain";
    NodeType[NodeType["Panner"] = 11] = "Panner";
    NodeType[NodeType["WaveShaper"] = 12] = "WaveShaper";
    NodeType[NodeType["PeriodicWave"] = 13] = "PeriodicWave";
    NodeType[NodeType["StreamDestination"] = 14] = "StreamDestination";
    NodeType[NodeType["Analyser"] = 15] = "Analyser";
    NodeType[NodeType["Splitter"] = 16] = "Splitter";
    NodeType[NodeType["Merger"] = 17] = "Merger";
})(NodeType || (NodeType = {}));
var AudioGraph = (function () {
    function AudioGraph(name) {
        this.nodes = [];
        this.name = name;
        var AudioContext = window.AudioContext || window.webkitAudioContext;
        this.context = new AudioContext();
        this.destination = this.context.destination;
    }
    AudioGraph.prototype.addNode = function (nodeType, args) {
        switch (nodeType) {
            case 1 /* Oscillator */:
                this.nodes.push(this.context.createOscillator());
                break;
            case 2 /* Buffer */:
                this.nodes.push(this.context.createBuffer(args[0], args[1], args[2]));
                break;
            case 3 /* BufferSource */:
                this.nodes.push(this.context.createBufferSource());
                break;
            case 4 /* ElementSource */:
                this.nodes.push(this.context.createMediaElementSource(args[0]));
                break;
            case 5 /* StreamSource */:
                this.nodes.push(this.context.createMediaStreamSource(args[0]));
                break;
            case 6 /* BiquadFilter */:
                this.nodes.push(this.context.createBiquadFilter());
                break;
            case 7 /* Convolver */:
                this.nodes.push(this.context.createConvolver());
                break;
            case 8 /* Delay */:
                this.nodes.push(this.context.createDelay(args[0]));
                break;
            case 9 /* Compressor */:
                this.nodes.push(this.context.createDynamicsCompressor());
                break;
            case 10 /* Gain */:
                this.nodes.push(this.context.createGain());
                break;
            case 11 /* Panner */:
                this.nodes.push(this.context.createPanner());
                break;
            case 12 /* WaveShaper */:
                this.nodes.push(this.context.createWaveShaper());
                break;
            case 13 /* PeriodicWave */:
                this.nodes.push(this.context.createPeriodicWave(args[0], args[1], args[2]));
                break;
            case 14 /* StreamDestination */:
                this.nodes.push(this.context.createMediaStreamDestination());
                break;
            case 15 /* Analyser */:
                this.nodes.push(this.context.createAnalyser());
                break;
            case 16 /* Splitter */:
                this.nodes.push(this.context.createChannelSplitter(args[0]));
                break;
            case 17 /* Merger */:
                this.nodes.push(this.context.createChannelMerger(args[0]));
                break;
            default:
                console.log("NodeType invalid");
        }
        // createMasterGain(startValue: number) {
        //     this.masterGain = this.context.createGain();
        //     this.masterGain.gain.value = 0.2;
        //     this.masterGain.connect(this.destination);
        //     console.log("Master gain node created for current audio context.")
        // }
    };
    return AudioGraph;
}());
//# sourceMappingURL=c:/Users/Dakota/Development/0-personal/typescript-modules/sb-audio-graph/index.js.map