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
    /*
    event.custom({
    type: "immersiveengineering:arc_furnace",
    additives: [{
        tag: "forge:ingots/silver"
        }],
    energy: 51200,
    input: {
        tag: "forge:ingots/gold"
    },
    results: [{
        base_ingredient: {
            tag: "forge:ingots/electrum"
        },
        count: 2
        }],
    time: 100
    })
    */
})