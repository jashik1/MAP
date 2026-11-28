ServerEvents.recipes(event =>{
    event.custom({
    type: "immersiveengineering:arc_furnace",
    additives: [{
        base_ingredient: {
        item: 'immersiveengineering:steel_scaffolding_standard'
        },
        count: 2
        }, {
        base_ingredient: {
        tag: 'forge:treated_wood'
        },
        count: 4
        }, {
        item: 'immersiveengineering:plate_duroplast'
        }, {
        base_ingredient: {
        tag: 'forge:ingots/electrum'
        },
        count: 4
        }],
    energy: 409600,
    input: {
        item: 'create:brass_casing'
    },
    results: [{
        item: 'industrialforegoing:machine_frame_pity'
        }],
    time: 400
    }).id('industrialforegoing:machine_frame_pity')
    event.shaped('industrialforegoing:fluid_extractor', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: '#forge:ingots/steel',
        B: 'industrialforegoing:common_black_hole_tank',
        C: '#forge:plates/iron',
        D: 'industrialforegoing:machine_frame_pity',
        E: 'minecraft:piston'
    }).id('industrialforegoing:fluid_extractor')

    event.replaceInput('industrialforegoing:common_black_hole_tank', '#forge:gears/iron', 'create:fluid_tank')
    event.replaceInput('industrialforegoing:common_black_hole_tank', '#forge:ingots/iron', '#forge:ingots/steel')

    event.replaceInput('industrialforegoing:latex_processing_unit', '#forge:ingots/iron', '#forge:ingots/steel')
    event.replaceInput('industrialforegoing:latex_processing_unit', 'minecraft:redstone_block', 'kubejs:simple_redstone_alloy_block')

})