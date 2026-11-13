ServerEvents.recipes(event => {
    event.shapeless('kubejs:simple_redstone_alloy_ingot', ['minecraft:iron_ingot', '4x minecraft:redstone'])
    event.recipes.tconstruct.alloy()
        .input('tconstruct:molten_iron', 144)
        .input('tconstruct:')
    event.remove({id: 'enderio:alloy_smelting/redstone_alloy_ingot'})
    event.recipes.enderio.alloy_smelting(Item.of('enderio:redstone_alloy_ingot', 1), [
        Item.of('kubejs:simple_redstone_alloy_ingot'), Ingredient.of('#forge:silicon')
    ])
})