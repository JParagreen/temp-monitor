input.onButtonPressed(Button.A, function () {
    basic.showNumber(Mintemp)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Maxtemp)
})
let Maxtemp = 0
let Mintemp = 0
Mintemp = input.temperature()
Maxtemp = input.temperature()
loops.everyInterval(10000, function () {
    Mintemp = Math.min(input.temperature(), Mintemp)
    Maxtemp = Math.max(input.temperature(), Maxtemp)
    if (input.temperature() < 5) {
        music.playMelody("E B C5 A B G A F ", 120)
    }
})
basic.forever(function () {
	
})
