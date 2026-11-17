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
        A: '#forge:treated_wood_slab',
        B: '#forge:rods/treated_wood',
        C: 'minecraft:crafting_table',
        D: 'minecraft:chest'
    })
    event.remove({id: 'immersiveengineering:crafting/rs_engineering'})
    event.shaped(Item.of('immersiveengineering:rs_engineering', 2), [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: '#forge:sheetmetals/iron',
        B: 'kubejs:simple_redstone_alloy_ingot',
        C: 'minecraft:copper_ingot'
    })
    event.remove({id: 'immersiveengineering:crafting/light_engineering'})
    event.shaped(Item.of('immersiveengineering:light_engineering', 2), [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: '#forge:sheetmetals/iron',
        B: 'immersiveengineering:component_iron',
        C: 'minecraft:copper_ingot'
    })
    event.remove({id: 'immersiveengineering:crafting/heavy_engineering'})
    event.shaped(Item.of('immersiveengineering:heavy_engineering', 2), [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: '#forge:sheetmetals/steel',
        B: 'immersiveengineering:component_steel',
        C: '#forge:ingots/electrum'
    })
    event.shaped(Item.of('immersiveengineering:blueprint', '{blueprint:"Empty"}'),[
        'AB'
    ],{
        A: 'minecraft:blue_dye',
        B: 'minecraft:paper'
    })
    event.remove({id: 'immersiveengineering:crafting/blueprint_molds'})
    event.remove({id: 'immersiveengineering:crafting/blueprint_components'})
    event.shaped(Item.of('immersiveengineering:blueprint', '{blueprint:"molds"}'), [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: '#forge:plates/steel',
        B: Item.of('immersiveengineering:blueprint', '{blueprint:"Empty"}').weakNBT()
    })
    event.shaped(Item.of('immersiveengineering:blueprint', '{blueprint:"Mechanical Components"}'), [
        ' A ',
        'BCB',
        ' A '
    ],{
        A: 'immersiveengineering:component_iron',
        B: 'immersiveengineering:component_steel',
        C: Item.of('immersiveengineering:blueprint', '{blueprint:"Empty"}').weakNBT()
    })
    event.remove({id: 'immersiveengineering:blueprint/component_iron'})
    event.remove({id: 'immersiveengineering:blueprint/component_steel'})
    event.recipes.immersiveengineering.blueprint('immersiveengineering:component_iron', ['2x #forge:plates/iron', 'minecraft:copper_ingot'], 'Mechanical Components')
    event.recipes.immersiveengineering.blueprint('immersiveengineering:component_steel', ['2x #forge:plates/steel', 'minecraft:copper_ingot'], 'Mechanical Components')
    event.shaped(Item.of('immersiveengineering:blueprint', '{blueprint:"electrode"}'), [
        'ABA',
        'DCD',
        'ABA'
    ],{
        A: 'immersiveengineering:mold_rod',
        B: 'immersiveengineering:ingot_hop_graphite',
        C: Item.of('immersiveengineering:blueprint', '{blueprint:"Empty"}').weakNBT(),
        D: Item.of('immersiveengineering:graphite_electrode', '{graphDmg:0}').weakNBT()
    })
})