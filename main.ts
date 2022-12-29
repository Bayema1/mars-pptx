namespace SpriteKind {
    export const amis = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile33`, function (sprite, location) {
	
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    Bayemalick.destroy()
    tiles.setCurrentTilemap(tilemap`niveau2`)
    Navette = sprites.create(assets.image`wii`, SpriteKind.Player)
    tiles.placeOnRandomTile(Navette, assets.tile`myTile40`)
    scene.cameraFollowSprite(Navette)
    controller.moveSprite(Navette)
})
sprites.onDestroyed(SpriteKind.Player, function (sprite) {
    Diana.destroy()
})
let Navette: Sprite = null
let Diana: Sprite = null
let Bayemalick: Sprite = null
scene.setBackgroundImage(assets.image`nuit`)
tiles.setCurrentTilemap(tilemap`navette`)
Bayemalick = sprites.create(assets.image`Bayemalick`, SpriteKind.Player)
tiles.placeOnRandomTile(Bayemalick, assets.tile`myTile11`)
Diana = sprites.create(assets.image`Diana`, SpriteKind.amis)
tiles.placeOnRandomTile(Diana, assets.tile`myTile9`)
scene.cameraFollowSprite(Bayemalick)
controller.moveSprite(Bayemalick)
story.spriteSayText(Bayemalick, "Euuuh, Diana on part dans 10 min.")
story.spriteSayText(Diana, "Oui oui, j'arrive !")
pause(1000)
Diana.follow(Bayemalick, 50)
