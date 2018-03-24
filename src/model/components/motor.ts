export class Motor {
    private name: string;
    private status: boolean;

    constructor(_name: string, _status: boolean) {
        this.name = _name;
        this.status = _status;
    }

    public getMotorName(): string {
        return this.name;
    }

    public getMotorStatus(): boolean {
        return this.status;
    }

    public setPumpStatus(newStatus: boolean) {
        this.status = newStatus;
    }
}