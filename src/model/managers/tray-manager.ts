import { Tray } from "../components/tray";

/**
 * Handles all the interactions with the trays
 */
export class TrayManager {

    private trays: Array<Tray> = [];

    /**
     * Get a particular tray from the array
     * @param tray numerical index for the array
     */
    public getTray(tray: number): Tray {
        if (tray > this.trays.length) {
            return;
        }
        return this.trays[tray];
    }

    /**
     * Adds a new tray with a specified number of sectors
     * @param numSectors 
     */
    public addTray(numSectors: number) {
        this.trays.push(new Tray(numSectors))
    }

    /**
     * Returns all the trays in array form
     */
    public getAllTrays(): Array<Tray> {
        return this.trays;
    }
}