ServerEvents.recipes(event => {
    event.shaped(Item.of('immersiveengineering:cokebrick', 1), [
        'BCB',
        'CAC',
        'BCB'
    ], {
        A: 'kubejs:hardened_brass_sheet',
        B: 'minecraft:clay_ball',
        C: 'minecraft:bricks'
    }).id('immersiveengineering:crafting/cokebrick')

    event.shaped(Item.of('immersiveengineering:blastbrick', 2), [
        'BCB',
        'CAC',
        'BCB'
    ], {
        A: 'immersiveengineering:cokebrick',
        B: 'immersiveengineering:coke',
        C: 'kubejs:hardened_brass_sheet'
    }).id('immersiveengineering:crafting/blastbrick')

    event.shaped(Item.of('immersiveengineering:alloybrick', 2), [
        ' B ',
        'CAC',
        ' B '
    ], {
        A: 'minecraft:clay',
        B: 'minecraft:bricks',
        C: '#forge:sandstone'
    }).id('immersiveengineering:crafting/alloybrick')
        event.shaped(Item.of('immersiveengineering:alloybrick', 2), [
        ' C ',
        'BAB',
        ' C '
    ], {
        A: 'minecraft:clay',
        B: 'minecraft:bricks',
        C: '#forge:sandstone'
    }).id('immersiveengineering:crafting/alloybrick_reverse')
    event.remove({id: 'createaddition:compat/immersiveengineering/item_application/kiln_brick'})

    event.replaceInput({id: 'minecraft:flint_and_steel'}, 'minecraft:iron_ingot', '#forge:ingots/steel')
    
    event.shaped(Item.of('immersiveengineering:steel_scaffolding_standard', 2), [
        'ABA',
        'BAB',
        'ABA'
    ], {
        A: '#forge:rods/steel',
        B: '#forge:ingots/steel'
    }).id('immersiveengineering:crafting/steel_scaffolding_standard')

    event.shaped(Item.of('immersiveengineering:craftingtable', 1), [
        'AAA',
        'BCB',
        'BDB'
    ], {
        A: '#forge:treated_wood_slab',
        B: '#forge:rods/treated_wood',
        C: 'minecraft:crafting_table',
        D: 'minecraft:chest'
    }).id('immersiveengineering:crafting/craftingtable')

    event.shaped(Item.of('immersiveengineering:rs_engineering', 2), [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: '#forge:sheetmetals/iron',
        B: 'kubejs:simple_redstone_alloy_ingot',
        C: 'minecraft:copper_ingot'
    }).id('immersiveengineering:crafting/rs_engineering')

    event.shaped(Item.of('immersiveengineering:light_engineering', 2), [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: '#forge:sheetmetals/iron',
        B: 'immersiveengineering:component_iron',
        C: 'minecraft:copper_ingot'
    }).id('immersiveengineering:crafting/light_engineering')

    event.shaped(Item.of('immersiveengineering:heavy_engineering', 2), [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: '#forge:sheetmetals/steel',
        B: 'immersiveengineering:component_steel',
        C: '#forge:ingots/electrum'
    }).id('immersiveengineering:crafting/heavy_engineering')

    //!!!TODO: CRAFTING COMPONENTS!!!

    event.shaped(Item.of('immersiveengineering:blueprint', '{blueprint:"Empty"}'), [
        'CCC',
        'BBB',
        'DAD'
    ], {
        A: 'minecraft:blue_dye',
        B: 'minecraft:paper',
        C: '#forge:dusts/iron',
        D: 'minecraft:lapis_lazuli'
    })

    event.shaped(Item.of('immersiveengineering:blueprint', '{blueprint:"molds"}'), [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: '#forge:plates/steel',
        B: Item.of('immersiveengineering:blueprint', '{blueprint:"Empty"}').weakNBT()
    }).id('immersiveengineering:crafting/blueprint_molds')

    event.shaped(Item.of('immersiveengineering:blueprint', '{blueprint:"Mechanical Components"}'), [
        ' A ',
        'BCB',
        ' A '
    ], {
        A: 'immersiveengineering:component_iron',
        B: 'immersiveengineering:component_steel',
        C: Item.of('immersiveengineering:blueprint', '{blueprint:"Empty"}').weakNBT()
    }).id('immersiveengineering:crafting/blueprint_mechanical_components')

    event.recipes.immersiveengineering.blueprint('immersiveengineering:component_iron', ['2x #forge:plates/iron', 'minecraft:copper_ingot'], 'Mechanical Components').id('immersiveengineering:blueprint/component_iron')
    event.recipes.immersiveengineering.blueprint('immersiveengineering:component_steel', ['2x #forge:plates/steel', 'minecraft:copper_ingot'], 'Mechanical Components').id('immersiveengineering:blueprint/component_steel')
    
    event.shaped(Item.of('immersiveengineering:blueprint', '{blueprint:"electrode"}'), [
        'ABA',
        'DCD',
        'ABA'
    ], {
        A: 'immersiveengineering:mold_rod',
        B: 'immersiveengineering:ingot_hop_graphite',
        C: Item.of('immersiveengineering:blueprint', '{blueprint:"Empty"}').weakNBT(),
        D: Item.of('immersiveengineering:graphite_electrode', '{graphDmg:0}').weakNBT()
    }).id('immersiveengineering:blueprint/electrodes')

    event.shaped(Item.of('immersiveengineering:fluid_pipe', 3), [
        'AAA',
        'B B',
        'AAA'
    ], {
        A: '#forge:plates/iron',
        B: 'minecraft:bucket'
    }).id('immersiveengineering:crafting/fluid_pipe')

    event.shaped(Item.of('create:fluid_pipe'), [
        'ABA'
    ], {
        A: '#forge:plates/copper',
        B: 'immersiveengineering:fluid_pipe'
    }).id('create:crafting/kinetics/fluid_pipe')
    event.shaped(Item.of('create:fluid_pipe'), [
        'A',
        'B',
        'A'
    ], {
        A: '#forge:plates/copper',
        B: 'immersiveengineering:fluid_pipe'
    }).id('create:crafting/kinetics/fluid_pipe_vertical')

    event.shaped(Item.of('immersiveengineering:wooden_barrel'), [
        'ABA',
        'C C',
        'ABA'
    ], {
        A: '#forge:treated_wood',
        B: '#forge:treated_wood_slab',
        C: '#forge:rods/iron'
    }).id('immersiveengineering:crafting/wooden_barrel')

    event.remove({id: 'createaddition:compat/immersiveengineering/item_application/reinforced_blast_brick'})
    event.shaped(Item.of('immersiveengineering:blastbrick_reinforced'), [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: '#forge:plates/steel',
        B: 'minecraft:blaze_powder',
        C: 'minecraft:red_nether_bricks',
        D: 'immersiveengineering:blastbrick'
    }).id('immersiveengineering:crafting/blastbrick_reinforced')

    event.shaped(Item.of('immersiveengineering:radiator', 2), [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'immersiveengineering:sheetmetal_steel',
        B: '#forge:plates/constantan',
        C: ''
    }).id('immersiveengineering:crafting/radiator')  
})