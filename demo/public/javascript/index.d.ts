interface Constructable<T> {
    new (): T;
}
declare function applyMixin(derivedCtor: any, baseCtors: any[]): void;
declare const enum NodeType {
    Unknown = 0,
    Oscillator = 1,
    Buffer = 2,
    BufferSource = 3,
    ElementSource = 4,
    StreamSource = 5,
    BiquadFilter = 6,
    Convolver = 7,
    Delay = 8,
    Compressor = 9,
    Gain = 10,
    Panner = 11,
    WaveShaper = 12,
    PeriodicWave = 13,
    StreamDestination = 14,
    Analyser = 15,
    Splitter = 16,
    Merger = 17,
}
declare class AudioGraph {
    private context;
    readonly destination: AudioDestinationNode;
    readonly name: string;
    audioBuffer: AudioBuffer;
    mediaStream: MediaStreamAudioSourceNode;
    masterGain: GainNode;
    nodes: any[];
    constructor(name: string);
    addNode(nodeType: NodeType, args?: any[]): void;
}
