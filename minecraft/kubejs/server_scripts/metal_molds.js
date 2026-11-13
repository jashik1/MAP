ServerEvents.recipes(event => {
    event.remove({input: 'immersiveengineering:hammer', output: '#forge:plates'})
    const plate_metals = ['iron', 'gold', 'copper', 'aluminum', 'lead', 'nickel', 'silver', 'uranium', 'constantan', 'steel', 'electrum']
    plate_metals.forEach(metal => {
        event.shapeless(`#forge:plates/${metal}`, [`2x #forge:ingots/${metal}`, 'immersiveengineering:hammer'])
    })

    event.remove({not: { type: 'immersiveengineering:metal_press' }, output: '#forge:rods/all_metal'})
    const rod_metals = ['iron', 'gold', 'copper', 'aluminum', 'steel', 'electrum', 'brass']
    rod_metals.forEach(metal => {
        event.shaped(Item.of(`#forge:rods/${metal}`, 1), [
            'A',
            'A'
        ], {
            A: `#forge:ingots/${metal}`
        })
        event.recipes.createaddition.rolling(`#forge:ingots/${metal}`, `#forge:rods/${metal}`)
    })
    
    event.remove({type: 'createaddition:rolling_mill', output: '#forge:wires'})
    const wire_metals = ['copper', 'gold', 'aluminum', 'steel', 'electrum', 'lead', 'iron']
    wire_metals.forEach(metal => {
        event.recipes.createaddition.rolling(`#forge:plates/${metal}`, `#forge:wires/${metal}`)
    })
})