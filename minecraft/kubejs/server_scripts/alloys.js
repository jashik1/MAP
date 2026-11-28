ServerEvents.recipes(event => {
    event.shapeless('kubejs:simple_redstone_alloy_ingot', ['minecraft:iron_ingot', '4x minecraft:redstone'])
    event.recipes.create.compacting('kubejs:simple_redstone_alloy_ingot', ['minecraft:iron_ingot', '2x minecraft:redstone'])
    event.remove({id: 'enderio:alloy_smelting/redstone_alloy_ingot'})
    event.recipes.enderio.alloy_smelting(Item.of('enderio:redstone_alloy_ingot', 1), [
        Item.of('kubejs:simple_redstone_alloy_ingot'), Ingredient.of('#forge:silicon')
    ])
    event.shaped('kubejs:simple_redstone_alloy_block', [
        'AAA',
        'AAA',
        'AAA'
    ], {
        A:  'kubejs:simple_redstone_alloy_ingot'
    })
    event.shaped('kubejs:simple_redstone_alloy_ingot', [
        'AAA',
        'AAA',
        'AAA'
    ], {
        A:  'kubejs:simple_redstone_alloy_nugget'
    })
    event.shapeless(Item.of('kubejs:simple_redstone_alloy_ingot', 9), [
        'kubejs:simple_redstone_alloy_block'
    ])
    event.shapeless(Item.of('kubejs:simple_redstone_alloy_nugget', 9), [
        'kubejs:simple_redstone_alloy_ingot'
    ])
})