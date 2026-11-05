ServerEvents.recipes(event => {
    event.remove({input: 'immersiveengineering:hammer', output: '#forge:plates'})
    const metals = ['iron', 'gold', 'copper', 'aluminum', 'lead', 'nickel', 'silver', 'uranium', 'constantan', 'steel', 'electrum']
    metals.forEach(metal => {
        event.shapeless(`#forge:plates/${metal}`, [`2x #forge:ingots/${metal}`, 'immersiveengineering:hammer'])
    })
})