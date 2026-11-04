// priority: 0 ??
LootJS.modifiers(event => {
  let correctTool = false
  event
    .addBlockLootModifier("#tconstruct:tree_log")
    .apply(context => {
      const tool = context.getTool()
      const block = context.getDestroyedBlock()
      correctTool =
        block != null &&
        tool != null &&
        !tool.isEmpty() &&
        tool.getHarvestSpeed(block) > 1
    })
    .modifyLoot(Ingredient.all, itemStack => {
      const logId = itemStack.getId()
      if (!/(log|wood|stem|hyphae)$/.test(logId)) {
        return itemStack
      }
      if (correctTool) {
        return Item.of(logId, 1)
      }
      if (logId.includes("palo_verde")) {
        return Item.of("minecraft:birch_planks", 1)
      }
      const plankId = logId
        .replace('stripped_', '')
        .replace('_log', '_planks')
        .replace('_wood', '_planks')
        .replace('_stem', '_planks')
        .replace('_hyphae', '_planks')
      return Item.of(plankId, 1)
    })
})