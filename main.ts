namespace SpriteKind {
    export const Treasure = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Treasure, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
    Treasure.startEffect(effects.disintegrate)
    Treasure_Count += 1
    game.splash("You beat the Level!", "Press A for next level!")
})
function Admit_Sharky () {
    Sharky = sprites.create(assets.image`myImage`, SpriteKind.Enemy)
    Sharky.setScale(0.75, ScaleAnchor.Middle)
    Sharky.setPosition(230, 200)
    Sharky.setBounceOnWall(true)
    Sharky.vy = 75
}
info.onLifeZero(function () {
    game.setGameOverMessage(false, "YOU LOST! DIED IN THE DUNGEON")
    game.gameOver(false)
})
function Initialize () {
    tiles.setCurrentTilemap(tilemap`level 1`)
    Hero = sprites.create(assets.image`Dungeon Destroyer`, SpriteKind.Player)
    controller.moveSprite(Hero)
    Hero.setStayInScreen(true)
    scene.cameraFollowSprite(Hero)
    Hero.setPosition(42, 27)
    Treasure = sprites.create(assets.image`Treasure`, SpriteKind.Treasure)
    Treasure.setScale(0.5, ScaleAnchor.Middle)
    Treasure.setPosition(131, 47)
    Treasure_Count = 0
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    Hero.setPosition(42, 27)
})
let Hero: Sprite = null
let Sharky: Sprite = null
let Treasure_Count = 0
let Treasure: Sprite = null
Initialize()
Admit_Sharky()
info.setLife(3)
