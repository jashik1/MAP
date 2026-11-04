LootJS.modifiers(event => {
   const pebbleMap = {
    "minecraft:stone": "kubejs:pebble",
    "minecraft:cobblestone": "kubejs:pebble",
    "minecraft:mossy_cobblestone": "kubejs:mossy_pebble",
    "minecraft:deepslate": "kubejs:deepslate_pebble",
    "minecraft:cobbled_deepslate": "kubejs:deepslate_pebble",
    "minecraft:granite": "kubejs:granite_pebble",
    "minecraft:diorite": "kubejs:diorite_pebble",
    "minecraft:andesite": "kubejs:andesite_pebble",
    "minecraft:calcite": "kubejs:calcite_pebble",
    "minecraft:blackstone": "kubejs:blackstone_pebble",
    "biomeswevegone:rocky_stone": "kubejs:rock"
  }
  let correctTool = false
  event
    .addBlockLootModifier("#forge:pebble_stone")
    .apply(context => {
      const tool = context.getTool()
      const block = context.getDestroyedBlock()
      correctTool =
        block != null &&
        tool != null &&
        !tool.isEmpty() &&
        tool.getHarvestSpeed(block) > 4
    })
    .modifyLoot(Ingredient.all, itemStack => {
      const stoneId = itemStack.getId()
      if (correctTool) {
        return Item.of(stoneId, 1)
      }
      const pebbleId = pebbleMap[stoneId]
      return Item.of(pebbleId, 1)
    })
})