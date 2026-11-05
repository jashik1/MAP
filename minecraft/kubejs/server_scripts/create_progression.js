ServerEvents.recipes(event => {
  event.recipes.tconstruct.casting_basin('create:andesite_alloy').fluid('tconstruct:molten_copper', 20).cast('#forge:andesite').cast_consumed(true).cooling_time(30)
  
  const transitionalItem = 'kubejs:unprocessed_hardened_brass_sheet'
  event.recipes.create.sequenced_assembly(
      [
        'kubejs:hardened_brass_sheet'
      ],
        'create:brass_sheet', 
      [
        event.recipes.create.filling(transitionalItem, [transitionalItem, Fluid.of('tconstruct:molten_iron', 250)]),
        event.recipes.create.pressing(transitionalItem, transitionalItem),
        event.recipes.create.deploying(transitionalItem, [transitionalItem, 'minecraft:iron_nugget']),
        event.recipes.create.filling(transitionalItem, [transitionalItem, Fluid.of('tconstruct:molten_osmium', 250)]),
        event.recipes.create.pressing(transitionalItem, transitionalItem),
        event.recipes.create.deploying(transitionalItem, [transitionalItem, 'mekanism:nugget_osmium']),
      ]
    )
    .transitionalItem(transitionalItem)
    .loops(1)

    event.replaceInput({id: 'create:item_application/brass_casing_from_log'}, 'create:brass_ingot', 'kubejs:hardened_brass_sheet')
    event.replaceInput({id: 'create:item_application/brass_casing_from_log'}, '#forge:stripped_logs', 'create:andesite_casing')
    event.remove({id: 'create:item_application/brass_casing_from_wood'})
    event.replaceInput({id: 'create:item_application/copper_casing_from_log'}, '#forge:stripped_logs', 'create:andesite_casing')
    event.remove({id: 'create:item_application/copper_casing_from_wood'})

    event.remove({id: 'create:crushing/diorite_recycling'})
    event.recipes.create.crushing(Item.of('minecraft:quartz').withChance(0.9), '#create:stone_types/diorite')
    event.remove({id: 'create:crushing/diorite'})
    event.recipes.create.milling(Item.of('minecraft:quartz').withChance(0.6), '#create:stone_types/diorite')

    event.remove({id: 'create:crafting/kinetics/mechanical_press'})
    event.shaped(Item.of('create:mechanical_press', 1), [
      ' B ',
      'EAE',
      'DCD'
    ], {
      A: 'create:andesite_casing',
      B: 'create:shaft',
      C: 'minecraft:iron_block',
      D: '#forge:plates/iron',
      E: 'create:cogwheel'
    })
    event.remove({id: 'create:crafting/kinetics/encased_fan'})
    event.shaped(Item.of('create:encased_fan', 1), [
      ' B ',
      ' A ',
      'DCD'
    ], {
      A: 'create:gearbox',
      B: 'create:shaft',
      C: 'create:propeller',
      D: 'minecraft:iron_bars'
    })
    event.remove({id: 'create:crafting/kinetics/mechanical_mixer'})
    event.shaped(Item.of('create:mechanical_mixer', 1), [
      ' B ',
      'DAD',
      ' C '
    ], {
      A: 'create:gearbox',
      B: 'create:cogwheel',
      C: 'create:whisk',
      D: 'create:piston_extension_pole'
    })
    event.remove({id: 'create:crafting/kinetics/spout'})
    event.shaped(Item.of('create:spout', 1), [
      ' A ',
      'DBD',
      ' C '
    ], {
      A: 'create:electron_tube',
      B: 'create:fluid_tank',
      C: 'kubejs:nozzle',
      D: 'create:andesite_alloy'
    })
    event.shaped(Item.of('kubejs:nozzle', 1), [
      'ABA',
      ' A '
    ], {
      A: '#forge:plates/copper',
      B: 'minecraft:dried_kelp'
    })
    event.remove({id: 'create:crafting/kinetics/fluid_tank'})
    event.shaped(Item.of('create:fluid_tank', 1), [
      'ABA',
      'BCB',
      'ABA'
    ], {
      A: '#forge:plates/copper',
      B: '#forge:glass',
      C: 'minecraft:barrel'
    })
})