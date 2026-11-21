ServerEvents.recipes(event => {
    event.shapeless(Item.of('immersiveengineering:blueprint', '{blueprint:"bannerpatterns"}'), [
        '#minecraft:banners',
        Item.of('immersiveengineering:blueprint', '{blueprint:"Empty"}').weakNBT()
    ]).id('immersiveengineering:crafting/blueprint_bannerpatterns')

    event.shaped(Item.of('immersiveengineering:blueprint', '{blueprint:"components"}'), [
        'ABC',
        'DEF',
        ' G '
    ], {
        A: '#forge:wires/aluminum',
        B: '#forge:wires/copper',
        C: '#forge:wires/electrum',
        D: 'minecraft:redstone',
        E: 'immersiveengineering:plate_duroplast',
        F: 'minecraft:quartz',
        G: Item.of('immersiveengineering:blueprint', '{blueprint:"Empty"}').weakNBT()
    }).id('immersiveengineering:crafting/blueprint_components')

    event.shaped(Item.of('immersiveengineering:blueprint', '{blueprint:"bullet"}'), [
        'BAB',
        ' C '
    ], {
        A: 'immersiveengineering:empty_casing',
        B: 'minecraft:gunpowder',
        C: Item.of('immersiveengineering:blueprint', '{blueprint:"Empty"}').weakNBT()
    }).id('immersiveengineering:crafting/blueprint_bullets')
})