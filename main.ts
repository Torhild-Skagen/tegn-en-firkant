input.onButtonPressed(Button.A, function () {
    bitbot.goms(BBDirection.Forward, 20, 800)
    bitbot.rotatems(BBRobotDirection.Right, 20, 600)
    bitbot.goms(BBDirection.Forward, 20, 800)
    bitbot.rotatems(BBRobotDirection.Right, 20, 600)
    bitbot.goms(BBDirection.Forward, 20, 800)
    bitbot.rotatems(BBRobotDirection.Right, 20, 600)
    bitbot.goms(BBDirection.Forward, 20, 800)
    bitbot.rotatems(BBRobotDirection.Right, 20, 600)
})
input.onButtonPressed(Button.B, function () {
    bitbot.stop(BBStopMode.Coast)
})
bitbot.select_model(BBModel.XL)
