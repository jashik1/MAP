// priority: 0

BlockEvents.modification(event => {
  event.modify(/.*(log|wood|stem|hyphae)$/, block => {
    block.destroySpeed = 6
  })
})