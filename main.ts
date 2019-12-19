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
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile0, function (sprite, location) {
	
})
let mySprite = sprites.create(img`
. . . . . f f . . . . . . . . . . . . . . . . . f f . . . . . . 
. . . . . f f f . . . . . . . . . . . . . . . . f f . . . . . . 
. . . . . f d f . . . . . . . . . . . . . . . f f f . . . . . . 
. . . . . f d f f . . . . . f f f f . . . . . f d f . . . . . . 
. . . . . f d d f f f . . f 5 5 5 5 f . . . f f d f . . . . . . 
. . . . . f 1 d d d f f f 5 e e e e 5 f f f f d d f . . . . . . 
. . . . . f 1 1 1 d d d f 5 e e e e 5 f d d d d 1 f . . . . . . 
. . . . . f f 1 1 1 1 1 f e e e e e e f 1 1 1 1 1 f . . . . . . 
. . . . . . f f 1 1 1 1 f f e e e e f f 1 1 1 1 f f . . . . . . 
. . . . . . . f f 1 1 f d d f f f f d d f 1 1 f f . . . . . . . 
. . . . . . . . f f f f d f 1 d d 1 f d f 1 f f . . . . . . . . 
. . . . . . . . . . f f d d d d d d d d f f f . . . . . . . . . 
. . . . . . . . . . . . d d f f f f d d . . . . . . . . . . . . 
. . . . . . . . . . . . d f f f f f f d . . . . . . . . . . . . 
. . . . . . . . . . . . d f f d d f f d . . . . . . . . . . . . 
. . . . . . . . . . . . d f d d d d f d . . . . . . . . . . . . 
. . . . . . . . b b b b b d d d d d d b b b b b . . . . . . . . 
. . . . . . . b b c c b b a a b b a a b b c c b b . . . . c . . 
. . . . . . . c c c c c c a c a a c a c c c c c c . . . b c . . 
. . . . . . . . c c c c f a c c c c a f c c c c . . . d b c . . 
. . . . . . . . f d d f f a c c c c a f f d d f . . d d b c . . 
. . . . . . . . f d d f f a b c c b a f f d d e . d d b c . . . 
. . . . . . . c c c c c c a b b b b a f f d e e d d b c . . . . 
. . . . . . . c c c c c c a b b b b a f f d d e 5 b c . . . . . 
. . . . . . . a a a a a a c a a a a c f f d e e e e e . . . . . 
. . . . . . . . a a a a f f f f f f f f f e e e . e . . . . . . 
. . . . . . . . . b b . f 6 6 f f 6 6 f f f e f . . . . . . . . 
. . . . . . . . . . . . f 6 6 f f 6 6 f . . . . . . . . . . . . 
. . . . . . . . . . . . f 6 6 f f 6 6 f . . . . . . . . . . . . 
. . . . . . . . . . . . f 6 6 f f 6 6 f . . . . . . . . . . . . 
. . . . . . . . . . . . f 6 6 f f 6 6 f . . . . . . . . . . . . 
. . . . . . . . . . . . f e e f f e e f . . . . . . . . . . . . 
`, SpriteKind.Player)
