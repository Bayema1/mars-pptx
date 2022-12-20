scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile30`, function (sprite, location) {
    Diana = sprites.create(assets.image`Diana`, SpriteKind.Player)
})
let Diana: Sprite = null
scene.setBackgroundImage(assets.image`nuit`)
tiles.setCurrentTilemap(tilemap`niveau1`)
let Bayemalick = sprites.create(assets.image`Bayemalick`, SpriteKind.Player)
tiles.placeOnRandomTile(Bayemalick, assets.tile`myTile11`)
controller.moveSprite(Bayemalick)
story.spriteSayText(Bayemalick, "Vite! Il faut que je réveille Diana!")
