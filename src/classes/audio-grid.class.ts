export default class AudioGrid {
    name: string = "Test";

    constructor(name: string) {
        this.name = name;
    }

    showName() {
        alert("My name is " + this.name + ".");
    }
}