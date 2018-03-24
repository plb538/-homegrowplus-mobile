import { ReservoirManager } from "../managers/reservoir-manager";
import { TrayManager } from "../managers/tray-manager";
import { LightManager } from "../managers/light-manager";
import { ScheduleManager } from "../managers/schedule-manager";
import { MotorManager } from "../managers/motor-manager";
import { SensorManager } from "../managers/sensor-manager";
import { PumpManager } from "../managers/pump-manager";

/**
 * Class representing the HomeGrow+ Unit
 * Contains managers for other components eg. reservoirs, trays, lights
 */
export class Grower {
    public reservoirs: ReservoirManager = new ReservoirManager();
    public trays: TrayManager = new TrayManager();
    public lights: LightManager = new LightManager();
    public schedules: ScheduleManager = new ScheduleManager();
    public motors: MotorManager = new MotorManager();
    public sensors: SensorManager = new SensorManager();
    public pumps: PumpManager = new PumpManager();
}