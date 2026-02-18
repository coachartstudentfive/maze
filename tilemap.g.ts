// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level3":
            case "level3":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level 1":
            case "level 1":return tiles.createTilemap(hex`10001000080a0a0a0a0a0b0c01010101010101020807070707070b070c0c0c0c0c0c0c0c0807070707070b07070707070707070c0807070707070b0d070707070707070c0809070707090b070c0c0c0c0c0c070c030c0707070c070c070707070c0c070c030c07070c0c0707070707070c07070c030c0707070c07070c0c0c0c0c07070c030c0c07070c07070c07070c0c07070c030c0707070c07070c07070c0c07070c030c0707070c0c0c0c07070c0c0c070c030c0707070707070707070c0c0c0e0c030c0c0c0c0c0c0c0c0c07070707070c0307070707070707070c07070707070c0307070707070707070c0c0c0c0c0c0c04050505050505050505050505050506`, img`
2 2 2 2 2 2 2 2 2 . . . . . . . 
2 . . . . . 2 . 2 2 2 2 2 2 2 2 
2 . . . . . 2 . . . . . . . . 2 
2 . . . . . 2 . . . . . . . . 2 
2 2 . . . 2 2 . 2 2 2 2 2 2 . 2 
. 2 . . . 2 . 2 . . . . 2 2 . 2 
. 2 . . 2 2 . . . . . . 2 . . 2 
. 2 . . . 2 . . 2 2 2 2 2 . . 2 
. 2 2 . . 2 . . 2 . . 2 2 . . 2 
. 2 . . . 2 . . 2 . . 2 2 . . 2 
. 2 . . . 2 2 2 2 . . 2 2 2 . 2 
. 2 . . . . . . . . . 2 2 2 . 2 
. 2 2 2 2 2 2 2 2 2 . . . . . 2 
. . . . . . . . . 2 . . . . . 2 
. . . . . . . . . 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundCenter,sprites.dungeon.doorClosedWest,sprites.dungeon.doorClosedSouth,sprites.dungeon.doorClosedNorth,sprites.dungeon.doorClosedEast,sprites.dungeon.floorLight1,myTiles.tile1,myTiles.tile2], TileScale.Sixteen);
            case "level 2":
            case "level1":return tiles.createTilemap(hex`10001000090909090909090707070707070707010908080808080909090909090909090909080808080809090b08080808080b0909090808080909090808080c080808090609080808090a090909080d080909090609080808090a090b080808080808090609080808090a0908080808080808090909080808090a090808080808080809090808080b090a0908080808080808090908080909090a090908080808080b09090808090a0a0a0a09080809090909090908080909090909090808090a0a0a09090b08080808080808080b090a0a0a09090909090909090909090909090909090608080808080808080808080808080503020202020202020202020202020204`, img`
2 2 2 2 2 2 2 . . . . . . . . . 
2 . . . . . 2 2 2 2 2 2 2 2 2 2 
2 . . . . . 2 2 2 . . . . . 2 2 
2 2 . . . 2 2 2 . . . . . . . 2 
. 2 . . . 2 2 2 2 2 . . . 2 2 2 
. 2 . . . 2 2 2 2 . . . . . . 2 
. 2 . . . 2 2 2 . . . . . . . 2 
2 2 . . . 2 2 2 . . . . . . . 2 
2 . . . 2 2 2 2 . . . . . . . 2 
2 . . 2 2 2 2 2 2 . . . . . 2 2 
2 . . 2 2 2 2 2 2 . . 2 2 2 2 2 
2 . . 2 2 2 2 2 2 . . 2 2 2 2 2 
2 2 . . . . . . . . 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundCenter,sprites.dungeon.floorLight0,sprites.builtin.forestTiles0,sprites.swamp.swampTile2,myTiles.tile1,myTiles.tile2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "Ham Tile":
            case "tile1":return tile1;
            case "SharkyTile":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
