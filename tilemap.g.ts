// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level 1":
            case "level 1":return tiles.createTilemap(hex`10001000050707070707080909090909090e0e0e050404040404080409090909090d0e0e0504041104040804040a0404090e0e0e050404040404080404040404090e0e0e050604040406080404040404090e0e0e090904040409040404040404090e0e0d090904040909040404040404090e0e0e090904040409040404040404090e0e0e090909040409040404040404090e0e0e090904040409040404040404090d0e0e090904040409090404040404090d0e0e090904040404040404040404090e0e0e010909090909090404040404090e0e0e0f0404040f040904040b0404090e0e0d10040f040404090909090909090e0e0d020303030f030f030303030f0c0e0e0e`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . 2 . 2 2 2 2 2 2 2 2 
2 . . . . . 2 . . . . . . 2 2 2 
2 . . . . . 2 . . . . . . 2 2 2 
2 2 . . . 2 2 . . . . . . 2 2 2 
2 2 . . . 2 . . . . . . . 2 2 2 
2 2 . . 2 2 . . . . . . . 2 2 2 
2 2 . . . 2 . . . . . . . 2 2 2 
2 2 2 . . 2 . . . . . . . 2 2 2 
2 2 . . . 2 . . . . . . . 2 2 2 
2 2 . . . 2 2 . . . . . . 2 2 2 
2 2 . . . . . . . . . . . 2 2 2 
. 2 2 2 2 2 2 . . . . . . 2 2 2 
. . . . . . . . . . . . . 2 2 2 
. . . . . . . . . . 2 2 2 2 2 2 
. . . . . . . . . . . . . 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundCenter,sprites.dungeon.doorClosedWest,sprites.dungeon.doorClosedSouth,sprites.dungeon.doorClosedNorth,sprites.dungeon.doorClosedEast,sprites.dungeon.floorLight1,myTiles.tile1,myTiles.tile2,sprites.dungeon.darkGroundEast,sprites.builtin.forestTiles0,sprites.castle.tileGrass3,sprites.castle.tileDarkGrass2,sprites.dungeon.chestClosed,myTiles.tile3], TileScale.Sixteen);
            case "level 2":
            case "level1":return tiles.createTilemap(hex`1000100004040404040404020202020202020201040303070303040404040404040404040403030303030404030303060303030404030303030304040e03030303030e04040303030303030404040d0d0d040404040303030303030403030303030303040403030f03030504030303030303030404030303030305030303030303030304040303030303050303030303030303040403030303030503030303030303030404030303030505050303030404040404040303030303030303030304050505040403030303030303030303040505050404040404040404040404040404040404050b0b0b050b0b0b0b0b0b0b050c050805050a05050a0a0a0a0a0a0a05050509`, img`
2 2 2 2 2 2 2 . . . . . . . . . 
2 . . . . . 2 2 2 2 2 2 2 2 2 2 
2 . . . . . 2 2 . . . . . . . 2 
2 . . . . . 2 2 . . . . . . . 2 
2 . . . . . . 2 2 . . . . . 2 2 
2 . . . . . . 2 . . . . . . . 2 
2 . . . . . 2 2 . . . . . . . 2 
2 . . . . . 2 . . . . . . . . 2 
2 . . . . . 2 . . . . . . . . 2 
2 . . . . . 2 . . . . . . . . 2 
2 . . . . 2 2 2 . . . 2 2 2 2 2 
2 . . . . . . . . . . 2 2 2 2 2 
2 . . . . . . . . . . 2 2 2 2 2 
2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundCenter,sprites.dungeon.floorLight0,sprites.builtin.forestTiles0,myTiles.tile1,myTiles.tile2,sprites.castle.tilePath3,sprites.castle.tilePath9,sprites.castle.tilePath8,sprites.castle.tilePath2,sprites.castle.tilePath5,sprites.dungeon.floorLight1,sprites.dungeon.collectibleBlueCrystal,myTiles.tile3], TileScale.Sixteen);
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
            case "HeroTile":
            case "tile3":return tile3;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
