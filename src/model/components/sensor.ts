export class Sensor {
    private name: string;
    private type: any;
    private value: string;

    constructor(_name: string, _type: any, _value: string) {
        this.name = _name;
        this.type = _type;
        this.value = _value;
    }

    public getName(): string {
        return this.name;
    }

    public getType(): any {
        return this.type;
    }

    public getValue(): string {
        return this.value;
    }

    public setValue(newValue: string) {
        this.value = newValue;
    }
}