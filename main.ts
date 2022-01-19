makerbit.onIrButton(IrButton.Up, IrButtonAction.Released, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
    RobotCar_Keyestudio.Motors.stop()
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
makerbit.onIrButton(IrButton.Right, IrButtonAction.Pressed, function () {
    basic.showLeds(`
        . . . . .
        . . # . #
        . . . . .
        . . # . .
        . . . # #
        `)
    RobotCar_Keyestudio.Motors.spin(100)
    RobotCar_Keyestudio.Motors.move(50)
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
makerbit.connectIrReceiver(DigitalPin.P16, IrProtocol.Keyestudio)
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . # # # .
    # . . . #
    `)
basic.forever(function () {
	
})
