import { Motor } from "../components/motor";

export class MotorManager {
    private motors: Array<Motor> = [
        new Motor("mixer", false)
    ];

    public getMotor(motorName: string): Motor {
        let result: Motor = undefined;
        this.motors.filter(
            (motor: Motor) => {
                if (motor.getMotorName() == motorName) {
                    result = motor;
                }
            }
        );
        return result;
    }
}