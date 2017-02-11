interface Constructable<T> {
    new (): T;
}
function applyMixin(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
const enum NodeType {
    Unknown = 0,
    Oscillator,
    Buffer,
    BufferSource,
    ElementSource,
    StreamSource,
    BiquadFilter,
    Convolver,
    Delay,
    Compressor,
    Gain,
    Panner,
    WaveShaper,
    PeriodicWave,
    StreamDestination,
    Analyser,
    Splitter,
    Merger
}
class AudioGraph {

    private context: AudioContext;
    readonly destination: AudioDestinationNode;
    readonly name: string;
    audioBuffer: AudioBuffer;
    mediaStream: MediaStreamAudioSourceNode;
    masterGain: GainNode;
    nodes: any[] = [];

    constructor(name: string) {
        this.name = name;
        let AudioContext = window.AudioContext || (<any>window).webkitAudioContext;
        this.context = new AudioContext();
        this.destination = this.context.destination;
    }

    addNode(nodeType: NodeType, args?: any[]): void {
        switch (nodeType) {
            case NodeType.Oscillator:
                this.nodes.push(this.context.createOscillator());
                break;
            case NodeType.Buffer:
                this.nodes.push(this.context.createBuffer(args[0], args[1], args[2]));
                break;
            case NodeType.BufferSource:
                this.nodes.push(this.context.createBufferSource());
                break;
            case NodeType.ElementSource:
                this.nodes.push(this.context.createMediaElementSource(args[0]));
                break;
            case NodeType.StreamSource:
                this.nodes.push(this.context.createMediaStreamSource(args[0]));
                break;
            case NodeType.BiquadFilter:
                this.nodes.push(this.context.createBiquadFilter());
                break;
            case NodeType.Convolver:
                this.nodes.push(this.context.createConvolver());
                break;
            case NodeType.Delay:
                this.nodes.push(this.context.createDelay(args[0]));
                break;
            case NodeType.Compressor:
                this.nodes.push(this.context.createDynamicsCompressor());
                break;
            case NodeType.Gain:
                this.nodes.push(this.context.createGain());
                break;
            case NodeType.Panner:
                this.nodes.push(this.context.createPanner());
                break;
            case NodeType.WaveShaper:
                this.nodes.push(this.context.createWaveShaper());
                break;
            case NodeType.PeriodicWave:
                this.nodes.push(this.context.createPeriodicWave(args[0], args[1], args[2]));
                break;
            case NodeType.StreamDestination:
                this.nodes.push(this.context.createMediaStreamDestination());
                break;
            case NodeType.Analyser:
                this.nodes.push(this.context.createAnalyser());
                break;
            case NodeType.Splitter:
                this.nodes.push(this.context.createChannelSplitter(args[0]));
                break;
            case NodeType.Merger:
                this.nodes.push(this.context.createChannelMerger(args[0]));
                break;
            default:
                console.log("NodeType invalid")
        }
        // createMasterGain(startValue: number) {
        //     this.masterGain = this.context.createGain();
        //     this.masterGain.gain.value = 0.2;
        //     this.masterGain.connect(this.destination);
        //     console.log("Master gain node created for current audio context.")
        // }
    }
}
