enum Direction {
    //% block="左",
    Left,
    //% block="右",
    Right
}
//% block="%dir のタイヤを早さ $speed %で動かす"
//% speed.shadow="speedPicker"
//% speed.defl=0
namespace robotCar {
    export function wheel(dir: Direction, speed: number) {
        if (dir == Direction.Left) {
            if (speed < 0) {
                pins.analogWritePin(AnalogPin.P14, 0)
                pins.analogWritePin(AnalogPin.P13, Math.abs(speed))
            } else {
                pins.analogWritePin(AnalogPin.P13, 0)
                pins.analogWritePin(AnalogPin.P14, speed)
            }
        } else {
            if (speed < 0) {
                pins.analogWritePin(AnalogPin.P16, 0)
                pins.analogWritePin(AnalogPin.P15, Math.abs(speed))
            } else {
                pins.analogWritePin(AnalogPin.P15, 0)
                pins.analogWritePin(AnalogPin.P16, speed)
            }
        }
    }
}