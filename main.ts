input.onButtonPressed(Button.A, function () {
    strip.showRainbow(1, 360)
    strip.show()
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 15, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Red))
