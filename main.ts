let volume = 0
let level = 0
let neo = 30
let strip = neopixel.create(DigitalPin.P1, 30, NeoPixelMode.RGB)
basic.forever(function () {
    led.plotBarGraph(
    pins.analogReadPin(AnalogPin.P0) - 511,
    512
    )
    level = pins.analogReadPin(AnalogPin.P0)
    if (level >= 512) {
        level += -512
        volume = level * neo / 20
        strip.clear()
        for (let index = 0; index <= volume; index++) {
            if (index < 10) {
                strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Red))
            } else if (index < 20) {
                strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Yellow))
            } else {
                strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Green))
            }
            strip.show()
        }
    }
})
