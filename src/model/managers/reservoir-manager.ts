import { Reservoir } from "../components/reservoir";

/**
 * Handles all the interactions with the reservoirs/pumps
 */
export class ReservoirManager {

    //Create a reservoir for each
    //Each reservoir has a pump at the bottom
    private fluids: Array<Reservoir> = [
        new Reservoir("cleanwater", -1),
        new Reservoir("drainwater", -1),
        new Reservoir("nitrogen", -1),
        new Reservoir("phosphorus", -1),
        new Reservoir("potassium", -1),
        new Reservoir("acid", -1),
        new Reservoir("base", -1),
        new Reservoir("mixer", -1)
    ];

    /**
     * Returns an array of strings with all the reservoir names
     */
    public getReservoirNames() {
        let temp: Array<string> = [];
        for (let each of this.fluids) {
            temp.push(each.getFluidName());
        }
        return temp;
    }

    /**
     * Returns an array of numbers with all the reservoir levels
     */
    public getFluidLevels() {
        let temp: Array<number> = [];
        for (let each of this.fluids) {
            temp.push(each.getLevel());
        }
        return temp;
    }

    /**
     * Gets a tuple array of the name and level for each reservoir eg. [{name: string, level:number}]
     */
    public getAllFluidDetails() {
        let names = this.getReservoirNames();
        let levels = this.getFluidLevels();
        if (names.length !== levels.length) {
            console.error("Mismatched number of fluids");
            return undefined;
        }
        let details: [{ name: string, level: number }];
        for (let i = 0; i < names.length; i++) {
            details.push({ name: names[i], level: levels[i] });
        }
    }

    /**
     * Get the fluid level for a particular reservoir
     * @param fluid What one you want to check
     */
    public getSingleFluidLevel(fluid: string) {
        this.fluids.filter(
            (reservoir: Reservoir) => {
                if (reservoir.getFluidName() == fluid) {
                    return reservoir.getLevel();
                }
            }
        )
    }

    /**
     * Sets the level in the model. Called by REST client service
     * @param fluid Fluid that is being set
     * @param newLevel The new fluid level
     */
    public updateFluidLevel(fluid: string, newLevel: number) {
        this.fluids.filter(
            (reservoir: Reservoir) => {
                if (reservoir.getFluidName() == fluid) {
                    reservoir.updateLevel(newLevel);
                    return;
                }
            }
        )
    }

    /**
     * Get the pump status for a particular reservoir
     * @param fluid The fluid we are getting
     */
    public getPumpStatus(fluid: string) {
        this.fluids.filter(
            (reservoir: Reservoir) => {
                if (reservoir.getFluidName() == fluid) {
                    return reservoir.isPumpOn();
                }
            }
        )
    }

    /**
     * Sets the pump status in the model. Called by the REST client service
     * @param fluid The fluid we are setting
     * @param status The status of the pump (on=true, off=false)
     */
    public setPumpStatus(fluid: string, status: boolean) {
        this.fluids.filter(
            (reservoir: Reservoir) => {
                if (reservoir.getFluidName() == fluid) {
                    reservoir.updatePumpStatus(status);
                    return;
                }
            }
        )
    }
}