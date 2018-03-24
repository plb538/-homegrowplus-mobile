import { Sensor } from "../components/sensor";

export class SensorManager {
    private sensors: Array<Sensor> = [
        new Sensor("mixer_empty", "conductivity", "err"),
        new Sensor("mixer_full", "conductivity", "err"),
        new Sensor("nutrients", "conductivity", "err"),
        new Sensor("base", "conductivity", "err"),
        new Sensor("acid", "conductivity", "err"),
        new Sensor("clean_water", "conductivity", "err"),
        new Sensor("drain_water", "conductivity", "err"),
        new Sensor("temperature", "temperature", "err"),
        new Sensor("humidity", "humidity", "err"),
        new Sensor("pH", "pH", "err")
    ];

    public getSensor(sensorName: string): Sensor {
        let result = undefined;
        this.sensors.filter(
            (sensor: Sensor) => {
                if (sensor.getName() == sensorName) {
                    result = sensor;
                }
            }
        );
        return result;
    }

    public getAllSensorsOfType(type: any): Array<Sensor> {
        let temp = [];
        this.sensors.filter(
            (sensor: Sensor) => {
                if (sensor.getType() == type) {
                    temp.push(sensor);
                }
            }
        );
        return temp;
    }
}