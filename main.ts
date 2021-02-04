input.onButtonPressed(Button.A, function () {
    basic.showNumber(steps / 8)
    basic.showString("T-REX STEPS")
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(steps)
    basic.showString("HUMAN STEPS")
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(steps * 5)
    basic.showString("OWL STEPS")
})
let steps = 0
steps = 0
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) > 1500) {
        steps += 1
        basic.showNumber(steps)
    }
})
