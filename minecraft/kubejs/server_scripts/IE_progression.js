ServerEvents.recipes(event => {
    event.remove({id: 'immersiveengineering:crafting/cokebrick'})
    event.shaped(Item.of('immersiveengineering:cokebrick', 1), [
        'BCB',
        'CAC',
        'BCB'
    ], {
        A: 'kubejs:hardened_brass_sheet',
        B: 'minecraft:clay_ball',
        C: 'minecraft:bricks'
    })
    event.remove({id: 'immersiveengineering:crafting/blastbrick'})
    event.shaped(Item.of('immersiveengineering:blastbrick', 2), [
        'BCB',
        'CAC',
        'BCB'
    ], {
        A: 'immersiveengineering:cokebrick',
        B: 'immersiveengineering:coke',
        C: 'kubejs:hardened_brass_sheet'
    })
    event.remove({id: 'immersiveengineering:crafting/alloybrick'})
    event.shaped(Item.of('immersiveengineering:alloybrick', 2), [
        ' B ',
        'CAC',
        ' B '
    ], {
        A: 'minecraft:clay',
        B: 'minecraft:bricks',
        C: '#forge:sandstone'
    })
        event.shaped(Item.of('immersiveengineering:alloybrick', 2), [
        ' C ',
        'BAB',
        ' C '
    ], {
        A: 'minecraft:clay',
        B: 'minecraft:bricks',
        C: '#forge:sandstone'
    })
    event.remove({id: 'createaddition:compat/immersiveengineering/item_application/kiln_brick'})
    event.replaceInput({id: 'minecraft:flint_and_steel'}, 'minecraft:iron_ingot', '#forge:ingots/steel')
    event.remove({id: 'immersiveengineering:crafting/steel_scaffolding_standard'})
    event.shaped(Item.of('immersiveengineering:steel_scaffolding_standard', 2), [
        'ABA',
        'BAB',
        'ABA'
    ], {
        A: '#forge:rods/steel',
        B: '#forge:ingots/steel'
    })
    event.remove({id: 'immersiveengineering:crafting/craftingtable'})
    event.shaped(Item.of('immersiveengineering:craftingtable', 1), [
        'AAA',
        'BCB',
        'BDB'
    ], {
        A: '#forge:treted_wood_slab',
        B: '#forge:rods/treated_wood',
        C: 'minecraft:crafting_table',
        D: 'minecraft:chest'
    })
})