import { Pump } from "../components/pump";

export class PumpManager {
    private pumps: Array<Pump> = [
        new Pump("mixer", false),
        new Pump("mister", false),
        new Pump("clean_water", false),
        new Pump("drain_water", false),
        new Pump("drain_out", false),
        new Pump("nutrients", false),
        new Pump("acid", false),
        new Pump("base", false)
    ];

    public getPump(pumpName: string): Pump {
        let result: Pump = undefined;
        this.pumps.filter(
            (pump: Pump) => {
                if (pump.getPumpName() == pumpName) {
                    result = pump;
                }
            }
        );
        return result;
    }

    public getAllPumps() {
        return this.pumps;
    }
}