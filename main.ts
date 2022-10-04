input.onGesture(Gesture.Shake, function () {
    if (number == 0) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 3183, 255, 0, 9999, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        basic.showString("NO")
    } else if (number == 1) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 54, 54, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        basic.showString("YES")
    } else {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 3941, 4120, 255, 0, 1000, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        basic.showString("MAYBE")
    }
})
let number = 0
basic.showString("ASK A QUESTION")
number = randint(0, 2)
basic.forever(function () {
	
})
