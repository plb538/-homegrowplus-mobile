import { Plant } from "./plant";

/**
 * Representation of a tray in the HomeGrow+ unit. Contains a number of sectors which can each contain a plant
 */
export class Tray {

    //Array of plants
    private sectors: Array<Plant>;

    /**
     * Creates a new tray with the specified number of sectors.
     * @param numSectors 
     */
    constructor(numSectors: number) {
        this.sectors.fill(new Plant("Empty", Date.now()), numSectors);
    }

    /**
     * Returns an array of all plants in the tray
     */
    public getAllPlants() {
        return this.sectors;
    }

    /**
     * Removes the plant in a given sector. Will add a new plant called "Empty" in its place
     * @param sector Sector to be removed
     */
    public removePlant(sector: number) {
        this.sectors[sector] = new Plant("Empty", Date.now());
    }

    /**
     * Puts the specified plant in the specified sector
     * @param newPlant Plant to be added
     * @param sector Sector to put the plant in
     */
    public addPlant(newPlant: Plant, sector: number) {
        this.sectors[sector] = newPlant;
    }

    /**
     * Gets the plant in a particular sector
     * @param sector The sector to check
     */
    public getPlantBySector(sector: number) {
        return this.sectors[sector];
    }

}