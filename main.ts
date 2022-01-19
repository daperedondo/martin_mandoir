makerbit.onIrButton(IrButton.Right, IrButtonAction.Released, function () {
    basic.showLeds(`
        . . . . .
        . . # . #
        . . . . .
        . . # . .
        . . . # #
        `)
    RobotCar_Keyestudio.Motors.stop()
})
makerbit.onIrButton(IrButton.Left, IrButtonAction.Released, function () {
    basic.showLeds(`
        . . . . .
        # . # . .
        . . . . .
        . . # . .
        # # . . .
        `)
    RobotCar_Keyestudio.Motors.stop()
})
makerbit.onIrButton(IrButton.Left, IrButtonAction.Pressed, function () {
    basic.showLeds(`
        . . . . .
        # . # . .
        . . . . .
        . . # . .
        # # . . .
        `)
    RobotCar_Keyestudio.Motors.spin(30)
})
makerbit.onIrButton(IrButton.Down, IrButtonAction.Pressed, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    RobotCar_Keyestudio.Motors.move(-50)
})
makerbit.onIrButton(IrButton.Down, IrButtonAction.Released, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
    RobotCar_Keyestudio.Motors.stop()
})
makerbit.onIrButton(IrButton.Star, IrButtonAction.Pressed, function () {
    basic.showLeds(`
        # # . # #
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    RobotCar_Keyestudio.Leds.showGreen()
})
makerbit.onIrButton(IrButton.Up, IrButtonAction.Pressed, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    RobotCar_Keyestudio.Motors.steer(50, 0)
    RobotCar_Keyestudio.Motors.move(50)
})
makerbit.onIrButton(IrButton.Number_2, IrButtonAction.Pressed, function () {
    basic.showLeds(`
        . . . . .
        # # # # #
        . . . . .
        . . # . .
        # # . # #
        `)
    RobotCar_Keyestudio.Motors.steer(50, 97)
})
makerbit.onIrButton(IrButton.Right, IrButtonAction.Pressed, function () {
    basic.showLeds(`
        . . . . .
        . . # . #
        . . . . .
        . . # . .
        . . . # #
        `)
    RobotCar_Keyestudio.Motors.spin(-30)
})
makerbit.onIrButton(IrButton.Ok, IrButtonAction.Pressed, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
    RobotCar_Keyestudio.Motors.stop()
})
makerbit.onIrButton(IrButton.Star, IrButtonAction.Released, function () {
    basic.showLeds(`
        # # . # #
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    RobotCar_Keyestudio.Leds.showGreen()
    RobotCar_Keyestudio.Leds.ledsOff()
})
makerbit.connectIrReceiver(DigitalPin.P16, IrProtocol.Keyestudio)
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . # # # .
    # . . . #
    `)
RobotCar_Keyestudio.Leds.ledsOff()
basic.forever(function () {
	
})
