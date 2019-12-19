namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
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
`
    //% blockIdentity=images._tile
    export const tile2 = img`
b c c f f f f f f f f f f c c b 
c b f d b b c c b b b b d f c c 
c f b d c c d c d d d d b c f c 
f c c c d d d c c b b b b c c f 
f d b b c b d c c c c b b c c f 
f d d d c b d b b b c d d b c f 
f b b c c b d d d d d d b b c f 
f b c c c c b b b c d c b c d f 
f d c b c c c b b b d c b c d f 
f d d d d c c c d c d c b c d f 
f b c b b b b d d b d c b c d f 
f c b b b b d d b b c c b b c f 
f b c d d d c c d d d c c c b f 
c f c b b b b c c b d d c c f c 
c c f d d d d c c b c d c f c b 
c c b f f f f f f f f f f c c c 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
b b b b b b b f b b f b b b f b 
b f b b b b b f b b f b f b f b 
b f b b f b b b b b b b f b b b 
b b b b f b b f b b b b b b b b 
b b b b b b b f b f b b b b b f 
b b f b f b b b b f b b f b b f 
f b f b f b f b b b b b f b b b 
f b b b b b f b b b b b b b b b 
b b f b b b b b f b b f b b f b 
b b f b b b f b f b b f b b f b 
b b b b f b f b b b b b b b b b 
b f b b f b b b b f b f b b b b 
b f b b b b f b b f b f b b b f 
b b b f b b f b b b b b b f b f 
f b b f b b b b f b b f b f b b 
f b b b b b b b f b b f b b b b 
`
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile2, function (sprite, location) {
    tiles.setWallAt(tiles.getTileLocation(0, 15), false)
})
let MC = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f f f . . . . . . f . . . . . . . . 
. . . . . . . . . . . . f 5 5 5 5 f . . . . f f . . . . . . . . 
. . . . . . . . . . . f 5 e e e e 5 f . . f f f . . . . . . . . 
. . . . . . . . . f f f 5 e e e e 5 f f f f 1 f . . . . . . . . 
. . . . . . . f f 1 1 f e e e e e e f 1 1 1 1 f . . . . . . . . 
. . . . . . f f 1 1 1 f f e e e e f f 1 1 1 f f . . . . . . . . 
. . . . . . . f f 1 f d d f f f f d d f 1 f f . . . . . . . . . 
. . . . . . . . f f f d f 1 d d 1 f d f f f . . . . . . . . . . 
. . . . . . . . . . . d d d d d d d d . . . . . . . . . . . . . 
. . . . . . . . . . . d d f f f f d d . . . . . . . . . . . . . 
. . . . . . . . b b b b b d d d d b b b b b . . . . . . . . . . 
. . . . . . . b b c c b b a b b a b b c c b b . . . c . . . . . 
. . . . . . . c c c c c c c a a c c c c c c c . . b c . . . . . 
. . . . . . . . c c c c f c c c c f c c c c . . d b c . . . . . 
. . . . . . . . f d d f f c c c c f f d d f . d d b c . . . . . 
. . . . . . . . f d d f f b c c b f f d e f d d b c . . . . . . 
. . . . . . . c c c c c c b b b b f f e e d d b c . . . . . . . 
. . . . . . . c c c c c c b b b b f f d e 5 b c . . . . . . . . 
. . . . . . . a a a a a a f f f f f f e e e e e . . . . . . . . 
. . . . . . . . a a a a 6 6 f f 6 6 e e e f e . . . . . . . . . 
. . . . . . . . . b b f 6 6 f f 6 6 f e f f . . . . . . . . . . 
. . . . . . . . . . . f 6 6 f f 6 6 f . . . . . . . . . . . . . 
. . . . . . . . . . . f 6 6 f f 6 6 f . . . . . . . . . . . . . 
. . . . . . . . . . . f e e f f e e f . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
tiles.setTilemap(tiles.createTilemap(
            hex`0f000f000d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0e0e0e0e0e0e0e0e0e0e0e0e0e0d0d03030303030303030303030303030d03030303030303030303030303030d03030e0e0e0e0e0e0e0e0e0e0e0d0d03030e0e0303030303030303030d0d03030e0e0303030303030303030d0d0303030303030e0e0e0e0e03030d0d0303030303030e0e0e0e0e03030d0d03030e0e0e0e0e0e0e0e0e03030d0d0303030303030303030e0e03030d0d0303030303030303030e0e03030d0d0e0e0e0e0e0e0e03030e0e03030d0d0303030303030e03030e0e03030d0d0d0d0d0d0d0d0d03030d0d0d0d0d`,
            img`
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.builtin.brick,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundSouth,sprites.castle.rock0,sprites.castle.rock2,myTiles.tile2,myTiles.tile3,sprites.dungeon.collectibleInsignia],
            TileScale.Sixteen
        ))
scene.cameraFollowSprite(MC)
controller.moveSprite(MC)
