namespace SpriteKind {
    export const Treasure = SpriteKind.create()
}
tiles.setCurrentTilemap(tilemap`level 1`)
let Hero = sprites.create(assets.image`Dungeon Destroyer`, SpriteKind.Player)
controller.moveSprite(Hero)
Hero.setStayInScreen(true)
scene.cameraFollowSprite(Hero)
Hero.setPosition(42, 27)
let Treasure = sprites.create(assets.image`Treasure`, SpriteKind.Treasure)
Treasure.setScale(0.5, ScaleAnchor.Middle)
Treasure.setPosition(131, 47)
