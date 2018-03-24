export class Pump {
    private name: string;
    private status: boolean;

    constructor(_name: string, _status: boolean) {
        this.name = _name;
        this.status = _status;
    }

    public getPumpName(): string {
        return this.name;
    }

    public getPumpStatus(): boolean {
        return this.status;
    }

    public setPumpStatus(newStatus: boolean) {
        this.status = newStatus;
    }
}