
namespace robotCar {
    enum Direction {
        //% block="左",
        Left,
        //% block="右",
        Right
    }
    //% block="%dir のタイヤを $speed ％の早さで動かす"
    //% speed.shadow="speedPicker"
    //% speed.defl=0
    export function wheel(dir: Direction, speed: number) {
        let val = Math.constrain(Math.abs(speed*1023/100),0,1023);
        if (dir == Direction.Left) {
            if (speed < 0) {
                pins.analogWritePin(AnalogPin.P14, 0)
                pins.analogWritePin(AnalogPin.P13, val);
            } else {
                pins.analogWritePin(AnalogPin.P13, 0)
                pins.analogWritePin(AnalogPin.P14, val);
            }
        } else {
            if (speed < 0) {
                pins.analogWritePin(AnalogPin.P16, 0)
                pins.analogWritePin(AnalogPin.P15, val);
            } else {
                pins.analogWritePin(AnalogPin.P15, 0)
                pins.analogWritePin(AnalogPin.P16, val);
            }
        }
    }
    //% block="$speed の早さで直進"
    //% speed.shadow="speedPicker"
    export function goStraight(speed:number){
        wheel(Direction.Left,speed);
        wheel(Direction.Right,speed);
    }
    //% block="$speedの早さで $dir 回転"
    //% speed.shadow="speedPicker"
    export function turn(dir:Direction, speed:number){
        if(dir==Direction.Left){
            wheel(Direction.Left,-speed)
            wheel(Direction.Right,speed);
        } else {
            wheel(Direction.Left,speed)
            wheel(Direction.Right,-speed)
        }
    }
}