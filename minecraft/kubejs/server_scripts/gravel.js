LootJS.modifiers(event => {
    event.addBlockLootModifier("minecraft:gravel")
         .removeLoot(Ingredient.all)
         .addWeightedLoot([3, 8],
            [Item.of("minecraft:flint").withChance(3),
             Item.of("kubejs:pebble").withChance(30),
             Item.of("kubejs:andesite_pebble").withChance(20),
             Item.of("kubejs:granite_pebble").withChance(10),
             Item.of("kubejs:diorite_pebble").withChance(10),
             Item.of("kubejs:deepslate_pebble").withChance(5),
             Item.of("kubejs:calcite_pebble").withChance(3),
             Item.of("kubejs:rock").withChance(15),
             Item.of("kubejs:mossy_pebble").withChance(3),
             Item.of("minecraft:iron_nugget").withChance(1.25)
            ])
})
ServerEvents.recipes(event => {
    event.shapeless(
  Item.of('minecraft:gravel', 1),
  [
    'kubejs:pebble',
    'kubejs:rock',
    '#kubejs:igneous_pebbles',
    '#kubejs:igneous_pebbles'
  ])
})