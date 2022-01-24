let strip = neopixel.create(DigitalPin.P0, 15, NeoPixelMode.RGB)
loops.everyInterval(500, function () {
    basic.showLeds(`
        . # # # .
        # . . . #
        # # # # #
        # . . . #
        # . . . #
        `)
    basic.pause(100)
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # # # # .
        `)
    basic.pause(100)
    basic.showLeds(`
        # # # # .
        # . . . .
        # # # . .
        # . . . .
        # # # # .
        `)
    basic.pause(100)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.pause(100)
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        strip.showRainbow(100, 300)
        strip.show()
    } else {
        strip.clear()
        strip.show()
    }
})
