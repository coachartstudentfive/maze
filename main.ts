namespace SpriteKind {
    export const Treasure = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Treasure, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
    Treasure.startEffect(effects.disintegrate)
    Treasure_Count += 1
    game.splash("You beat the Level!", "Press A for next level!")
    sprites.destroyAllSpritesOfKind(SpriteKind.Treasure)
    NextLevel(Treasure_Count)
})
function Admit_Sharky () {
    Sharky = sprites.create(assets.image`myImage`, SpriteKind.Enemy)
    Sharky.setScale(0.75, ScaleAnchor.Middle)
    tiles.placeOnRandomTile(Sharky, assets.tile`SharkyTile`)
    Sharky.setBounceOnWall(true)
    Sharky.vy = 10
    Sharky.setStayInScreen(true)
}
function NextLevel (num: number) {
    if (num == 1) {
        tiles.setCurrentTilemap(tilemap`level 2`)
        Ducky = sprites.create(assets.image`Treasure 0`, SpriteKind.Treasure)
        tiles.placeOnRandomTile(Ducky, assets.tile`Ham Tile`)
        Sharky.follow(Hero)
        tiles.placeOnRandomTile(Sharky, assets.tile`SharkyTile`)
    }
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
    tiles.placeOnRandomTile(Treasure, assets.tile`Ham Tile`)
    Treasure_Count = 0
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    Hero.setPosition(42, 27)
})
let Hero: Sprite = null
let Ducky: Sprite = null
let Sharky: Sprite = null
let Treasure_Count = 0
let Treasure: Sprite = null
Initialize()
Admit_Sharky()
info.setLife(3)
