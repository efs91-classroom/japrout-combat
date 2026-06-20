controller.A.onEvent(ControllerButtonEvent.Released, function () {
    Hero.setImage(assets.image`Hero epée haute drotie`)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Hero.setImage(assets.image`Hero epee milieu droite`)
    pause(50)
    Hero.setImage(assets.image`hero epee droite basse`)
})
let Hero: Sprite = null
Hero = sprites.create(assets.image`Hero epee haute droite`, SpriteKind.Player)
