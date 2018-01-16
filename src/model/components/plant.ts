/**
 * Representation of a plant. Contains a name and a timestamp for when it was planted
 */
export class Plant {

    //Private storage for the variables - These cannot be changed after being craeted
    private name: string;
    private datePlanted: number;

    /**
     * Creates a new plant
     * @param _name 
     * @param _datePlanted 
     */
    constructor(_name: string, _datePlanted: number) {
        this.name = _name;
        this.datePlanted = _datePlanted;
    }

    /**
     * Returns the name of the plant
     */
    public getName(): string {
        return this.name;
    }

    /**
     * Returns the time the plant was planted
     */
    public getDatePlanted(): number {
        return this.datePlanted;
    }

}