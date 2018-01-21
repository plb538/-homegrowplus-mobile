import { ReservoirManager } from "../managers/reservoir-manager";
import { TrayManager } from "../managers/tray-manager";
import { LightManager } from "../managers/light-manager";
import { ScheduleManager } from "../managers/schedule-manager";

/**
 * Class representing the HomeGrow+ Unit
 * Contains managers for other components eg. reservoirs, trays, lights
 */
export class Grower {
    public reservoirs: ReservoirManager = new ReservoirManager();
    public trays: TrayManager = new TrayManager();
    public lights: LightManager = new LightManager();
    public schedules: ScheduleManager = new ScheduleManager();
}