namespace SpriteKind {
    export const Treasure = SpriteKind.create()
    export const Sharky = SpriteKind.create()
    export const Coin = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
    Coin.startEffect(effects.smiles, 1000)
    sprites.destroyAllSpritesOfKind(SpriteKind.Coin)
    imunity = 1
    timer.after(5000, function () {
        imunity = 0
        effects.clearParticles(Hero)
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Treasure, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
    Treasure.startEffect(effects.disintegrate)
    Treasure_Count += 1
    game.splash("You beat the Level!", "Press A for next level!")
    sprites.destroyAllSpritesOfKind(SpriteKind.Treasure)
    NextLevel(Treasure_Count)
})
function Admit_Sharky () {
    Sharky = sprites.create(assets.image`myImage`, SpriteKind.Sharky)
    Sharky.setScale(0.75, ScaleAnchor.Middle)
    Sharky.setBounceOnWall(true)
    Sharky_Speed = 30
    Sharky.vy = Sharky_Speed
    Sharky.setStayInScreen(true)
    tiles.placeOnRandomTile(Sharky, assets.tile`SharkyTile`)
}
function NextLevel (num: number) {
    imunity = 0
    effects.clearParticles(Hero)
    if (num == 1) {
        tiles.setCurrentTilemap(tilemap`level 2`)
        Sharky.vy = 0
        Ducky = sprites.create(assets.image`Treasure 0`, SpriteKind.Treasure)
        tiles.placeOnRandomTile(Ducky, assets.tile`Ham Tile`)
        tiles.placeOnRandomTile(Sharky, assets.tile`SharkyTile`)
        tiles.placeOnRandomTile(Hero, assets.tile`HeroTile`)
        Coin = sprites.create(assets.image`Coin`, SpriteKind.Coin)
        Coin.setPosition(35, 250)
        pause(200)
        Sharky_Speed += -5
        Sharky.vy = Sharky_Speed
        Sharky.follow(Hero)
    }
}
info.onLifeZero(function () {
    game.setGameOverMessage(false, "YOU LOST! DIED IN THE DUNGEON")
    game.gameOver(false)
})
function Initialize_Coin () {
    Coin = sprites.create(assets.image`Coin`, SpriteKind.Coin)
    Coin.setPosition(25, 230)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Sharky, function (sprite, otherSprite) {
    if (imunity == 1) {
        Hero.startEffect(effects.halo)
    } else {
        info.changeLifeBy(-1)
        tiles.placeOnRandomTile(Hero, assets.tile`HeroTile`)
    }
})
function Initialize () {
    Hero = sprites.create(assets.image`Dungeon Destroyer`, SpriteKind.Player)
    controller.moveSprite(Hero)
    Hero.setStayInScreen(true)
    scene.cameraFollowSprite(Hero)
    tiles.placeOnRandomTile(Hero, assets.tile`HeroTile`)
    Treasure = sprites.create(assets.image`Treasure`, SpriteKind.Treasure)
    Treasure.setScale(0.5, ScaleAnchor.Middle)
    tiles.placeOnRandomTile(Treasure, assets.tile`Ham Tile`)
    Treasure_Count = 0
}
let Ducky: Sprite = null
let Sharky_Speed = 0
let Sharky: Sprite = null
let Treasure_Count = 0
let Treasure: Sprite = null
let Hero: Sprite = null
let imunity = 0
let Coin: Sprite = null
tiles.setCurrentTilemap(tilemap`level 1`)
Initialize()
Admit_Sharky()
Initialize_Coin()
info.setLife(3)
