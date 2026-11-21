ServerEvents.recipes(event =>{
    event.shaped('create:mechanical_arm', [
      'ABA',
      'BCC',
      'DED'
    ], {
      A: 'create:andesite_alloy',
      B: 'kubejs:hardened_brass_sheet',
      C: 'create:cogwheel',
      D: 'create:precision_mechanism',
      E: 'create:brass_casing',
    }).id('create:crafting/kinetics/mechanical_arm')

    event.shapeless('create:gearshift', [
      'create:andesite_casing',
      'create:cogwheel',
      'create:shaft',
      'minecraft:redstone'
    ]).id('create:crafting/kinetics/gearshift')

    event.shapeless('create:encased_chain_drive', [
      'create:andesite_casing',
      'minecraft:chain',
      'create:shaft',
      'minecraft:chain',
      'create:cogwheel'
    ]).id('create:crafting/kinetics/encased_chain_drive')
    event.remove({id: 'create:crafting/kinetics/encased_chain_drive_from_zinc'})

    event.shaped('create:rotation_speed_controller', [
        ' D ',
        'BAB',
        'CAE'
    ], {
        A: 'create:brass_casing',
        B: 'create:precision_mechanism',
        C: 'create:gearshift',
        D: 'create:shaft',
        E: 'create:adjustable_chain_gearshift'
    }).id('create:crafting/kinetics/rotation_speed_controller')
})