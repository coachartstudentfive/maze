// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level 1":
            case "level 1":return tiles.createTilemap(hex`10001000080a0a0a0a0a0b0c01010101010101020807070707070b070c0c0c0c0c0c0c0c0807070707070b07070707070707070c0807070707070b07070707070707070c0809070707090b070c0c0c0c0c0c070c030c0707070c070c070707070c0c070c030c07070c0c0707070707070c07070c030c0707070c07070c0c0c0c0c07070c030c0c07070c07070c07070c0c07070c030c0707070c07070c07070c0c07070c030c0707070c0c0c0c07070c0c0c070c030c0707070707070707070c0c0c070c030c0c0c0c0c0c0c0c0c07070707070c0307070707070707070c07070707070c0307070707070707070c0c0c0c0c0c0c04050505050505050505050505050506`, img`
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
`, [myTiles.transparency16,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundCenter,sprites.dungeon.doorClosedWest,sprites.dungeon.doorClosedSouth,sprites.dungeon.doorClosedNorth,sprites.dungeon.doorClosedEast,sprites.dungeon.floorLight1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
